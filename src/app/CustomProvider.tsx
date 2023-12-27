"use client";
import { SessionProvider } from "next-auth/react";

function CustomProvider({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default CustomProvider;
