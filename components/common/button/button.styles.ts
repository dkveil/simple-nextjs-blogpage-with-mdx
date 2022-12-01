import styled from 'styled-components'

export const StyledButton = styled.button`
    background: none;
    border: none;
    font-size: 20px;
    font-weight: var(--font-weight-regular);
    text-transform: uppercase;
    color: var(--color-black);

    a{
        color: inherit;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 25px;
    }
`