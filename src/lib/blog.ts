import matter from "gray-matter";
import path from "path";
import fs from 'fs';
import { remark } from "remark";
import html from 'remark-html';
import type { Post, PostData, PostIndexData } from "./blogTypes";

const blogDirectory = path.join(process.cwd(), 'content/blog');

/** Get all frontmatter data and contents for one specific post. Used for singular blog page */
export async function getPostData(id: string): Promise<Post> {
    // Read file from database
    const fullPath = path.join(blogDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, `utf8`);

    // Use gray-matter to parse metadata & destructure markdown file
    const { data, content } = matter(fileContents);

    // Use remark to convert markdown into HTL string
    const processedContent = await remark()
        .use(html)
        .process(content)

    const contentHTML = processedContent.toString();

    return { id, frontmatter: data as PostData, contentHTML };
}

/** Gets a list of specific frontmatter data for all posts sorted by date. Used for blog index. */
export function getSortedBlogData(): PostIndexData[] {
    // Get file names under /content/blog
    const fileNames = fs.readdirSync(blogDirectory);

    const allBlogData = fileNames.map((filename) => {
        // Strip '.md' from filenames to get id
        const id = filename.replace(/\.md$/, '');

        // Read markdown files as strings
        const fullPath = path.join(blogDirectory, filename);
        const fileContents = fs.readFileSync(fullPath, `utf8`);

        // Use gray-matter to parse the post metadata
        const { data } = matter(fileContents);

        return {
            id,
            ...(data as { title: string; date: string; description: string })
        };
    });

    return allBlogData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    })
}