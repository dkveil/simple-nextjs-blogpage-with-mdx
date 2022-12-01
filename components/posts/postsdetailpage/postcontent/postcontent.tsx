import { Container } from '../../../../containers/container';
import { Wrapper, ContentWrapper } from './postcontent.styles';

const PostContent = ({ content }: { content: string }) => {
    return (
        <Wrapper>
            <Container>
                <ContentWrapper>{content}</ContentWrapper>
            </Container>
        </Wrapper>
    );
};

export default PostContent;
