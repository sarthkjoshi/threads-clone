import { NextRequest, NextResponse } from "next/server";
import bcrypt, { compareSync, genSalt, genSaltSync, hashSync } from "bcryptjs";
import prisma from "@/DB/db.config";
export const POST = async (req: NextRequest) => {
  const { email, password } = await req.json();

  const foundUser = await prisma.user.findUnique({ where: { email: email } });
  if (!foundUser)
    return NextResponse.json({ messge: "no user found" }, { status: 400 });
  const isPassword = compareSync(password, foundUser.password!);
  if (!isPassword) {
    return NextResponse.json(
      { message: "Password dont matched" },
      { status: 400 }
    );
  }
  return NextResponse.json({ message: "Logged in" }, { status: 200 });
};
