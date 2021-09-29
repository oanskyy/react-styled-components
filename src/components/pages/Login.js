import React, {useEffect, useState} from 'react' 
import {PageLayout, Input, PasswordInput, Button} from 'components/common'
import styled from 'styled-components'

const Form = styled.form`
    width: 100%; 
    max-width: 400px; 
    background-color: #fff; 
    border: 1px solid #eee; 
    padding: 16px; 
    border-radius: 4px;
`

let timeout;

export default function Login() { 
    const [formFields, setFormFields] = useState({username: '', password: ''}); 
    const [loading, setLoading] = useState(false)

    function handleInputChange(e) { 
        e.persist();
        setFormFields(state => ({ 
            ...state, 
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmit(e){ 
        // this is used to prevent the default action of submit, because we don't actually want to submit the form here OR the page to refresh
        e.preventDefault();
        setLoading(true); 
        timeout = setTimeout(() => { 
            setLoading(false);
        }, 2000);
    }

    // [] with useEffect hook we need to pass in an empty array, so this will only run when the component mounts. 
    useEffect(() => { 
        return ()=> { 
            if(timeout){ 
                clearTimeout(timeout);
            }
        }
    }, [])

    return ( 
        <PageLayout>
            <h1>login from login.js</h1>
            <Form onSubmit={handleSubmit}>
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

                <Button type='submit' disabled={loading}>
                    {loading ? 'Loading...' : 'Login'}
                </Button>

                {!loading && 
                <Button type='button' secondary>
                    Register
                </Button>
                }

            </Form>
        </PageLayout>
    )
}
