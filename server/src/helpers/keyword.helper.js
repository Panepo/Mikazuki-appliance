export const isKeyword = (tokens, template) => {
  let result = false
  tokens.forEach(token => {
    if (token.tag === 'eng') {
      template.eng.forEach(word => {
        if (token.word === word) {
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
