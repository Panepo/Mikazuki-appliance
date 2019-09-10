import { isKeyword } from '../helpers/keyword.helper'

const templateGreen = {
  cht: ['綠', '青'],
  eng: ['green', 'lime'],
  thre: 0.8
}

const templateYellow = {
  cht: ['白'],
  eng: ['white'],
  thre: 0.8
}

/*
0: none
1: white
2: green
*/
export const checkColor = tokens => {
  const green = isKeyword(tokens, templateGreen)
  const yellow = isKeyword(tokens, templateYellow)
  return yellow ? 'white' : green ? 'green' : 'none'
}
