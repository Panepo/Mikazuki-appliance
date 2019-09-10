import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import * as ReactGA from 'react-ga'
import { environment } from './environment'

ReactDOM.render(<App />, document.getElementById('mikazuki'))

ReactGA.initialize(environment.GoogleAnalyticsID)
ReactGA.pageview(window.location.pathname + window.location.search)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
