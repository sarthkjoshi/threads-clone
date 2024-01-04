import Container from "@/components/base/Container";
import AddPost from "@/components/posts/AddPost";
import PostCard from "@/components/posts/PostCard";
import axios from "axios";

const getData = async () => {
  const response = await axios.get("http://localhost:3000/api/post");
  return await response.data;
};
export default async function Home() {
  const posts: Array<PostType> | [] = await getData();
  return (
    <div>
      <Container>
        <div className="w-full bg-slate-300 h-screen overflow-y-auto">
          <AddPost />
          {posts.map((p) => {
            return <PostCard post={p} key={p.id} />;
          })}
        </div>
      </Container>
    </div>
  );
}
