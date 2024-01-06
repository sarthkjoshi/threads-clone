import { getAllUser } from "@/lib/getServerData";

import AuthorList from "../common/AuthorList";
async function RightSideBar() {
  const authors: Array<AuthorType> | null = await getAllUser();
  return (
    <div className="h-screen border-l-2 border-sky-300  md:w-1/4 md:block hidden">
      <div>
        <h2 className="font-bold">Suggestions for your</h2>
      </div>
      {authors?.map((author) => (
        <AuthorList key={author.id} author={author} />
      ))}
    </div>
  );
}

export default RightSideBar;
