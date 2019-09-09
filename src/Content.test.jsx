import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Content from './Content'

describe('Page >> Content test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Content />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
