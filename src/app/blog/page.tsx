import { getSortedBlogData } from '@/lib/blog';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogIndex() {
  const allPosts = getSortedBlogData();

  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">My Blog</h1>
      
      <div className="grid gap-6">
        {allPosts.map(({ id, title, date, description, tags, coverImage }) => (
          <Link 
            href={`/blog/${id}`} 
            key={id}
            className="block p-6 bg-white dark:bg-black border border-gray-200 dark:border-gray-400 rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="flex">
              <div className=''>
                <p className="text-gray-500 text-sm mb-2">{date}</p>
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <div className="flex gap-2">
                  {tags.map(tag => (
                    <p key={tag} className="text-purple-200 text-sm mb-2">{tag}</p>
                  ))}
                </div>
                
                <p className="text-gray-200 text-md">{description}</p>
              </div>
              
              <div className='grow-0'>
                {coverImage && 
                  <Image
                    src={coverImage}
                    width={500}
                    height={300}
                    alt="Picture of a cat"
                  />
                }
                
              </div>
            </div>
            
          </Link>
        ))}
      </div>
    </main>
  );
}