# -*- coding: utf-8 -*-
"""Extensions module. Each extension is initialized in the app factory located in app.py."""

from flask_caching import Cache
from flask_cors import CORS

cache = Cache()
cors = CORS()
