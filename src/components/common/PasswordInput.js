import React, {useState} from "react"; 
import styled from "styled-components"; 
import { Input } from "./Input";

const PasswordInputWrapper = styled.div`
    display: flex; 

    ~div { 
        margin-bottom: 8px;
    }
`

// this '.attrs()' is a function which takes in a callback function. from this callback function we want to return an OBJ{}
const PasswordInputStyled = styled(Input).attrs(()=> ({ 
    type: 'password' ,
    placeholder: 'Password' 
}))`
border-top-right-radius: 0;
border-bottom-right-radius: 0;
`

const ToggleButton = styled.div`
    /* height: 40px; */
    display: flex; 
    padding: 8px; 
    border: 1px solid #ccc; 
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px; 
    border-left: 0; 
    background: white; 
    font-size: 0.9em; 
    font-weight: bold; 
    cursor: pointer; 
    user-select: none; 
`

export function PasswordInput(props) { 
    const [showPassword, setShowPassword] = useState(true)

    return ( 
        <>
            <PasswordInputWrapper>
                <PasswordInputStyled {...props} />
                <ToggleButton onClick={() => setShowPassword(s => !s)}> 
                
                    {showPassword ? 'Hide' : 'Show'} 
                </ToggleButton>
            </PasswordInputWrapper>
            
            <div>
                {showPassword ? props.value : ''}
            </div>
        </>
    )
}