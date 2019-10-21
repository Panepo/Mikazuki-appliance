# coding: utf-8

from flask import Blueprint, jsonify, request
from flask_apispec import marshal_with

from .serializers import text_schema

blueprint = Blueprint("text", __name__)


@blueprint.route("/text/analysis", methods=("POST",))
@marshal_with(text_schema)
def text_analysus():
    request_data = request.get_json()
    print(request_data["text"])
    return jsonify({"anwser": "all_on_white"})
