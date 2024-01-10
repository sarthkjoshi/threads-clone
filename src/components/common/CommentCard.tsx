import { formatDate } from "@/lib/utils";
import UserAvatar from "./UserAvatar";
import { Heart } from "lucide-react";

function CommentCard({ comment }: { comment: CommentType }) {
  return (
    <div className="flex gap-2 items-center m-2">
      <UserAvatar />
      <div className="bg-slate-400 w-full p-2 rounded-md">
        <div className="flex">
          <h1 className="font-bold mr-1">{comment.author.name}</h1>
          <p>{comment.author.username}</p>
          <p className="ml-8 ">{formatDate(comment.createdAt)}</p>
        </div>
        <div>
          <p>{comment.content}</p>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
