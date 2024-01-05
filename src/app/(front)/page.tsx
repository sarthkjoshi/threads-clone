import Container from "@/components/base/Container";
import AddPost from "@/components/posts/AddPost";
import PostCard from "@/components/posts/PostCard";

import { headers } from "next/headers";
const getData = async () => {
  const response = await fetch("http://localhost:3000/api/post", {
    method: "GET",
    cache: "no-store",
    headers: headers(),
  });
  return await response.json();
};

export default async function Home() {
  const posts: Array<PostType> | [] = await getData();
  return (
    <div>
      <AddPost />
      {posts.map((p) => {
        return <PostCard post={p} key={p.id} />;
      })}
    </div>
  );
}
