import { formatDate } from "@/lib/utils";
import UserAvatar from "./UserAvatar";
import { Heart } from "lucide-react";
import DeleteComment from "../posts/DeleteComment";

function CommentCard({
  comment,
  isDelete,
}: {
  comment: CommentType;
  isDelete: boolean;
}) {
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
      {isDelete && (
        <div>
          <DeleteComment id={comment.id} />
        </div>
      )}
    </div>
  );
}

export default CommentCard;
