import LeftSideBar from "@/components/base/LeftSideBar";
import AddPost from "@/components/posts/AddPost";
import RightSideBar from "@/components/base/RightSideBAr";
import Post from "@/components/posts/Post";
import Haha from "../posts/Haha";
function Container() {
  return (
    <div className="container">
      <div className="flex">
        <LeftSideBar />
        <div className="w-full bg-slate-300 h-screen overflow-y-auto">
          <AddPost />
          {/* <Post /> */}
          <Haha />
        </div>
        <RightSideBar />
      </div>
    </div>
  );
}

export default Container;
