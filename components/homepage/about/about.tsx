import { Wrapper, ImageContainer, ContentWrapper } from './about.styles';
import { Container } from '../../../containers/container';
import Button from '../../common/button';
import Image from 'next/image';

const About = () => {
    return (
        <Wrapper>
            <Container>
                <ImageContainer>
                    <Image alt="about" src="/images/about.jpg" layout="fill" objectFit="cover" sizes="" />
                </ImageContainer>
                <ContentWrapper>
                    <h2>about me</h2>
                    <h3>A. Nowak</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum quam, nec molestie mi ultricies lobortis.
                        Etiam hendrerit mollis justo nec condimentum. Donec venenatis eros eu convallis efficitur. Proin posuere vitae nisi
                        ut aliquam. Mauris tellus sapien, dignissim sed mattis sed, fringilla eu turpis. Donec tristique diam et mi gravida,
                        id auctor libero pulvinar. Proin sit amet commodo lectus. Proin dictum fringilla convallis. Praesent feugiat
                        venenatis dui, sed rhoncus odio.
                    </p>
                    <Button href="/about">More</Button>
                </ContentWrapper>
            </Container>
        </Wrapper>
    );
};

export default About;
