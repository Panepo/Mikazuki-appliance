# -*- coding: utf-8 -*-
"""The app module, containing the app factory function."""
from flask import Flask
from src import commands, routetext
from src.extensions import cache, cors
from src.config import ProdConfig

def create_app(config_object=ProdConfig):
    """An application factory, as explained here:
    http://flask.pocoo.org/docs/patterns/appfactories/.
    :param config_object: The configuration object to use.
    """
    app = Flask(__name__.split('.')[0])
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
    origins = app.config.get('CORS_ORIGIN_WHITELIST', '*')
    cors.init_app(routetext.views.blueprint, origins=origins)
    app.register_blueprint(routetext.views.blueprint)


def register_commands(app):
    """Register Click commands."""
    app.cli.add_command(commands.test)
    app.cli.add_command(commands.lint)
    app.cli.add_command(commands.clean)
    app.cli.add_command(commands.urls)
