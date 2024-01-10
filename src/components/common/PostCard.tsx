import { Heart, LoaderIcon, MessageCircle, Send } from "lucide-react";
import UserAvatar from "./UserAvatar";
import { formatDate } from "@/lib/utils";
import AddComment from "../posts/AddComment";
import Link from "next/link";
function PostCard({ post }: { post: PostType }) {
  if (!post)
    return (
      <div className="flex justify-center items-center">
        <LoaderIcon className="text-red-600" />
      </div>
    );
  return (
    <div className="flex border border-sky-900 gap-2 items-center ">
      <UserAvatar />
      <div>
        <div className="flex">
          <h1 className="font-bold mr-1">{post.author.name}</h1>
          <p>{post.author.username}</p>
          <p className="ml-8 ">{formatDate(post.createdAt)}</p>
        </div>
        <div>
          <Link href={`/post/${post.id}`} className="cursor-pointer">
            <p>{post.content}</p>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Heart />

          <AddComment post={post} />
          <Send />
        </div>
      </div>
    </div>
  );
}

export default PostCard;
