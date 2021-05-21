import styled, {css} from 'styled-components'

const Button = styled.button`
    color: white; 
    background: ${props => props.secondary ? 'pink' : '#f8049c'}; 
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
    width: 100%; 
    display: block; 
    white-space: none;
    text-align: center;

    &:disabled{ 
        background: #eee; 
        color: #666;
    }
`;

// export default Button;
export {Button};