// @flow

import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'

const styles = (theme: Object) => ({
  root: {
  }
})

type Props = {
  classes: Object
}

const Content = (props: Props) => {
  return <Paper className={props.classes.root}>FQ</Paper>
}

Content.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Content)
