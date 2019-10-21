# -*- coding: utf-8 -*-
"""Create an application instance."""
from flask.helpers import get_debug_flag

from src.app import create_app
from src.config import DevConfig, ProdConfig

CONFIG = DevConfig

app = create_app(CONFIG)


if __name__ == "__main__":
    app.run()
