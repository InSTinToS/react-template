import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'styles/bootstrap.scss'
import GlobalStyle from 'styles/globalStyle'
import theme from 'styles/theme'

import Routes from 'routes'

import { ThemeProvider } from 'styled-components'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <Routes />
  </ThemeProvider>
)

export default App
