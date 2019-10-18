from marshmallow import Schema, fields

class textSchema(Schema):
    text = fields.Str()


text_schema = textSchema()
text_schemas = textSchema(many=True)
