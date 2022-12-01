import About from '../components/homepage/about';
import Hero from '../components/homepage/hero';
import FeaturedPosts from '../components/homepage/featuredposts';

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <FeaturedPosts />
        </>
    );
}
