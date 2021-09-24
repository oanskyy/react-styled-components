import styled, {css} from 'styled-components';

const Button = styled.button`
    display: inline-block; 
    padding: 12px 28px;
    border-radius: 28px; 
    box-shadow: none; 
    border: none; 
    color: white; 

    /* background: #f8049c;  */
    /* this is where we can interpolate a function. using the $ {}  we get access to the props.  */
    background: ${props => props.secondary ? props.theme.secondaryColor : props.theme.primaryColor}; 
    cursor: pointer;
    font-size: 1em; 
    font-weight: bold; 
    text-align: center;
    white-space: none;
    
    /*  This is how we can add more than one property with just one interpolated function instead of adding for each single property (like the bg)  */
    ${props => props.large ? css`
        padding: 16px 32px; 
        font-size: 1.5em;
        ` : css`
        padding: 12px 28px; 
        font-size: 1em; 
        `
    };

    /* this is an attribute that we are passing in, not a prop in the traditional sense, we have this disabled state */
    &:disabled{ 
        background: #eee; 
        color: #666;
    }
    &:hover { 
        background-color: #f8319a;
        position:relative;
	    top:1px;
    }
`;

export {Button};