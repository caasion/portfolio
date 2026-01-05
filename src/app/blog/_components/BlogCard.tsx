import { PostIndexData } from "@/lib/blogTypes";
import Link from "next/link";
import Image from "next/image";
import TagsList from "./TagsList";


export default function BlogCard({ id, title, date, description, tags, coverImage }: PostIndexData) {
  return (
    <Link 
      href={`/blog/${id}`} 
      key={id}
      className="block p-6 bg-white dark:bg-black border border-gray-200 dark:border-gray-400 rounded-lg hover:shadow-md transition-shadow"
    >
      <div className="flex">
        <div className=''>
          <p className="text-gray-500 text-sm mb-2">{date}</p>
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <TagsList tags={tags} />
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
  )
}