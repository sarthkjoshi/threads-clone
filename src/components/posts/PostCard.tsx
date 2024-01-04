import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { formatDate } from "@/lib/utils";

import { LoaderIcon } from "lucide-react";

function PostCard({ post }: { post: PostType }) {
  if (!post)
    return (
      <div className="flex justify-center items-center">
        <LoaderIcon className="text-red-600" />
      </div>
    );
  return (
    <div>
      <div className="flex border border-sky-900 gap-2 items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div>
          <div className="flex">
            <h1 className="font-bold mr-1">{post.author.name}</h1>
            <p>{post.author.username}</p>
            <p className="ml-8 ">{formatDate(post.createdAt)}</p>
          </div>

          <div>
            <p>{post.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
