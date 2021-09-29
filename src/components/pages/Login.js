import React, {useState} from 'react' 
import {PageLayout, Input, PasswordInput} from 'components/common'
import styled from 'styled-components'

const Form = styled.form`
    width: 100%; 
    max-width: 400px; 
    background-color: #fff; 
    border: 1px solid #eee; 
    padding: 16px; 
    border-radius: 4px;
`

export default function Login() { 
    const [formFields, setFormFields] = useState({username: '', password: ''})

    function handleInputChange(e) { 
        e.persist();
        setFormFields(state => ({ 
            ...state, 
            [e.target.name]: e.target.value
        }))
    }
    return ( 
        <PageLayout>
            <h1>login from login.js</h1>
            <Form>
                <Input 
                type="text" 
                placeholder="Username" 
                value={formFields.username} 
                onChange={handleInputChange} 
                name="username" 
                />
                <PasswordInput 
                value={formFields.password} 
                onChange={handleInputChange} 
                name="password" 
                />
            </Form>
        </PageLayout>
    )
}
