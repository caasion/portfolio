import { getPostData, getSortedBlogData } from "@/lib/blog";
import TagsList from "../_components/TagsList";
import AuthorsList from "../_components/AuthorList";


// Generate static params so all blog posts are pre-rendered at built time
export async function generateStaticParams() {
  const posts = getSortedBlogData();
  return posts.map((post) => ({ slug: post.id }));
}

export default async function BlogPostPage(props: any) {
  const params = await props.params;

  const post = await getPostData(params.slug);
  
  return (
      <article className="max-w-3xl mx-auto py-10 px-4">
    
        {/* Header Section */}
        <header className="mb-10 text-center">
          <time className="text-gray-500">{post.date}</time>
            <TagsList tags={post.tags} className="justify-center" />
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">
            {post.title}
          </h1>

          <AuthorsList authors={post.authors} />
        </header>

        {/* The Content Body */}
        <div 
          className="prose prose-lg dark:prose-invert prose-a:text-blue-600 hover:prose-a:text-blue-500"
          dangerouslySetInnerHTML={{ __html: post.contentHTML }} 
        />
      
    </article>
  );
  
}