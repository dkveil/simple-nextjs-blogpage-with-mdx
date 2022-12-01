import React from 'react';
import { Container } from '../../../containers/container';
import { Wrapper, ContentWrapper } from './hero.styles';

const Hero = () => {
    return (
        <Wrapper>
            <Container>
                <ContentWrapper>
                    <h1>
                        <span>A.Nowak</span>
                        <span>Blogpage</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam non lorem efficitur, dignissim sem ac, sodales felis.
                        Suspendisse ut justo faucibus, ultricies dolor a, luctus lacus. Donec et tortor placerat, maximus enim in,
                        consectetur enim. Mauris tincidunt massa a lorem lobortis congue.
                    </p>
                </ContentWrapper>
            </Container>
        </Wrapper>
    );
};

export default Hero;
