"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";
function Login() {
  const [authState, setAuthState] = useState<authStateType>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(authState);
  };
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
