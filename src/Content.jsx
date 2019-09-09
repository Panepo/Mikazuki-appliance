// @flow

import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import { withStyles, withWidth } from '@material-ui/core'
import { isSmartphone } from './helpers/responsive.helper'
import Grid from '@material-ui/core/Grid'

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
  state = {
    appliance: {
      floor: 'off',
      desk: 'off'
    },
    text: {
      input: '',
      output: ''
    }
  }

  renderFloor() {
    if (this.state.appliance.floor === 'off') {
      return <img src={floorOff} alt={'floor lamp'} />
    } else if (this.state.appliance.floor === 'white') {
      return <img src={floorWhite} alt={'floor lamp'} />
    } else if (this.state.appliance.floor === 'green') {
      return <img src={floorGreen} alt={'floor lamp'} />
    }
  }

  renderDesk() {
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
