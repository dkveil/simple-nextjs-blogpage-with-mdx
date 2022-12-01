import { Container } from '../../../containers/container';
import { ContentWrapper, ContentContainer, Wrapper } from './featureposts.styles';
import PostGrid from '../../posts/postgrid';
import Button from '../../common/button/button';
import { IPostData } from '../../../utils/mdx';

const FeaturedPosts = ({ posts }: { posts: IPostData[] }) => {
    return (
        <Wrapper>
            <Container>
                <ContentContainer>
                    <ContentWrapper>
                        <h2>featured posts</h2>
                        <h3>
                            <span>Blog</span>
                            <span>&</span>
                            <span>News</span>
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum quam, nec molestie mi ultricies lobortis.
                        </p>
                        <Button href="/posts">More</Button>
                    </ContentWrapper>
                    <PostGrid posts={posts} />
                </ContentContainer>
            </Container>
        </Wrapper>
    );
};

export default FeaturedPosts;
