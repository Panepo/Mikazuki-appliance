import unorm from 'unorm'

export const isKeyword = (tokens, template) => {
  let result = false
  tokens.forEach(token => {
    if (token.tag === 'eng') {
      template.eng.forEach(word => {
        if (token.word.includes(word)) {
          result = true
        }
      })
    } else {
      const normInp = unorm.nfd(token.word)
      template.cht.forEach(word => {
        const normTemp = unorm.nfd(word)
        if (normInp.includes(normTemp)) {
          result = true
        }
      })
    }
  })
  return result
}
