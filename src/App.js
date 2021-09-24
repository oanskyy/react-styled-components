import React from 'react'
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import { Button } from './components/common/Button'
import Buttons from './components/common/Buttons'
import Home from 'components/pages/Home'
import Login from 'components/pages/Login'

const GlobalStyle = createGlobalStyle`
  body { 
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
          
          <Route path="/login"><Login /></Route>
          <Route path="/"><Home /></Route>
          
        </Switch>
      </BrowserRouter>

      <Button>click</Button>
      <Button disabled>Primary</Button>

      {/* pass props to our btn */}
      <Button secondary>Secondary</Button>
      <Buttons text={'click me'}/>
    </ ThemeProvider>
  );
}

export default App;
