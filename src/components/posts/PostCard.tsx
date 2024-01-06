import { Heart, LoaderIcon, MessageCircle } from "lucide-react";
import UserAvatar from "../common/UserAvatar";
import { formatDate } from "@/lib/utils";

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
        <UserAvatar />
        <div>
          <div className="flex">
            <h1 className="font-bold mr-1">{post.author.name}</h1>
            <p>{post.author.username}</p>
            <p className="ml-8 ">{formatDate(post.createdAt)}</p>
          </div>
          <div>
            <p>{post.content}</p>
          </div>
          <div>
            <Heart />
            <MessageCircle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
