import styled from 'styled-components';
import { Container } from '../../../../containers/container';
import PostGrid from '../../../../components/posts/postgrid/postgrid';
import { IPostData } from '../../../../utils/mdx';

const Wrapper = styled.section`
    padding: 120px 0;

    h1 {
        margin: 120px 0 60px;
        font-size: 120px;
        font-weight: var(--font-weight-bold);
        color: var(--color-black);
    }

    div {
        width: 100%;
    }
`;

const AllPosts = ({ posts }: { posts: IPostData[] }) => {
    return (
        <Wrapper>
            <Container>
                <div>
                    <h1>all posts</h1>
                    <PostGrid posts={posts} />
                </div>
            </Container>
        </Wrapper>
    );
};

export default AllPosts;
