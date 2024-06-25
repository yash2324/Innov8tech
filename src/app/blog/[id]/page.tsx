import React from "react";
import { prisma } from "../../../../lib/prisma";
type Props = {};

const page = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params.id),
    },
  });
  console.log(post);
  return (
    <div>
      {post && (
        <>
          <h1 className="text-5xl mb-5">{post.title}</h1>
          <div className="flex items-center">
            <p className="text-sm text-gray-500">By</p>
            <div className="w-5 h-5 ml-3 mr-2 rounded-full bg-contain"></div>
            {/* <p className="text-sm text-gray-500">{post.author.name}</p> */}
          </div>
          <p className="mt-4">{post.content}</p>
        </>
      )}
    </div>
  );
};

export default page;
