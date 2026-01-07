import { getSortedBlogData } from '@/lib/blog';
import BlogList from './_components/BlogList';

export default function BlogIndexPage() {
    // Get all of the blog posts initially
  const initialPosts = getSortedBlogData();

  return (
    <>
      <h1>Blog</h1>
      <p className="font-display text-lg mb-8">Where I share my thoughts.</p>

      <BlogList initialPosts={initialPosts} />
    </>
  );
}