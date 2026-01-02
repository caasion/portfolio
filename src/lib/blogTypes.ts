export interface PostIndexData {
    id: string;

    // Frontmatter fields
    title: string;
    description: string;
    date: string;
    coverImage: string | null; // Blank if no cover. Otherwise a string of the filename of the cover image (must be in the same directory).
}

export interface PostData extends PostIndexData {
    contentHTML: string;
}

