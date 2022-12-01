import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface IPostData {
    title: string
    slug: string,
    date: string,
    image: string,
    isFeatured: boolean,
    content: string,
    categories: string[]
}

export function getPostsFiles(){
    return fs.readdirSync(postsDirectory);
}

export function getPostData(postId: string){
    const postSlug = postId.replace(/\.md$/, '');
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);


    const postData: IPostData = {
        title: data.title,
        slug: postSlug,
        date: data.date,
        image: data.image,
        isFeatured: data.isFeatured,
        content,
        categories: data.categories
    }

    return postData;
}

export function getAllPosts() {
    const postFiles = getPostsFiles();

    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile)
    });

    return allPosts.sort((a, b) => a.date > b.date ? -1 : 1);
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts();

    return allPosts.filter(post => post.isFeatured);
}