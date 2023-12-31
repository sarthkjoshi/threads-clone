"use client";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

function PostBox() {
  const { data: session } = useSession();
  // console.log("post box" + session?.user);
  const [post, setPost] = useState<postStateType>({
    content: "",
    authorId: session?.user?.id,
  });
  const handleClick = async (e: React.MouseEvent) => {
    const res = await axios.post("/api/post", post);
    console.log(res);
  };

  return (
    <div className="flex flex-col h-40 justify-between">
      <div className="flex">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Input
          placeholder="What is happening?!"
          className="bg-transparent border-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          onChange={(e) => {
            setPost({ content: e.target.value });
          }}
        />
      </div>
      <div className="ml-auto">
        <Button className="bg-sky-500" onClick={handleClick}>
          Post
        </Button>
      </div>
    </div>
  );
}

export default PostBox;
