import { cache } from "react";
import React from "react";
import { prisma } from "../../../lib/prisma";
import PostCard from "./PostCard";

const fetchPosts = cache(async () => {
  const posts = await prisma.post.findMany({
    take: 3,
    orderBy: {
      createdAt: "desc",
    },
  });
  return posts;
});

const Posts = async () => {
  const posts = await fetchPosts();

  const bgClasses = ["bg-pink-500", "bg-blue-500", "bg-yellow-500"];

  return (
    <div>
      <h2 className="text-4xl text-center mt-6">Trending</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} className={bgClasses[index]} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
