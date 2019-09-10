import { isKeyword } from '../helpers/keyword.helper'

const templateOn = {
  cht: ['開'],
  eng: ['on'],
  thre: 1
}

const templateOff = {
  cht: ['關'],
  eng: ['off'],
  thre: 1
}

/*
0: none
1: on
2: off
*/

export const checkSwitch = tokens => {
  const on = isKeyword(tokens, templateOn)
  const off = isKeyword(tokens, templateOff)
  return on ? 'on' : off ? 'off' : 'none'
}
