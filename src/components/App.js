import React from 'react'
// import {Button} from 'components/common'
import {createGlobalStyle} from 'styled-components'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from 'components/pages/Login'
import Home from 'components/pages/Home'

const GlobalStyle = createGlobalStyle`
  body{ 
    /* display: flex; 
    justify-content: center; */
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
          <Route path="/login"><Login/></Route>
        </Switch>
      </BrowserRouter>
    </ div>
  );
}

export default App;
