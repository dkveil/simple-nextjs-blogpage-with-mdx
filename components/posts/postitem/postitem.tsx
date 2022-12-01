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
    return (
        <li>
            <Wrapper>
                <Link href={slug}>
                    <ImageContainer>
                        <Image alt="about" src={image} layout="fill" objectFit="cover" />
                    </ImageContainer>
                </Link>
                <ContentWrapper>
                    <Link href={slug}>
                        <h3>{title}</h3>
                    </Link>
                    <div>
                        <time>20 mins ago</time>
                        <span>{categories.join(',')}</span>
                    </div>
                </ContentWrapper>
            </Wrapper>
        </li>
    );
};

export default PostItem;
