'use client';

import { PostIndexData } from "@/lib/blogTypes";
import { useMemo, useState } from "react";
import SearchBar from "./SearchBar";
import BlogCard from "./BlogCard";

interface Props {
  initialPosts: PostIndexData[];
}

export default function BlogList({ initialPosts }: Props) {
  // Use state for the search query 
  const [query, setQuery] = useState('');

  // Filter logic: compare the lower case title and query to see if the title contains the query
  // useMemo() ensures that the filter only changes when query or posts change
  const filteredPosts = useMemo(() => {
    return initialPosts.filter(post => {
      const lowerCaseTitle = post.title.toLowerCase();
      const lowerCaseQuery = query.toLowerCase();
      return lowerCaseTitle.includes(lowerCaseQuery);
    })
  }, [query, initialPosts])

  // Function to update query (to pass to SearchBar component)
  function onSearch(query: string) {
    setQuery(query);
  }

  return (
    <>
      <SearchBar onSearch={onSearch} />
      
      <div className="grid gap-6">
        {filteredPosts.map(post => (
          <BlogCard {...post} />
        ))}
      </div>
    </>
    
  )
}