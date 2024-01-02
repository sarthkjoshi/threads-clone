import prisma from "@/DB/db.config";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { CustomSession, authOptions } from "../auth/[...nextauth]/options";

export const GET = async () => {
  const session: CustomSession | null = await getServerSession(authOptions);

  const allData = await prisma.post.findMany({
    where: { authorId: Number(session?.user?.id) },
  });
  // const allData = await prisma.post.findMany();
  return NextResponse.json(allData);
};

export const POST = async (req: NextRequest) => {
  const { content, authorId } = await req.json();

  await prisma.post.create({
    data: {
      content: content,
      authorId: authorId,
    },
  });
  return NextResponse.json({ message: "Posted" });
};
