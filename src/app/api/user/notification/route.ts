import prisma from "@/DB/db.config";
import { CustomSession, authOptions } from "../../auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async () => {
  const session: CustomSession | null = await getServerSession(authOptions);
  const allData = await prisma.notification.findMany({
    where: {
      userId: Number(session?.user?.id),
    },
  });
  return NextResponse.json(allData);
};
