import os
from flask import Flask, send_from_directory, jsonify, request
from config import DevConfig
from flask_cors import CORS

app = Flask(__name__, static_url_path='')
app.config.from_object(DevConfig)
CORS(app)

@app.route('/')
def static_serving():
    return send_from_directory('static', 'index.html')

@app.route('/text/analysis', methods=["POST"])
def analysus():
    request_data = request.get_json()
    print(request_data['text'])
    return jsonify ({ 'anwser': 'all_on_white' })

if __name__ == '__main__':
    app.run()
