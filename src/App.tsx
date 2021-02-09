import React from 'react'
import { hot } from 'react-hot-loader/root'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

import Content from 'pages/Content'

const App = () => (
  <Router>
    <Switch>
      <Route path="/">
        <Content />
      </Route>
    </Switch>
  </Router>
)

export default hot(App)
