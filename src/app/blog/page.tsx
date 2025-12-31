import { getSortedBlogData } from '@/lib/blog';
import Link from 'next/link';

export default function BlogIndex() {
  const allPosts = getSortedBlogData();

  return (
    <section>
      <h1>My Blog</h1>
      <ul>
        {allPosts.map(({ id, date, title }) => (
          <li key={id}>
            <Link href={`/blog/${id}`}>{title}</Link>
            <br />
            <small>{date}</small>
          </li>
        ))}
      </ul>
    </section>
  );
}