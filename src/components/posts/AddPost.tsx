"use client";

import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRef, useState } from "react";
import axios from "axios";

import { Image } from "lucide-react";
function AddPost() {
  const imgRef = useRef<HTMLInputElement | null>(null);
  const handleImageClick = () => {
    imgRef.current?.click();
  };

  const [post, setPost] = useState<string>("");
  const handleClick = async (e: React.MouseEvent) => {
    await axios.post("/api/post", JSON.stringify(post));
  };

  return (
    <div>
      <div className="flex justify-start items-start">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <textarea
          placeholder="What is happening?!"
          className="w-full h-24 p-2 bg-muted outline-none resize-none rounded-lg placeholder:font-normal ml-2"
          onChange={(e) => setPost(e.target.value)}
        />
      </div>
      <div className="mt-3 ml-12 flex justify-between items-center">
        <input type="file" ref={imgRef} className="hidden" />
        <Image
          height={20}
          width={20}
          onClick={handleImageClick}
          className="cursor-pointer"
        />
        <Button className="bg-sky-500 sm" onClick={handleClick}>
          Post
        </Button>
      </div>
    </div>
  );
}

export default AddPost;
