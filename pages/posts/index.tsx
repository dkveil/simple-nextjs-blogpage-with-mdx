import AllPosts from '../../components/posts/postspage/allposts';
import { getAllPosts, IPostData } from '../../utils/mdx';

const PostsPage = ({ posts }: { posts: IPostData[] }) => {
    return <AllPosts posts={posts} />;
};

export const getStaticProps = () => {
    const allposts = getAllPosts();

    return {
        props: {
            posts: allposts,
        },
        revalidate: 1,
    };
};

export default PostsPage;
