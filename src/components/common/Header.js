import React from 'react' 
import styled from 'styled-components'
import {Link as ReactRouterDomLink} from 'react-router-dom' 

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

const Menu = styled.nav`
    display: flex; 
    position: relative; 
    width: initial; 
    border-bottom: none; 
    margin: auto 0 auto auto; 
    font-family: 'Open Sans'; 
    background: none; 
    left: initial; 
    top: initial;
`
const Link = ({isActive, children, ...props}) => { 
    return ( 
        <ReactRouterDomLink {...props}> 
            {children}
        </ReactRouterDomLink>
    )
}

const StyledLink = styled(Link)`
    padding: 4px 8px;
    display: block; 
    text-align: center; 
    box-sizing:
`

export function Header(){ 
    return ( 
        <HeaderWrapper>
            <Menu>
                <StyledLink to="/login">Login</StyledLink>
                <StyledLink to="/"> Home </StyledLink>
            </Menu>
        </HeaderWrapper>
    )
}