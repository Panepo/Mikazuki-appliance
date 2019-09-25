import taskAppliance from './appliance.task'

describe('Task >> Appliance test', () => {
  it('should recognize the text about appliance', () => {
    let input = 'turn the right light on'
    let anwser = { anwser: 'right_on_none', time: null }
    expect(taskAppliance(input)).toEqual(anwser)


    input = 'switch all lights to green'
    anwser = { anwser: 'all_on_green', time: null }
    expect(taskAppliance(input)).toEqual(anwser)

    input = 'all lights off'
    anwser = { anwser: 'all_off_none', time: null }
    expect(taskAppliance(input)).toEqual(anwser)
  })
})
