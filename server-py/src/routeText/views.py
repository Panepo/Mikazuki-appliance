# coding: utf-8

from flask import Blueprint, jsonify, request
from flask_apispec import marshal_with

from .serializers import text_schema
from .appliance import taskAppliance

blueprint = Blueprint("text", __name__)


@blueprint.route("/text/analysis", methods=("POST",))
@marshal_with(text_schema)
def text_analysus():
    request_data = request.get_json()
    task = taskAppliance(request_data["text"])
    print(task)
    return jsonify({"anwser": task})
