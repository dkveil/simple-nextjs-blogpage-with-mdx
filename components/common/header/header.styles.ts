import styled from "styled-components";

export const Wrapper = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    height: 120px;
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;

    a{
        color: inherit;
        text-decoration: none;
        font-size: 64px;
        font-weight: var(--font-weight-thin);
    }
    ul{
        display: flex;
        font-weight: var(--font-weight-thin);
        gap: 100px;
        a{
            font-size: 32px;
        }
    }

`
