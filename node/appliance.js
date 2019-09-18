// import required modules
const nodejieba = require('nodejieba')
const trans = require('chinese-conv')
const unorm = require('unorm')

// process argument
const input = process.argv[2]

if (!input) {
  console.error('[ERROR] the input text string is required')
  process.exit(0)
}

const isKeyword = (tokens, template) => {
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
const templateAll = {
  cht: ['全', '都'],
  eng: ['all', 'all'],
  thre: 0.9
}

const templateLight = {
  cht: ['燈'],
  eng: ['light', 'lamp', 'lights'],
  thre: 0.8
}

const templateLeft = {
  cht: ['左', '桌燈'],
  eng: ['left', 'table'],
  thre: 0.8
}

const templateRight = {
  cht: ['右', '地燈'],
  eng: ['right', 'floor'],
  thre: 0.8
}

const checkDevice = tokens => {
  const all = isKeyword(tokens, templateAll)
  const light = isKeyword(tokens, templateLight)
  const left = isKeyword(tokens, templateLeft)
  const right = isKeyword(tokens, templateRight)

  return light
    ? all
      ? 'all'
      : left
      ? right
        ? 'all'
        : 'left'
      : right
      ? 'right'
      : 'none'
    : 'none'
}
const tokenize = input => {
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

const run = input => {
  const tokens = tokenize(input)
  const device = checkDevice(tokens)
  console.log('[INFO] the appliance you mentioned is: ' + device)
}

run(input)
