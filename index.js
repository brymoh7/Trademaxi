import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import SIgnup941253 from './views/s-ignup941253'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={SIgnup941253} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
