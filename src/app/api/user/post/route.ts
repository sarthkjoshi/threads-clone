import prisma from "@/DB/db.config";
import { NextResponse } from "next/server";
import { CustomSession, authOptions } from "../../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export const GET = async () => {
  const session: CustomSession | null = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "No user logged in" });
  }

  const allData = await prisma.post.findMany({
    where: {
      authorId: Number(session.user?.id),
    },
    include: {
      author: true,
    },
  });
  console.log(allData);
  return NextResponse.json(allData);
};
