import prisma from "@/DB/db.config";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: number } }
) => {
  const post = await prisma.post.findUnique({
    where: { id: Number(params.id) },
    include: {
      author: true,
      comment: {
        include: {
          author: true,
        },
      },
    },
  });

  return NextResponse.json(post);
};
