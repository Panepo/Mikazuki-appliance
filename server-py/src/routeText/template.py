from .nlp import isKeyword

templateColorGreen = {"cht": ["綠", "青"], "eng": ["green", "lime"], "threshold": 0.8}
templateColorWhite = {"cht": ["白"], "eng": ["white"], "threshold": 0.8}


def checkColor(tokens):
    """Check the light color"""
    green = isKeyword(tokens, templateColorGreen)
    white = isKeyword(tokens, templateColorWhite)

    if white is True:
        return "white"
    elif green is True:
        return "green"
    else:
        return "none"


templateOn = {"cht": ["開"], "eng": ["on", "switch"], "threshold": 0.9}
templateOff = {"cht": ["關"], "eng": ["off"], "threshold": 0.9}


def checkSwitch(tokens):
    """Check the light switch"""
    on = isKeyword(tokens, templateOn)
    off = isKeyword(tokens, templateOff)

    if on is True:
        return "on"
    elif off is True:
        return "off"
    else:
        return "none"


templateAll = {"cht": ["全", "都"], "eng": ["all"], "threshold": 1}
templateLight = {"cht": ["燈"], "eng": ["light", "lamp"], "threshold": 0.8}
templateLeft = {"cht": ["左", "桌燈"], "eng": ["left", "table", "desk"], "threshold": 0.9}
templateRight = {"cht": ["右", "地燈"], "eng": ["right", "floor"], "threshold": 0.9}


def checkDevice(tokens):
    """Check the light devices"""
    alllight = isKeyword(tokens, templateAll)
    light = isKeyword(tokens, templateLight)
    left = isKeyword(tokens, templateLeft)
    right = isKeyword(tokens, templateRight)

    if light is True:
        if alllight is True:
            return "all"
        else:
            if left is True:
                if right is True:
                    return "all"
                else:
                    return "left"
            elif right is True:
                return "right"
            else:
                return "none"
    else:
        return "none"
