"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
function Login() {
  const [authState, setAuthState] = useState<authStateType>({
    email: "",
    password: "",
  });
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/login", authState);
      console.log("yeh hai", res.status);
      if (res.status == 200) {
        signIn("credentials", {
          email: authState.email,
          password: authState.password,
          callbackUrl: "/",
          redirect: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const { status } = useSession();
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status]);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center h-screen w-screen">
          <div>
            <div>
              <h1>Login</h1>
              <h3>Welcome back</h3>
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                type="text"
                id="email"
                placeholder="Type you email..."
                onChange={(e) => {
                  setAuthState({ ...authState, email: e.target.value });
                }}
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>

              <Input
                type="text"
                id="password"
                placeholder="Type you password..."
                onChange={(e) => {
                  setAuthState({ ...authState, password: e.target.value });
                }}
              />
            </div>
            <div>
              <Button>Login</Button>
            </div>
            <div>
              <span>
                Don't have an account?
                <Link href="/signup" className="text-yellow-500  ml-1">
                  Register
                </Link>
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
