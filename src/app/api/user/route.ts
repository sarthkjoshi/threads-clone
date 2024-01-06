import { getServerSession } from "next-auth";
import { CustomSession, authOptions } from "../auth/[...nextauth]/options";
import { NextResponse } from "next/server";
import prisma from "@/DB/db.config";

export const GET = async () => {
  const session: CustomSession | null = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "No user logged in" });
  }

  const allData = await prisma.user.findMany({
    where: {
      NOT: {
        id: Number(session.user?.id),
      },
    },
  });

  return NextResponse.json(allData);
};
