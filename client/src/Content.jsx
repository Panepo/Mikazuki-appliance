// @flow

import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import { withStyles, withWidth } from '@material-ui/core'
import { isSmartphone } from './helpers/responsive.helper'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'

import floorGreen from './images/floor-green.svg'
import floorWhite from './images/floor-white.svg'
import floorOff from './images/floor-off.svg'
import deskGreen from './images/desk-green.svg'
import deskWhite from './images/desk-white.svg'
import deskOff from './images/desk-off.svg'

const styles = (theme: Object) => ({
  root: {
    flexGrow: 1,
    width: '100%'
  },
  formControl: {
    margin: theme.spacing(1),
    width: '95%'
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

  handleTextInput = () => event => {
    this.setState({
      text: {
        input: event.target.value
      }
    })
  }

  handleKeyDown = () => event => {
    if (event.key === 'Enter') {
      event.preventDefault()
      const message = this.state.text.input
      axios
        .post('/text/analysis', { text: message })
        .then(res => {
          console.log(res.data.anwser)
          this.handleAppliance(res.data.anwser)
        })
        .catch(err => console.log(err))
    }
  }

  handleAppliance = caseAppliance => {
    switch (caseAppliance) {
      case 'all_on_white':
        this.setState({
          appliance: {
            floor: 'white',
            desk: 'white'
          },
          text: {
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
            output: 'Okay, floor lamp is turned off.'
          }
        })
        break
      default:
        this.setState({
          text: {
            output: 'I do not understand your command, give me a clear one, thanks :)'
          }
        })
        break
    }
  }

  renderFloor = () => {
    if (this.state.appliance.floor === 'off') {
      return <img src={floorOff} alt={'floor lamp'} />
    } else if (this.state.appliance.floor === 'white') {
      return <img src={floorWhite} alt={'floor lamp'} />
    } else if (this.state.appliance.floor === 'green') {
      return <img src={floorGreen} alt={'floor lamp'} />
    }
  }

  renderDesk = () => {
    if (this.state.appliance.desk === 'off') {
      return <img src={deskOff} alt={'desk light'} />
    } else if (this.state.appliance.desk === 'white') {
      return <img src={deskWhite} alt={'desk light'} />
    } else if (this.state.appliance.desk === 'green') {
      return <img src={deskGreen} alt={'desk light'} />
    }
  }

  render() {
    return (
      <main className={this.props.classes.root}>
        <Grid container={true} justify="center">
          <Grid item={true} xs={isSmartphone(this.props.width) ? 4 : 8}>
            <Paper>
              <Grid container={true} justify="center">
                {this.renderDesk()}
                {this.renderFloor()}
              </Grid>
              <TextField
                className={this.props.classes.formControl}
                id="text-input"
                label="Your Command"
                margin="normal"
                value={this.state.text.input || ''}
                onChange={this.handleTextInput()}
                onKeyDown={this.handleKeyDown()}
              />
              <TextField
                className={this.props.classes.formControl}
                id="text-output"
                label="Mikazuki anwsers"
                margin="normal"
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
