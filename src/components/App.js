import React from 'react'
import {createGlobalStyle} from 'styled-components'
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

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Switch> 
          <Route path="/"><Home/></Route>
        </Switch>
        <Switch>
          <Route path="/login"><Login/></Route>
        </Switch>
      </BrowserRouter>
    </ div>
  );
}

export default App;
