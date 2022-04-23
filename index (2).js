import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import SIgnup103625 from './views/s-ignup103625'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={SIgnup103625} path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
