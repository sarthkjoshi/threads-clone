"use client";
import { signOut } from "next-auth/react";
import { Button } from "../ui/button";
function SignOut() {
  const handleSignOut = () => {
    signOut({ callbackUrl: "/login", redirect: true });
  };

  return <Button onClick={handleSignOut}>Sign Out</Button>;
}

export default SignOut;
