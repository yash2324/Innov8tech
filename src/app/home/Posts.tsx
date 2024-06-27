"use client";

import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { Post, Category } from "@prisma/client";

export type PostWithCategories = Post & {
  categories: Category[];
};

const fetchLatestPosts = async () => {
  const response = await fetch("/api/latest");
  const data = await response.json();
  return data;
};

const Posts = () => {
  const [posts, setPosts] = useState<PostWithCategories[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const bgClasses = ["bg-pink-500", "bg-blue-500", "bg-yellow-500"];
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchLatestPosts();
      setPosts(data);
    };

    fetchData();
  }, []); // Empty dependency array to run once on mou

  return (
    <div>
      {posts.length > 0 && (
        <>
          <h2 className="text-4xl text-center mt-6">Trending</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {posts.map((post, index) => (
              <PostCard
                key={post.id}
                post={post}
                className={bgClasses[index % 3]}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Posts;
