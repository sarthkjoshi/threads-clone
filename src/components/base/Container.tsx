import LeftSideBar from "@/components/base/LeftSideBar";
import Ha from "../posts/Ha";
import RightSideBar from "@/components/base/RightSideBAr";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <div className="flex">
        <LeftSideBar />
        {children}
        <RightSideBar />
        <Ha />
      </div>
    </div>
  );
}

export default Container;
