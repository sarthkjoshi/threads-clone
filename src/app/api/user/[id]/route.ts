import prisma from "@/DB/db.config";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: number } }
) => {
  const user = await prisma.user.findUnique({
    where: {
      id: Number(params.id),
    },
    include: {
      posts: {
        include: { author: true },
      },
    },
  });

  return NextResponse.json(user);
};
