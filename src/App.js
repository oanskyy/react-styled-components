import React, {useState} from 'react'
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import { Button } from './components/common/Button'
import Buttons from './components/common/Buttons'
import Home from 'components/pages/Home'
import Login from 'components/pages/Login'
import LightTheme from 'themes/light'
import DarkTheme from 'themes/dark'

const GlobalStyle = createGlobalStyle`
  * { 
  box-sizing: border-box; 
  margin: 0;
  padding: 0;
}
  body { 
    min-height: 100vh;
    margin: 0; 
    color: ${props => props.theme.bodyFontColor}; 
    background: ${props => props.theme.bodyBackgroundColor};
    font-family: 'Open Sans'; 
  }
  a { 
      font-family: 'Kaushan Script'; 
    }
`

function App() {
  // set the default theme ()
  const [theme, setTheme] = useState(LightTheme)

  return (
    <ThemeProvider theme={{...theme, setTheme: () => { 
      setTheme(state => state.id === 'light' ? DarkTheme : LightTheme)
    }}}>
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
