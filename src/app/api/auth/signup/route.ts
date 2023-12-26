import { NextRequest, NextResponse } from "next/server";
import bcrypt, { genSalt, genSaltSync, hashSync } from "bcryptjs";
import prisma from "@/DB/db.config";
export const POST = async (req: NextRequest) => {
  const { email, password, username, name } = await req.json();
  const salt = genSaltSync(10);
  const hashedPassword = hashSync(password, salt);
  await prisma.user.create({
    data: {
      email: email,
      username: username,
      name: name,
      password: hashedPassword,
    },
  });
  return NextResponse.json({ message: "Account created" });
};
