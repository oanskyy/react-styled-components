import React, {useState} from 'react' 
import {PageLayout} from 'components/common/PageLayout'
import styled from 'styled-components'
import { Input } from '../common'

const Form = styled.form`
    width: 100%; 
    max-width: 400px; 
    background-color: #fff; 
    border: 1px solid #eee; 
    padding: 16px; 
`

export default function Login() { 
    const [formFields, setFormFields] = useState({username: '', password: ''})

    return ( 
        <PageLayout>
            <h1>login from login.js</h1>
            <p>Chocolate cotton candy biscuit marzipan chocolate bar sweet shortbread cake gummies. Icing cheesecake biscuit candy marshmallow cake sugar plum. Jelly-o macaroon cheesecake jelly chocolate soufflé shortbread. Sesame snaps cupcake gummies croissant topping marshmallow brownie candy canes bear claw. Shortbread brownie jujubes marshmallow biscuit candy canes gummies.</p>
            <Form>
                <Input type="" value={formFields.username} onChange={handleInputChange} name="username" placeholder="Username" />
            </Form>
        </PageLayout>
    )
}
