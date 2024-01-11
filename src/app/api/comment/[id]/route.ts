import prisma from "@/DB/db.config";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: number } }
) => {
  await prisma.comment.delete({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json({ message: "deleted" });
};
