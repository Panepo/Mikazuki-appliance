# -*- coding: utf-8 -*-
"""Create an application instance."""
from flask.helpers import get_debug_flag
from src.app import create_app
from src.config import DevConfig, ProdConfig

import argparse

############ Add argument parser for command line arguments ############
parser = argparse.ArgumentParser(description="Minazuki appliance demo python backend")
parser.add_argument(
    "--config", "-c", type=str, default="dev", help="Input string for segmentation"
)
args = parser.parse_args()

if args.config is "prod":
    CONFIG = ProdConfig
else:
    CONFIG = DevConfig


app = create_app(CONFIG)


if __name__ == "__main__":
    app.run()
