"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

function SignUp() {
  const [authState, setAuthState] = useState<authStateType>({
    email: "",
    password: "",
    username: "",
    name: "",
  });
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/signup", authState);
      router.push("/login");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center h-screen w-screen">
          <div>
            <div>
              <h1 className="text-2xl font-bold">SignUp</h1>
              <h3>Welcome</h3>
            </div>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                placeholder="Type you name..."
                onChange={(e) => {
                  setAuthState({ ...authState, name: e.target.value });
                }}
              />
            </div>
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                id="username"
                placeholder="Type you username..."
                onChange={(e) => {
                  setAuthState({ ...authState, username: e.target.value });
                }}
              />
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
                Already have an account?
                <Link href="/login" className="text-yellow-500 ml-1">
                  Login
                </Link>
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
