"use client";

import React, { useEffect, useState } from "react";
import AllPosts from "./AllPosts";
import { Post, Category } from "@prisma/client";
import { PostsList } from "./PostsList";
export type PostWithCategories = Post;
const fetchAllPosts = async () => {
  const response = await fetch("/api/posts/");
  const data = await response.json();
  return data;
};

const Page = () => {
  const [allPosts, setAllPosts] = useState<PostWithCategories[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllPosts();
        const response = data.posts;
        setAllPosts(response);
      } catch (error) {
        console.error("Error fetching posts:", error);
        // Handle error state if needed
      }
    };

    fetchData();
  }, []); // Empty dependency array to run once on mount
  console.log(allPosts);
  return (
    <div className="my-24 container">
      <h2 className="text-4xl text-center my-6">All Articles</h2>
      <PostsList posts={allPosts} />
    </div>
  );
};

export default Page;
