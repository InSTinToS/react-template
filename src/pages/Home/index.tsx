import React from 'react'

import logo from 'assets/logo.svg'

const Home = () => {
  return (
    <div className='Home'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' width={300} />

        <h1>Hello World</h1>

        <h2>
          Env test (env variables needs to start with: REACT_APP_): <br />
          {process.env.REACT_APP_ENV_TEST}
        </h2>
      </header>
    </div>
  )
}

export default Home
