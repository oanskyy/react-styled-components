import React, {useState} from 'react' 
import styled from 'styled-components'
import {Link as ReactRouterDomLink, useLocation } from 'react-router-dom' 
// import {Toggle} from './Toggle'

const HeaderWrapper = styled.header`
    position: fixed; 
    top: 0; 
    height: 60px; 
    width: 100%; 
    display: flex;
    flex-direction: column;
    padding: 0 16px; 
    background-image: linear-gradient(to right, ${p => p.theme.primaryColor}, ${p => p.theme.secondaryColor});
    border-bottom: 3px solid ${p => p.theme.secondaryColor};
`

const Menu2 = styled.nav`
    /* display: ${p => p.open ? 'block' : 'none'};  */
    display: flex; 
    position: relative; 
    /* width: initial; 
    left: initial; 
    top: initial; */
    /* border-bottom: 3px solid ${p => p.theme.secondaryColor};  */
    margin: auto 0 auto auto; 
    
`

const Menu = styled.nav`
    display: flex; 
    justify-content: flex-end;
`

// destructure from the PROPS the 'isActive' prop, the childred and we use the spread operator '...' for any other props
const Link = ({isActive, children, ...props}) => {
    return (
        <ReactRouterDomLink {...props}>
            {children}
        </ReactRouterDomLink>
    );
};

const StyledLink = styled(Link)`
    display: block;
    padding: 4px 8px;
    text-align: center;
    text-decoration: none;
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
            <Menu2 open={menuOpen}>
                <StyledLink to="/" isActive={pathname === '/'}> 
                Home 
                </StyledLink>
                <StyledLink to="/login" isActive={pathname === '/login'}>
                Login
                </StyledLink>
                
                {/* <Toggle></Toggle> */}
            </Menu2>
            <Menu>
            <StyledLink to="/" isActive={pathname === '/'}> 
                Home 
            </StyledLink>
            <StyledLink to="/login" isActive={pathname === '/login'}>
                Login
            </StyledLink>
            </Menu>
        </HeaderWrapper>
    )
}