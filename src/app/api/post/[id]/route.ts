import prisma from "@/DB/db.config";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const post = await prisma.post.findMany({
    where: { id: Number(params.id) },
    include: { author: true, comment: true },
  });
  return NextResponse.json(post);
};
