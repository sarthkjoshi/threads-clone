import LeftSideBar from "@/components/ui/base/LeftSideBar";
import PostBox from "@/components/posts/PostBox";
import RightSideBar from "@/components/ui/base/RightSideBAr";
import Post from "@/components/posts/Post";
function Container() {
  return (
    <div className="flex container">
      <LeftSideBar />
      <div className="w-full bg-slate-300 h-screen overflow-y-auto">
        <PostBox />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <RightSideBar />
    </div>
  );
}

export default Container;
