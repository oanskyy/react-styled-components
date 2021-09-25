import React from "react"; 
import styled from "styled-components"; 
import { Input } from "./Input";

// this '.attrs()' is a function which takes in a callback function. from this callback function we want to return an OBJ{}
const PasswordInoutStyled = styled(Input).attrs(()=> ({ 
    type: 'password' ,
    placeholder: 'Password' 
}))`
border-top-right-radius: 0;
border-bottom-right-radius: 0;
`

export function PasswordInput(props) { 
    // const [showPassword, setShowPassword] = useState(false)

    return ( 
        <><PasswordInoutStyled {...props} /></>
    )
}