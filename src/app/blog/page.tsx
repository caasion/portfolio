import { getSortedBlogData } from '@/lib/blog';
import Link from 'next/link';

export default function BlogIndex() {
  const allPosts = getSortedBlogData();

  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">My Blog</h1>
      
      <div className="grid gap-6">
        {allPosts.map(({ id, date, title }) => (
          <Link 
            href={`/blog/${id}`} 
            key={id}
            className="block p-6 bg-white dark:bg-black border border-gray-200 dark:border-gray-400 rounded-lg hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-500 text-sm">{date}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}