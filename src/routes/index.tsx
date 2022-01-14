import React from 'react'

import Home from 'pages/Home'

import {
  BrowserRouter as Router,
  Route,
  Routes as RouterRoutes
} from 'react-router-dom'

//! updates in react-router
//? https://reactrouter.com/docs/en/v6/getting-started/overview

const Routes = () => (
  <Router>
    <RouterRoutes>
      <Route path='/' element={<Home />}>
        <Route path='home' element={<Home />} />
      </Route>
    </RouterRoutes>
  </Router>
)

export default Routes
