import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const latestPosts = await prisma.post.findMany({
      take: 3,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        categories: true,
      },
    });

    return NextResponse.json(latestPosts);
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching latest posts" },
      { status: 500 }
    );
  }
}
