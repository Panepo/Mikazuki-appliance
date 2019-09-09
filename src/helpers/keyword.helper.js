import natural from 'natural'

export const isKeyword = (tokens, template) => {
  let result = false
  tokens.foreach(token => {
    if (token.tag === 'eng') {
      template.eng.forEach(word => {
        if (token.word === word) {
          result = true
        }
        if (
          // eslint-disable-next-line
          natural.JaroWinklerDistance(token.word, word) > template.threshold
        ) {
          result = true
        }
      })
    } else {
      template.cht.forEach(word => {
        if (token.word === word) {
          result = true
        }
      })
    }
  })
  return result
}
