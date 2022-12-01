import styled from "styled-components";

export const Wrapper = styled.header`
    padding: 80px 0 120px;
    height: calc(100vh - 120px);

`

export const SectionContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`

export const ContentWrapper = styled.div`
    width: 40%;
    margin-right: 10%;

    h1{
        color: var(--color-black);
        font-size: 72px;
        font-weight: var(--font-weight-bold);
        margin-bottom: 20px;
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

export const ImageContainer = styled.div`
    position: relative;
    width: 50%;
    aspect-ratio: 16/9;
`