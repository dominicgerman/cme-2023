// import ExampleReactComponent from './scripts/ExampleReactComponent'
import React from 'react'
import ReactDOM from 'react-dom'

if (document.querySelector('#render-react-here')) {
  ReactDOM.render(
    <div className="test" />,
    document.querySelector('#render-react-here')
  )
}
