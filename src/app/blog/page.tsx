import { getSortedBlogData } from '@/lib/blog';
import BlogList from './_components/BlogList';

export default function BlogIndex() {
    // Get all of the blog posts initially
  const initialPosts = getSortedBlogData();

  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">My Blog</h1>

      <BlogList initialPosts={initialPosts} />
    </main>
  );
}