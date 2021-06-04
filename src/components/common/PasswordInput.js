import React, {useState} from 'react'
import styled from 'styled-components'
import {Input} from './Input'

const PasswordInputWrapper = styled.div`
    display: flex;
    ~div { 
        margin-bottom: 8px;
    }
    /* Select the next div sibling */
`
const PasswordInputStyled = styled(Input).attrs(() => ({ 
    type: 'password', 
    placeholder: 'Password'
}))`
    border-top-right-radius: 0; 
    border-bottom-right-radius: 0;
`
const ToggleButton = styled.div`
    box-sizing: border-box;
    display: flex;
    height: 40px; 
    border: 1px solid #ccc; 
    font-size: 0.9em; 
    font-weight: bold;
    padding: 8px; 
    border-left: 0;
    border-top-right-radius: 4px; 
    border-bottom-right-radius: 4px;
    background-color: #fff; 
    cursor: pointer; 
    user-select: none;
    color: black;
`

export function PasswordInput(props) { 
    const [showPassword, setShowPassword] = useState(false);

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