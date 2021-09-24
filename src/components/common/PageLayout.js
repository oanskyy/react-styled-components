import React from 'react'
import styled from 'styled-components' 
import {Header} from './Header'

const Content = styled.main`
    margin: 80px auto 0; 
    padding: 0 16px;  
    max-width: 1280px; 

    h1, h2, h3, h4, h5, h6, a { 
        font-family: 'Kaushan Script'; 
    }
`

export function PageLayout({children}) { 
    return (
        <> 
            <Header />
            <Content> 
                {children}
            </Content>
        </>
    )
}