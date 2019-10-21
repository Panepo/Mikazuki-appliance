# -*- coding: utf-8 -*-
"""The app module, containing the app factory function."""
from flask import Flask
from src import commands
from src.routeText.views import blueprint as routeText
from src.staticServing.views import blueprint as staticServing
from src.extensions import cache, cors
from src.config import ProdConfig


def create_app(config_object=ProdConfig):
    """An application factory, as explained here:
    http://flask.pocoo.org/docs/patterns/appfactories/.
    :param config_object: The configuration object to use.
    """
    app = Flask(__name__.split(".")[0], static_url_path="")
    app.url_map.strict_slashes = False
    app.config.from_object(config_object)
    register_extensions(app)
    register_blueprints(app)
    register_commands(app)
    return app


def register_extensions(app):
    """Register Flask extensions."""
    cache.init_app(app)


def register_blueprints(app):
    """Register Flask blueprints."""
    origins = app.config.get("CORS_ORIGIN_WHITELIST", "*")
    cors.init_app(routeText, origins=origins)
    cors.init_app(staticServing, origins=origins)
    app.register_blueprint(routeText)
    app.register_blueprint(staticServing)


def register_commands(app):
    """Register Click commands."""
    app.cli.add_command(commands.test)
    app.cli.add_command(commands.lint)
    app.cli.add_command(commands.clean)
    app.cli.add_command(commands.urls)
