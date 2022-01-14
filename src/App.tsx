import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'styles/bootstrap.scss'
import GlobalStyle from 'styles/globalStyle'
import theme from 'styles/theme'

import Home from 'pages/Home'

import { ThemeProvider } from 'styled-components'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />

    <Home />
  </ThemeProvider>
)

export default App
