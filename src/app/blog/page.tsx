import { getSortedBlogData } from '@/lib/blog';
import BlogList from './_components/BlogList';

export default function BlogIndexPage() {
    // Get all of the blog posts initially
  const initialPosts = getSortedBlogData();

  return (
    <>
      <h1 className="text-3xl font-bold mb-8">My Blog</h1>

      <BlogList initialPosts={initialPosts} />
    </>
  );
}