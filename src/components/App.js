import React from 'react'
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from 'components/pages/Home'
import Login from 'components/pages/Login'

const GlobalStyle = createGlobalStyle`
  body { 
    background: #fff; 
    min-height: 100vh;
    margin: 0; 
    color: black; 
    font-family: 'Kaushan Script'
  }
`

const theme = {
  primaryColor: '#f8049c', 
  secondaryColor: '#fdd54f'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch> 
          <Route path="/"><Home /></Route>
          <Route path="/login"><Login /></Route>
        </Switch>
      </BrowserRouter>
    </ ThemeProvider>
  );
}

export default App;
