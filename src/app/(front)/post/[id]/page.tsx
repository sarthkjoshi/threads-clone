import PostCard from "@/components/common/PostCard";
import { getCurrentClikedPost } from "@/lib/getServerData";

async function Post({ params }: { params: { id: string } }) {
  const post = getCurrentClikedPost(params.id);
  return (
    <div>
      <PostCard />
    </div>
  );
}

export default Post;
