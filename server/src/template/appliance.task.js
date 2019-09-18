import { tokenize } from '../helpers/nlp.helper'
import { checkTime } from '../helpers/time.helper'
import { checkDevice } from './device.template'
import { checkColor } from './color.template'
import { checkSwitch } from './switch.template'

export default function taskAppliance(message) {
  const time = checkTime(message)
  const tokens = tokenize(message)
  const device = checkDevice(tokens)
  const onoff = checkSwitch(tokens)
  const color = checkColor(tokens)
  const anwser = device + '_' + onoff + '_' + color
  return { anwser: anwser, time: time }
}
