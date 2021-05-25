import React from 'react' 
import styled from 'styled-components'
import {Link as ReactRouterDomLink, useLocation } from 'react-router-dom' 

const HeaderWrapper = styled.header`
    height: 60px; 
    width: 100%; 
    box-sizing: border-box; 
    display: flex; 
    position: fixed; 
    top: 0; 
    padding: 0 16px; 
    background-image: linear-gradient(to right, #f8049c, #fdd54f);
    border-bottom: 3px solid #fdd54f;
`

const Menu = styled.nav`
    display: block; 
    font-family: 'Open Sans'; 
    position: absolute; 
    width: 100%; 
    top: 60px; 
    left: 0; 
    padding: 8px; 
    box-sizing: border-box; 
    border-bottom: 3px solid #fdd54f;
    background: #fff;

    @media(min-width: 768px) { 
        display: flex; 
        background: none; 
        left: initial; 
        top: initial;
        position: relative; 
        width: initial; 
        border-bottom: none; 
        margin: auto 0 auto auto; 
    }
`
const Link = ({isActive, children, ...props}) => {
    return (
        <ReactRouterDomLink {...props}>
            {children}
        </ReactRouterDomLink>
    );
};


const StyledLink = styled(Link)`
    padding: 4px 8px;
    display: block;
    text-align: center;
    box-sizing: border-box;
    margin: auto 0;
    font-weight: ${p => p.isActive ? 'bold' : 'normal'};
    /* color: ${p => p.theme.bodyFontColor}; */
    color: black;
`

const MobileMenuIcon = styled.div` 
    margin: auto 0 auto auto; 
    width: 25px; 
    min-width: 25px; 
    padding: 5px; 
    
    >div{ 
        height: 3px; 
        background: black; 
        margin: 5px 0;
        width: 100%; 
    }
`


export function Header(){ 
    const {pathname} = useLocation(); 



    return ( 
        <HeaderWrapper>
            <MobileMenuIcon>
                <div />
                <div />
                <div />
            </MobileMenuIcon>
            <Menu>
                <StyledLink to="/login" isActive={pathname === '/login'}>Login</StyledLink>
                <StyledLink to="/" isActive={pathname === '/'}> Home </StyledLink>
            </Menu>
        </HeaderWrapper>
    )
}