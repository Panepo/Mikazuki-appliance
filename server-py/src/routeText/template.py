from .nlp import isKeyword

templateColorGreen = {"cht": ["綠", "青"], "eng": ["green", "lime"], "threshold": 0.8}

templateColorWhite = {"cht": ["白"], "eng": ["white"], "threshold": 0.8}


def checkColor(tokens):
    """Check the light color"""
    green = isKeyword(tokens, templateColorGreen)
    white = isKeyword(tokens, templateColorWhite)

    return "white" if white is True else "green" if green is True else "none"


templateOn = {"cht": ["開"], "eng": ["on", "switch"], "threshold": 0.9}

templateOff = {"cht": ["關"], "eng": ["off"], "threshold": 0.9}


def checkSwitch(tokens):
    """Check the light switch"""
    on = isKeyword(tokens, templateOn)
    off = isKeyword(tokens, templateOff)

    return "on" if on is True else "off" if off is True else "none"


templateAll = {"cht": ["全", "都"], "eng": ["all", "all"], "threshold": 0.9}

templateLight = {"cht": ["燈"], "eng": ["light", "lamp", "lights"], "threshold": 0.8}

templateLeft = {"cht": ["左", "桌燈"], "eng": ["left", "table"], "threshold": 0.8}

templateRight = {"cht": ["右", "地燈"], "eng": ["right", "floor"], "threshold": 0.8}


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
