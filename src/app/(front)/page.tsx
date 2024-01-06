import AddPost from "@/components/posts/AddPost";
import PostCard from "@/components/posts/PostCard";
import { getAllPost } from "@/lib/getServerData";

export default async function Home() {
  const posts: Array<PostType> | [] = await getAllPost();
  return (
    <div>
      <AddPost />

      {posts.map((p) => {
        return <PostCard post={p} key={p.id} />;
      })}
    </div>
  );
}
