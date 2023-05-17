import Banner from './Banner'
import React from 'react'
import ReactDOM from 'react-dom'

if (document.querySelector('#render-react-slider')) {
  ReactDOM.render(<Banner />, document.querySelector('#render-react-slider'))
}
