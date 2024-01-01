"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axios from "axios";
import { Loader, LoaderIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

function Post() {
  const { data: session } = useSession();
  const [posts, setPosts] = useState<Post>();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/post");
        setPosts(response.data);
      } catch (error) {
        console.log("Yeh hai error :" + error);
      }
    };
    getData();
  }, []);
  if (!posts)
    return (
      <div className="flex justify-center items-center">
        <LoaderIcon className="text-red-600" />
      </div>
    );
  return (
    <div>
      {posts &&
        posts.map((p) => {
          return (
            <div
              className="flex border border-sky-900 gap-2 items-center"
              key={p.id}
            >
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div>
                <div className="flex">
                  <h1 className="font-bold mr-1">{session?.user.name}</h1>
                  <p>{session?.user.username} </p>
                  <p>-5m</p>
                </div>

                <div>
                  <p>{p.content}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Post;
