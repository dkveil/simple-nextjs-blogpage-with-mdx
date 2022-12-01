import PostItem from '../postitem';
import styled from 'styled-components';
import { IPostData } from '../../../utils/mdx';

const PostsWrapper = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 30px;
`;

const PostGrid = ({ posts }: { posts: IPostData[] }) => {
    return (
        <PostsWrapper>
            {posts.map((post) => (
                <PostItem
                    key={post.slug}
                    title={post.title}
                    slug={post.slug}
                    image={post.image}
                    categories={post.categories}
                    date={post.date}
                />
            ))}
        </PostsWrapper>
    );
};

export default PostGrid;
