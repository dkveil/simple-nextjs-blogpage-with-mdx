import { Wrapper, ImageContainer, ContentWrapper } from './postitem.styles';
import Image from 'next/image';
import Link from 'next/link';

interface IPostItem {
    title: string;
    slug: string;
    image: string;
    categories: String[];
    date: string;
}

const PostItem = ({ title, slug, image, categories, date }: IPostItem) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const linkPath = `/posts/${slug}`;

    return (
        <li>
            <Wrapper>
                <Link href={linkPath}>
                    <ImageContainer>
                        <Image alt="about" src={image} layout="fill" objectFit="cover" />
                    </ImageContainer>
                </Link>
                <ContentWrapper>
                    <Link href={linkPath}>
                        <h3>{title}</h3>
                    </Link>
                    <div>
                        <time>{formattedDate}</time>
                        <span>{categories.join(',')}</span>
                    </div>
                </ContentWrapper>
            </Wrapper>
        </li>
    );
};

export default PostItem;
