import LeftSideBar from "@/components/base/LeftSideBar";

import RightSideBar from "@/components/base/RightSideBAr";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <div className="flex">
        <LeftSideBar />
        {children}
        <RightSideBar />
      </div>
    </div>
  );
}

export default Container;
