import React from 'react'
import { Container } from './styles'

import logo from 'assets/logo.svg'

import { Button } from 'react-bootstrap'

const Home = () => {
  return (
    <Container>
      <header>
        <img src={logo} className='App-logo' alt='logo' width={300} />

        <h1>Hello World</h1>

        <h2>
          Env test (env variables needs to start with: REACT_APP_): <br />
          {process.env.REACT_APP_ENV_TEST}
        </h2>

        <Button className='btn btn-success shadow-none text-light btn-lg'>
          Hello React-Bootstrap
        </Button>
      </header>
    </Container>
  )
}

export default Home
