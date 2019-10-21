# coding: utf-8

from flask import Blueprint, send_from_directory

blueprint = Blueprint("static", __name__)


@blueprint.route("/")
def static_serving():
    return send_from_directory("static", "index.html")
