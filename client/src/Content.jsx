// @flow

import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import { withStyles, withWidth } from '@material-ui/core'
import { isSmartphone } from './helpers/responsive.helper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import axios from 'axios'

import floorGreen from './images/floor-green.svg'
import floorWhite from './images/floor-white.svg'
import floorOff from './images/floor-off.svg'
import deskGreen from './images/desk-green.svg'
import deskWhite from './images/desk-white.svg'
import deskOff from './images/desk-off.svg'

import dayjs from 'dayjs'
import 'dayjs/locale/zh-tw'
// Days locale
dayjs.locale('zh-tw')

const styles = (theme: Object) => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  formControl: {
    margin: theme.spacing(1),
    width: '99%'
  },
  button: {
    margin: theme.spacing(1)
  }
})

type Props = {
  classes: Object,
  width: string
}

type State = {
  appliance: {
    floor: string,
    desk: string
  },
  text: {
    input: string,
    output: string
  }
}

class Content extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = {
      appliance: {
        floor: 'off',
        desk: 'off'
      },
      text: {
        input: '',
        output: ''
      }
    }

    this.handleTextInput = this.handleTextInput.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  // ================================================================================
  // React event handler functions
  // ================================================================================
  handleTextInput = () => event => {
    this.setState({
      text: {
        ...this.state.text,
        input: event.target.value
      }
    })
  }

  handleKeyDown = () => event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      this.handleAppliance(this.state.text.input)
    }
  }

  handleButton = text => event => {
    this.setState({
      text: {
        ...this.state.text,
        input: text
      }
    })
    this.handleAppliance(text)
  }

  // ================================================================================
  // Appliance hanlder functions
  // ================================================================================
  handleAppliance = message => {
    axios
      .post('/text/analysis', { text: message })
      .then(res => {
        if (res.data.time) {
          const dateNow = new Date()
          const dateNlp = new Date(res.data.time)
          const timeNow = dateNow.getTime()
          const timeNlp = dateNlp.getTime()
          if (timeNow < timeNlp) {
            this.handleApplianceFuture(res.data.anwser, dateNlp)
          } else if (timeNow - timeNlp < 2000) {
            this.handleApplianceNow(res.data.anwser)
          } else {
            this.setState({
              text: {
                ...this.state.text,
                output: 'too bad that I do not have time travelling ability :('
              }
            })
          }
        } else {
          this.handleApplianceNow(res.data.anwser)
        }
      })
      .catch(err => console.log(err))
  }

  handleApplianceNow = caseAppliance => {
    switch (caseAppliance) {
      case 'all_on_white':
        this.setState({
          appliance: {
            floor: 'white',
            desk: 'white'
          },
          text: {
            ...this.state.text,
            output: 'Okay, all lights are swtich to white.'
          }
        })
        break
      case 'all_on_green':
        this.setState({
          appliance: {
            floor: 'green',
            desk: 'green'
          },
          text: {
            ...this.state.text,
            output: 'Okay, all lights are swtich to green.'
          }
        })
        break
      case 'all_on_none':
        this.setState({
          appliance: {
            floor: 'white',
            desk: 'white'
          },
          text: {
            ...this.state.text,
            output: 'Okay, all lights are turned on.'
          }
        })
        break
      case 'all_off_white':
      case 'all_off_green':
      case 'all_off_none':
        this.setState({
          appliance: {
            floor: 'off',
            desk: 'off'
          },
          text: {
            ...this.state.text,
            output: 'Okay, all lights are turned off.'
          }
        })
        break
      case 'left_on_white':
        this.setState({
          appliance: {
            ...this.state.appliance,
            desk: 'white'
          },
          text: {
            ...this.state.text,
            output: 'Okay, desk light is switch to white.'
          }
        })
        break
      case 'left_on_green':
        this.setState({
          appliance: {
            ...this.state.appliance,
            desk: 'green'
          },
          text: {
            ...this.state.text,
            output: 'Okay, desk light is switch to green.'
          }
        })
        break
      case 'left_on_none':
        this.setState({
          appliance: {
            ...this.state.appliance,
            desk: 'white'
          },
          text: {
            ...this.state.text,
            output: 'Okay, desk light is turned on.'
          }
        })
        break
      case 'left_off_white':
      case 'left_off_green':
      case 'left_off_none':
        this.setState({
          appliance: {
            ...this.state.appliance,
            desk: 'off'
          },
          text: {
            ...this.state.text,
            output: 'Okay, desk light is turned off.'
          }
        })
        break
      case 'right_on_white':
        this.setState({
          appliance: {
            ...this.state.appliance,
            floor: 'white'
          },
          text: {
            ...this.state.text,
            output: 'Okay, floor lamp is switch to white.'
          }
        })
        break
      case 'right_on_green':
        this.setState({
          appliance: {
            ...this.state.appliance,
            floor: 'green'
          },
          text: {
            ...this.state.text,
            output: 'Okay, floor lamp is switch to green.'
          }
        })
        break
      case 'right_on_none':
        this.setState({
          appliance: {
            ...this.state.appliance,
            floor: 'white'
          },
          text: {
            ...this.state.text,
            output: 'Okay, floor lamp is turned on.'
          }
        })
        break
      case 'right_off_white':
      case 'right_off_green':
      case 'right_off_none':
        this.setState({
          appliance: {
            ...this.state.appliance,
            floor: 'off'
          },
          text: {
            ...this.state.text,
            output: 'Okay, floor lamp is turned off.'
          }
        })
        break
      default:
        this.setState({
          text: {
            ...this.state.text,
            output:
              'I do not understand your command, give me a clear one, thanks :)'
          }
        })
        break
    }
  }

  handleApplianceFuture = (caseAppliance, date) => {
    const dateTime = dayjs(date)
      .locale('zh-tw')
      .format()
    switch (caseAppliance) {
      case 'all_on_white':
        this.setState({
          text: {
            ...this.state.text,
            output: 'Okay, all lights are swtich to white at ' + dateTime
          }
        })
        break
      case 'all_on_green':
        this.setState({
          text: {
            ...this.state.text,
            output: 'Okay, all lights are swtich to green at ' + dateTime
          }
        })
        break
      case 'all_on_none':
        this.setState({
          text: {
            ...this.state.text,
            output: 'Okay, all lights are turned on at ' + dateTime
          }
        })
        break
      case 'all_off_white':
      case 'all_off_green':
      case 'all_off_none':
        this.setState({
          text: {
            ...this.state.text,
            output: 'Okay, all lights are turned off at ' + dateTime
          }
        })
        break
      case 'left_on_white':
        this.setState({
          text: {
            ...this.state.text,
            output: 'Okay, desk light is switch to white at ' + dateTime
          }
        })
        break
      case 'left_on_green':
        this.setState({
          text: {
            ...this.state.text,
            output: 'Okay, desk light is switch to green at ' + dateTime
          }
        })
        break
      case 'left_on_none':
        this.setState({
          text: {
            ...this.state.text,
            output: 'Okay, desk light is turned on at ' + dateTime
          }
        })
        break
      case 'left_off_white':
      case 'left_off_green':
      case 'left_off_none':
        this.setState({
          text: {
            ...this.state.text,
            output: 'Okay, desk light is turned off at ' + dateTime
          }
        })
        break
      case 'right_on_white':
        this.setState({
          text: {
            ...this.state.text,
            output: 'Okay, floor lamp is switch to white at ' + dateTime
          }
        })
        break
      case 'right_on_green':
        this.setState({
          text: {
            ...this.state.text,
            output: 'Okay, floor lamp is switch to green at ' + dateTime
          }
        })
        break
      case 'right_on_none':
        this.setState({
          text: {
            ...this.state.text,
            output: 'Okay, floor lamp is turned on at ' + dateTime
          }
        })
        break
      case 'right_off_white':
      case 'right_off_green':
      case 'right_off_none':
        this.setState({
          text: {
            ...this.state.text,
            output: 'Okay, floor lamp is turned off at ' + dateTime
          }
        })
        break
      default:
        this.setState({
          text: {
            ...this.state.text,
            output:
              'I do not understand your command, give me a clear one, thanks :)'
          }
        })
        break
    }
  }

  // ================================================================================
  // React render functions
  // ================================================================================
  render() {
    const listCommand = [
      'turn the right light on',
      'switch all lights to green',
      'turn on the left light',
      'all on',
      'switch floor lamp to green',
      'turn the table light off',
      'all lights off'
    ]
    const renderButton = listCommand.reduce((output: any[], data: string) => {
      output.push(
        <Button
          color="primary"
          className={this.props.classes.button}
          variant="outlined"
          key={data}
          onClick={this.handleButton(data)}>
          {data}
        </Button>
      )
      return output
    }, [])

    let renderFloor, renderDesk
    switch (this.state.appliance.floor) {
      case 'off':
        renderFloor = <img src={floorOff} alt={'floor lamp'} />
        break
      case 'white':
        renderFloor = <img src={floorWhite} alt={'floor lamp'} />
        break
      case 'green':
        renderFloor = <img src={floorGreen} alt={'floor lamp'} />
        break
      default:
        break
    }

    switch (this.state.appliance.desk) {
      case 'off':
        renderDesk = <img src={deskOff} alt={'desk light'} />
        break
      case 'white':
        renderDesk = <img src={deskWhite} alt={'desk light'} />
        break
      case 'green':
        renderDesk = <img src={deskGreen} alt={'desk light'} />
        break
      default:
        break
    }

    return (
      <main className={this.props.classes.root}>
        <Grid container={true} justify="center">
          <Grid item={true} xs={isSmartphone(this.props.width) ? 4 : 8}>
            <Paper>
              <Grid container={true} justify="center">
                {renderDesk}
                {renderFloor}
              </Grid>
              {renderButton}
              <TextField
                className={this.props.classes.formControl}
                id="text-input"
                label="Your Command"
                margin="normal"
                variant="outlined"
                value={this.state.text.input || ''}
                onChange={this.handleTextInput()}
                onKeyDown={this.handleKeyDown()}
              />
              <TextField
                className={this.props.classes.formControl}
                id="text-output"
                label="Mikazuki anwsers"
                margin="normal"
                variant="outlined"
                value={this.state.text.output || ''}
              />
            </Paper>
          </Grid>
        </Grid>
      </main>
    )
  }
}

Content.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired
}

export default withWidth()(withStyles(styles)(Content))
