import styled from "styled-components";

export const Wrapper = styled.section`
    position: relative;
    padding: 120px 0;
`
export const ContentContainer = styled.div`
    width: 100%;
`

export const ContentWrapper = styled.div`
    width: 54%;
    padding-left: 186px;
    margin-bottom: 160px;

    h2{
        position: absolute;
        top: 0;
        left: 0;
        font-size: 240px;
        font-weight: var(--font-weight-superbold);
        color: var(--color-gray);
        z-index: -1;
        left: 50%;
        top: -15%;
        white-space: nowrap;
        transform: translateX(-50%);
    }
    h3{
        font-size: 120px;
        font-weight: var(--font-weight-thin);
        text-transform: uppercase;
        color: var(--color-black);
        line-height: .85;
        margin-bottom: 40px;

        span{
            :first-child{
                display: block;
                transform: translateX(-186px);
            }
            :nth-child(2){
                font-size: 64px;
            }
        }
    }
    p{
        font-size: 24px;
        line-height: 30px;
        font-weight: var(--font-weight-thin);
        color: var(--color-black);
        margin-bottom: 60px;
    }
`