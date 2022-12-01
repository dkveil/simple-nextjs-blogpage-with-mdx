import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    border: 1px solid var(--color-black);
    min-height: 500px;
    display: flex;
    flex-direction: column;
`

export const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 16/9;
`

export const ContentWrapper = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    a{
        color: inherit;
        text-decoration: none;
    }
    h3{
        font-weight: var(--font-weight-bold);
        color: var(--color-black);
        font-size: 20px;
        line-height: 30px;
    }
    time{
        display: block;
        font-weight: var(--font-weight-bold);
        color: #ABABAB;
        margin-bottom: 10px;
    }
    span{
        display: block;
        font-weight: var(--font-weight-bold);
        color: var(--color-black);
    }
`