import styled from "styled-components";

export const Wrapper = styled.section`
    height: calc(100vh - 120px);
    width: 100%;
    padding-top: 120px;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;

    h1{
        margin-bottom: 40px;
        span{
            display: block;
            text-transform: uppercase;

            :nth-child(1){
                font-weight: var(--font-weight-thin);
                font-size: 96px;
                margin-left: 10px;
            }

            :nth-child(2){
                font-weight: var(--font-weight-superbold);
                font-size: 180px;
            }
        }
    }
    p{
        font-size: 20px;
        line-height: 30px;
        margin-left: 10px;
        max-width: 700px;
    }

`