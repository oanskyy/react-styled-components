import styled from 'styled-components'

const Button = styled.button`
    color: white; 
    background: ${props => props.secondary ? 'pink' : '#f8049c'}; 
    font-weight: bold; 
    padding: 8px; 
    border-radius: 4px; 
    box-shadow: none; 
    font-size: 1em; 
    border: none; 
    width: 50%; 
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