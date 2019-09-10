import nodejieba from 'nodejieba'
import trans from 'chinese-conv'

export const tokenize = input => {
  const words = nodejieba.tag(trans.sify(input))
  const results = []
  words.forEach(word => {
    word.word = trans.tify(word.word)
    if (word.word !== ' ') {
      results.push({ word: trans.tify(word.word), tag: word.tag })
    }
  })
  return results
}
