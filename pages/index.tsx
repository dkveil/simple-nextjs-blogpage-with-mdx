import About from '../components/homepage/about';
import Hero from '../components/homepage/hero';
import FeaturedPosts from '../components/homepage/featuredposts';
import { getFeaturedPosts } from '../utils/mdx';
import { IPostData } from '../utils/mdx';

export default function Home({ posts }: { posts: IPostData[] }) {
    return (
        <>
            <Hero />
            <About />
            <FeaturedPosts posts={posts} />
        </>
    );
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts,
        },
        revalidate: 1,
    };
}
