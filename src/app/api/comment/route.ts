import prisma from "@/DB/db.config";
import { NextRequest, NextResponse } from "next/server";
import { CustomSession, authOptions } from "../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export const POST = async (req: NextRequest) => {
  const session: CustomSession | null = await getServerSession(authOptions);
  const data = await req.json();

  await prisma.post.update({
    where: {
      id: Number(data.postId),
    },
    data: {
      comment_count: {
        increment: 1,
      },
    },
  });
  await prisma.comment.create({
    data: {
      content: data.content,
      postId: Number(data.postId),
      authorId: Number(session?.user?.id),
    },
  });
  return NextResponse.json({ messgae: "comment saved" });
};
