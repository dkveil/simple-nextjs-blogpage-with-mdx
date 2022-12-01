import { SectionContainer, ContentWrapper, ImageContainer, Wrapper } from './postheader.styles';
import { Container } from '../../../../containers/container';
import Image from 'next/image';

interface IPostHeader {
    title: string;
    image: string;
    categories: string[];
    date: string;
}

const PostHeader = ({ title, image, categories, date }: IPostHeader) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <Wrapper>
            <Container>
                <SectionContainer>
                    <ContentWrapper>
                        <h1>{title}</h1>
                        <time>{formattedDate}</time>
                        <span>{categories.join(',')}.</span>
                    </ContentWrapper>
                    <ImageContainer>
                        <Image alt={title} src={image} layout="fill" objectFit="cover" />
                    </ImageContainer>
                </SectionContainer>
            </Container>
        </Wrapper>
    );
};

export default PostHeader;
