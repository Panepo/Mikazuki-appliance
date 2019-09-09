// @flow

import * as React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core'
import withRoot from './withRoot'
import Header from './Header'
import Ribbon from './Ribbon'
import Content from './Content'
import Footer from './Footer'

const styles = (theme: Object) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
  },
  content: {
    marginTop: '-55vh',
    marginBottom: '60px',
    flex: 1
  }
})

type Props = {
  classes: Object
}

const App = (props: Props) => {
  return (
    <div className={props.classes.root}>
      <Header />
      <Ribbon />
      <div className={props.classes.content}><Content /></div>
      <Footer />
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRoot(withStyles(styles)(App))
