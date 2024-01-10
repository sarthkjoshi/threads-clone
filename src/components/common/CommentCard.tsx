import { formatDate } from "@/lib/utils";
import UserAvatar from "./UserAvatar";
import { Heart } from "lucide-react";

function CommentCard({ comment }: { comment: CommentType }) {
  return (
    <div className="flex border border-sky-900 gap-2 items-center ">
      <UserAvatar />
      <div>
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
