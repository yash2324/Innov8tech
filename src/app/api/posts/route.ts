import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export const dynamic = "force-dynamic";
import { Post } from "@prisma/client";

export type PostWithCategories = Post;
export async function GET() {
  try {
    const posts: PostWithCategories[] = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ posts });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching posts and categories" },
      { status: 500 }
    );
  }
}
