import Link from "next/link";
import SignOut from "../common/SignOut";
function LeftSideBar() {
  return (
    <div className="h-screen border-r-2 border-sky-300  md:w-1/4 md:block hidden ">
      <div className="">
        <ul className="">
          <li className="m-9">
            <Link href="/">Home</Link>
          </li>
          <li className="m-9">
            <Link href="/search">Search </Link>
          </li>
          <li className="m-9">
            <Link href="/activity">Activity</Link>
          </li>
          <li className="m-9">
            <Link href="/create-thread">Create Thread</Link>
          </li>
          <li className="m-9">
            <Link href="/communities">Communities</Link>
          </li>
          <li className="m-9">
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </div>
      <SignOut />
    </div>
  );
}

export default LeftSideBar;
