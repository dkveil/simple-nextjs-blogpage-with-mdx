import styled from "styled-components";

export const Wrapper = styled.section`
    position: relative;
    padding: 200px 0;
    width: 100%;
`

export const ImageContainer = styled.div`
    position: relative;
    margin-top: 80px;
    width: 45%;
    aspect-ratio: 590/570;
    margin-right: 10%;
`

export const ContentWrapper = styled.div`
    width: 50%;

    h2{
        position: absolute;
        top: 0;
        left: 0;
        font-size: 240px;
        font-weight: var(--font-weight-superbold);
        color: var(--color-gray);
        z-index: -1;
        left: 55%;
        top: 3%;
        white-space: nowrap;
        transform: translate(-50%);
    }
    h3{
        font-size: 64px;
        font-weight: var(--font-weight-thin);
        text-transform: uppercase;
        margin-bottom: 40px;
        color: var(--color-black);
    }
    p{
        font-size: 24px;
        line-height: 30px;
        font-weight: var(--font-weight-thin);
        color: var(--color-black);
        margin-bottom: 60px;
    }
`