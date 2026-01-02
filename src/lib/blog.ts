import matter from "gray-matter";
import path from "path";
import fs from 'fs';
import { remark } from "remark";
import html from 'remark-html';
import type { PostData, PostIndexData } from "./blogTypes";

const blogDirectory = path.join(process.cwd(), 'content/blog');

/** Given a blog post slug and an image filename, copies the image from the source to the public folder if it exists in source (and isn't duplicate in destination). Returns a string to the path of the image. */
function copyImageToPublic(slug: string, imageFilename: string) {
    // Get the current image path
    const sourcePath = path.join(blogDirectory, slug, imageFilename);

    // Define the destination path (i.e. public/images/blog/slug/filename.png)
    const destDir = path.join('public', 'images', 'blog', slug);
    const destPath = path.join(destDir, imageFilename);

    // Create destination folder if it doesn't exist
    if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
    }

    // Copy the file only if it exists in source and doesn't exist in destination
    if (fs.existsSync(sourcePath)) {
        if (!fs.existsSync(destPath)) {
            fs.copyFileSync(sourcePath, destPath);
        }
        return `/images/blog/${slug}/${imageFilename}` 
    }
    
    return null;
}

/** Get all frontmatter data and contents for one specific post. Used for singular blog page */
export async function getPostData(id: string): Promise<PostData> {
    // Read file from database
    const fullPath = path.join(blogDirectory, `${id}`, 'index.md');
    const fileContents = fs.readFileSync(fullPath, `utf8`);

    // Use gray-matter to parse metadata & destructure markdown file
    const { data, content } = matter(fileContents);

    // Asset pipeline: Copy over image if needed & return long path
    let coverImage = null;
    if (data.coverImage) {
        coverImage = copyImageToPublic(id, data.coverImage);
    }

    // Use remark to convert markdown into HTL string
    const processedContent = await remark()
        .use(html)
        .process(content)

    const contentHTML = processedContent.toString();

    return { id, ...(data as { title: string; date: string; description: string; coverImage: string; }), contentHTML };
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

        return { id, ...(data as { title: string; date: string; description: string; coverRef: string; }) };
    });

    return allBlogData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    })
}

export function getImageFromFilename(filename: string) {
    // Get full directory
    const fullPath = blogDirectory;

    
}