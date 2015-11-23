import React from 'react'
import { Router, Route, IndexRoute, IndexRedirect } from 'react-router'

import Layout from './layout.js'
import Index from './main/index.js'

export default function Routes ({history}) {
  return (
    <Router history={history}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Index} />
      </Route>
    </Router>
  )
}
