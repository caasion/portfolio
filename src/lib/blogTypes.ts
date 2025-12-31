export interface PostData {
    title: string;
    description: string;
    date: string;
    publish: boolean;
}

export interface Post {
    id: string;
    frontmatter: PostData;
    contentHTML: string;
}

export interface PostIndexData {
    id: string;
    title: string;
    date: string;
}