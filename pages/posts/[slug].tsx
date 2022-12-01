import PostHeader from '../../components/posts/postsdetailpage/postheader';
import PostContent from '../../components/posts/postsdetailpage/postcontent';
import ReactMarkdown from 'react-markdown';
import { GetStaticProps } from 'next';
import { getPostData, getPostsFiles, IPostData } from '../../utils/mdx';
import { ParsedUrlQuery } from 'querystring';

const Post = ({ post }: { post: IPostData }) => {
    return (
        <article>
            <PostHeader title={post.title} image={post.image} categories={post.categories} date={post.date} />
            <PostContent content={post.content} />
            <ReactMarkdown># content</ReactMarkdown>
        </article>
    );
};

interface IParams extends ParsedUrlQuery {
    slug: string;
}

export const getStaticProps: GetStaticProps = (context) => {
    const { slug } = context.params as IParams;

    const postData = getPostData(slug);

    return {
        props: {
            post: postData,
        },
        revalidate: 600,
    };
};

export const getStaticPaths = () => {
    const slugs = getPostsFiles().map((fileName) => fileName.replace(/\.md$/, ''));

    return {
        paths: slugs.map((slug) => ({ params: { slug } })),
        fallback: false,
    };
};

export default Post;
