import styled, {css} from 'styled-components';

const Button = styled.button`
    color: white; 
    /* background: #f8049c;  */
    /* this is where we can interpolate a function. using the $ {}  we get access to the props.  */
    background: ${props => props.secondary ? props.theme.secondaryColor : props.theme.primaryColor}; 
    font-weight: bold; 
    ${props => props.large ? css`
        padding: 10px; 
        border-radius: 5px; 
        font-size: 1.5em;
        ` : css`
        padding: 8px; 
        border-radius: 4px; 
        font-size: 1em; 
        `
    };
    padding: 8px; 
    border-radius: 4px; 
    box-shadow: none; 
    font-size: 1em; 
    border: none; 
    /* width: 100%;  */
    display: block; 
    white-space: none;
    text-align: center;

    /* this is an attribute that we are passing in, not a prop in the traditional sense, we have this disabled state */
    &:disabled{ 
        background: #eee; 
        color: #666;
    }
`;

export {Button};