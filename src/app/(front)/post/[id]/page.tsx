import CommentCard from "@/components/common/CommentCard";
import PostCard from "@/components/common/PostCard";
import { getCurrentClikedPost } from "@/lib/getServerData";

async function Post({ params }: { params: { id: number } }) {
  const post = await getCurrentClikedPost(params.id);

  return (
    <div>
      <PostCard post={post} isDelete={false} />
      <div className="mt-5">
        <h1 className="font-bold">Comments</h1>
        {post.comment.map((i: CommentType) => (
          <CommentCard comment={i} key={i.id} isDelete={false} />
        ))}
      </div>
    </div>
  );
}

export default Post;
