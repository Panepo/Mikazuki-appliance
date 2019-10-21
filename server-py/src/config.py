# -*- coding: utf-8 -*-
"""Application configuration."""

import os

basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    """Base configuration."""

    APP_DIR = os.path.abspath(os.path.dirname(__file__))  # This directory
    PROJECT_ROOT = os.path.abspath(os.path.join(APP_DIR, os.pardir))
    SECRET_KEY = "this_is_secret_key"
    DEBUG_TB_INTERCEPT_REDIRECTS = False
    CACHE_TYPE = "simple"  # Can be "memcached", "redis", etc.
    CORS_ORIGIN_WHITELIST = [
        "http://0.0.0.0:4100",
        "http://localhost:4100",
        "http://0.0.0.0:8000",
        "http://localhost:8000",
        "http://0.0.0.0:4200",
        "http://localhost:4200",
        "http://0.0.0.0:4000",
        "http://localhost:4000",
    ]


class ProdConfig(Config):
    """Production configuration."""

    ENV = "prod"
    DEBUG = False


class DevConfig(Config):
    """Development configuration."""

    ENV = "dev"
    DEBUG = True
    CACHE_TYPE = "simple"


class TestingConfig(Config):
    """Test configuration."""

    TESTING = True
    DEBUG = True
