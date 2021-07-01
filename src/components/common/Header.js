import React, {useState} from 'react' 
import styled from 'styled-components'
import {Link as ReactRouterDomLink, useLocation } from 'react-router-dom' 

const HeaderWrapper = styled.header`
    height: 60px; 
    width: 100%; 
    box-sizing: border-box; 
    display: flex;
    flex-direction: column;
    position: fixed; 
    top: 0; 
    padding: 0 16px; 
    background-image: linear-gradient(to right, ${p => p.theme.primaryColor}, ${p => p.theme.secondaryColor});
    border-bottom: 3px solid ${p => p.theme.secondaryColor};
`

const Menu = styled.nav`
    display: ${p => p.open ? 'block' : 'none'}; 
    position: relative; 
    width: initial; 
    border-bottom: 3px solid ${p => p.theme.secondaryColor}; 
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
    );
};


const StyledLink = styled(Link)`
    padding: 4px 8px;
    display: block;
    text-align: center;
    box-sizing: border-box;
    margin: auto 0;
    font-weight: ${p => p.isActive ? 'bold' : 'normal'};
    color: ${p => p.theme.bodyFontColor};
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

    @media (min-width: 764px) { 
        display: none; 
    }
`

export function Header(){ 
    const {pathname} = useLocation(); 
    const [menuOpen, setMenuOpen] = useState(false); 



    return ( 
        <HeaderWrapper>
            <MobileMenuIcon onClick={() => setMenuOpen(s => !s)}>
                <div />
                <div />
                <div />
            </MobileMenuIcon>
            <Menu open={menuOpen}>
                <StyledLink to="/login" isActive={pathname === '/login'}>Login</StyledLink>
                <StyledLink to="/" isActive={pathname === '/'}> Home </StyledLink>
            </Menu>
        </HeaderWrapper>
    )
}