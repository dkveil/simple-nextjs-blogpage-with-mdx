import PostItem from '../postitem';
import styled from 'styled-components';

const PostsWrapper = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;

    li {
    }
`;

const testpots = [
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In',
        slug: '/post1',
        image: '/images/post1.jpg',
        categories: ['Job', 'Lifestyle'],
        date: '01-12-2022',
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In',
        slug: '/post2',
        image: '/images/post2.jpg',
        categories: ['Job', 'Lifestyle'],
        date: '01-12-2022',
    },
    {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In',
        slug: '/post3',
        image: '/images/post3.jpg',
        categories: ['Job', 'Lifestyle'],
        date: '01-12-2022',
    },
];

const PostGrid = () => {
    return (
        <PostsWrapper>
            {testpots.map((post) => (
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
