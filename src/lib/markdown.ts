import matter from "gray-matter";
import path from "path";
import fs from 'fs';

const contentDirectory = path.join(process.cwd(), 'content');

interface PostData {
    title: string;
    description: string;
    date: string;
    publish: boolean;
}

interface Post {
    slug: string;
    frontmatter: PostData;
    content: string;
}

export function getPostBySlug(slug: string): Post {
    // Read file from database
    const fullPath = path.join(contentDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, `utf8`);

    // Parse metadata & destructure markdown file
    const { data, content } = matter(fileContents);

    // Process file contents

    return { slug, frontmatter: data as PostData, content };
}