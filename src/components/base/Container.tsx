import LeftSideBar from "@/components/base/LeftSideBar";

import RightSideBar from "@/components/base/RightSideBAr";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <div className="flex">
        <LeftSideBar />
        <div className="w-full bg-slate-300 h-screen overflow-y-auto">
          {children}
        </div>

        <RightSideBar />
      </div>
    </div>
  );
}

export default Container;
