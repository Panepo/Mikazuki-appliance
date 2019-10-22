from .nlp import tokenize
from .template import checkColor, checkSwitch, checkDevice


def taskAppliance(message):
    tokens = tokenize(message)
    device = checkDevice(tokens)
    onoff = checkSwitch(tokens)
    color = checkColor(tokens)
    return device + "_" + onoff + "_" + color
