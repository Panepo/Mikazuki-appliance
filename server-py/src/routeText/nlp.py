import jieba.posseg as pseg
from opencc import OpenCC
from nltk.metrics.distance import jaro_winkler_similarity

s2t = OpenCC("s2t")
t2s = OpenCC("t2s")


def tokenize(text):
    """Tokenize the input string"""
    words = pseg.cut(t2s.convert(text))

    results = []
    for word, flag in words:
        if word is not " ":
            word_dict = {"word": s2t.convert(word), "tag": flag}
            results.append(word_dict)

    return results


def isKeyword(tokens, template):
    """Check if there is a keyword match in tokens"""
    result = False
    for token in tokens:
        if token["tag"] in "eng":
            for keyword in template["eng"]:
                distance = jaro_winkler_similarity(token["word"], keyword)
                if distance >= template["threshold"]:
                    result = True
        else:
            for keyword in template["cht"]:
                if token["word"] in keyword:
                    result = True

    return result
