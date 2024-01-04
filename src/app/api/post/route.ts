import prisma from "@/DB/db.config";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { CustomSession, authOptions } from "../auth/[...nextauth]/options";

export const GET = async () => {
  const session: CustomSession | null = await getServerSession(authOptions);

  const allData = await prisma.post.findMany({
    include: {
      author: true,
    },
    orderBy: {
      id: "desc",
    },
  });

  return NextResponse.json(allData);
};

export const POST = async (req: NextRequest) => {
  const session: CustomSession | null = await getServerSession(authOptions);
  const content = await req.json();

  await prisma.post.create({
    data: {
      content: content,
      authorId: Number(session?.user?.id),
    },
  });
  return NextResponse.json({ message: "Posted" });
};
