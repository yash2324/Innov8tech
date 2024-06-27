import React from "react";
import { prisma } from "../../../../lib/prisma";
import { Prisma } from "@prisma/client";
import AllPosts from "./AllPosts";

const Page = async () => {
  type PostWithCategories = Prisma.PostGetPayload<{
    include: { categories: true };
  }>;

  console.log("Fetching posts and categories...");
  const posts: PostWithCategories[] = await prisma.post.findMany({
    include: {
      categories: true,
    },
  });

  const categories = await prisma.category.findMany();

  console.log("Posts fetched:", posts);
  console.log("Categories fetched:", categories);

  return (
    <div className="my-24 container">
      <h2 className="text-4xl text-center my-6">All Articles</h2>
      <AllPosts categories={categories} posts={posts} />
    </div>
  );
};

export default Page;
