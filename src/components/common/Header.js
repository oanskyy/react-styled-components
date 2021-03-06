import React, {useState, useContext} from 'react' 
import styled, {ThemeContext} from 'styled-components'
import {Link as ReactRouterDomLink, useLocation } from 'react-router-dom' 
import {Toggle} from './Toggle'

const HeaderWrapper = styled.header`
    position: fixed; 
    top: 0; 
    height: 60px; 
    width: 100%; 
    display: flex;
    flex-direction: column;
    padding: 0 16px; 
    background-image: linear-gradient(to right, ${props => props.theme.primaryColor}, ${props => props.theme.secondaryColor});
    border-bottom: 3px solid ${props => props.theme.secondaryColor};
`
const Menu = styled.nav`
    display: ${props => props.open ? 'block' : 'none'}; 
    position: absolute; 
    width: 100%; 
    top: 60px; 
    left: 0;
    padding: 8px; 
    border-bottom: 3px solid ${props => props.theme.secondaryColor};
    
    @media (min-width: 768px) { 
        display: flex; 
        position: relative; 
        border-bottom: none;
        width: initial; 
        left: initial; 
        top: initial;
        margin: auto 0 auto auto; 
    }
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
    color: ${props => props.theme.bodyFontColor};
`

const MobileMenuIcon = styled.div`
    margin: auto 0 auto auto; 
    width: 25px; 

    >div{ 
        height: 3px; 
        background: ${props => props.theme.bodyFontColor}; 
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
    const {id, setTheme} = useContext(ThemeContext);



    return ( 
        <HeaderWrapper>
            {/* add event handler */}
            <MobileMenuIcon onClick={() => setMenuOpen(state => !state)}>
                <div />
                <div />
                <div />
            </MobileMenuIcon>
            <Menu open={menuOpen}>
                <StyledLink to="/" isActive={pathname === '/'}> 
                Home 
                </StyledLink>
                <StyledLink to="/login" isActive={pathname === '/login'}>
                Login
                </StyledLink>
                
                <Toggle isActive={id === 'dark'} onToggle={setTheme} />
            </Menu>
        </HeaderWrapper>
    )
}