import React from 'react'
import {Button} from 'components/common'
import {createGlobalStyle} from 'styled-components'
// import Button from 'components/common/Button'

const GlobalStyle = createGlobalStyle`
  body{ 
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
    <h1>
      App
      
    </h1>
    <h2>button</h2>
    <Button>test</Button>
    </div>
  );
}

export default App;
