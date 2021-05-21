import React from 'react' 
import styled from 'styled-components'
import {Link} from 'react-router-dom' 

const HeaderWrapper = styled.header`
    height: 60px; 
    width: 100%; 
    box-sizing: border-box; 
    display: flex; 
    position: fixed; 
    top: 0; 
    padding: 0 16px; 
    background-color: #eee;
`


export function Header(){ 
    return ( 
        <HeaderWrapper>
            <Link to="/"> Home </Link>
            <Link to="/login"> Login</Link>
        </HeaderWrapper>
    )
}