"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { MessageCircle } from "lucide-react";
import UserAvatar from "../common/UserAvatar";
import { useState } from "react";
import axios from "axios";
import { useSession } from "next-auth/react";

function AddComment({ post }: { post: PostType }) {
  const { data } = useSession();
  const [content, setContent] = useState<string>("");
  const submitComment = () => {
    axios.post("api/comment", {
      content: content,
      postId: post.id.toString(),
    });
  };
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>
          <MessageCircle />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Add Comment</AlertDialogTitle>
            <AlertDialogDescription>
              <div className="flex">
                <UserAvatar />
                <div className="flex">
                  <h1 className="font-bold mr-1">{post.author.name}</h1>
                  <p>{post.author.username}</p>
                </div>
              </div>
              <div>
                <p>{post.content}</p>
              </div>
              <div className="flex">
                <UserAvatar />
                <textarea
                  className="w-full resize-none placeholder:font-normal h-24 outline-none bg-muted"
                  placeholder="Type your comment..."
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={submitComment}>
              Comment
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default AddComment;
