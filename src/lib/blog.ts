import matter from "gray-matter";
import path from "path";
import fs from 'fs';
import { remark } from "remark";
import html from 'remark-html';

const blogDirectory = path.join(process.cwd(), 'content/blog');

interface PostData {
    title: string;
    description: string;
    date: string;
    publish: boolean;
}

interface Post {
    id: string;
    frontmatter: PostData;
    contentHTML: string;
}

export async function getPostData(id: string): Promise<Post> {
    // Read file from database
    const fullPath = path.join(blogDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, `utf8`);

    // Parse metadata & destructure markdown file
    const { data, content } = matter(fileContents);

    // Use remark to convert markdown into HTL string
    const processedContent = await remark()
        .use(html)
        .process(content)

    const contentHTML = processedContent.toString();

    return { id, frontmatter: data as PostData, contentHTML };
}