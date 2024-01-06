import { Button } from "../ui/button";
import UserAvatar from "./UserAvatar";
function AuthorList({ author }: { author: AuthorType }) {
  return (
    <div className="ml-1 flex items-start">
      <div className="flex items-center justify-center space-x-3">
        <UserAvatar />
        <div className="flex flex-col">
          <h1 className="font-bold mr-1">{author.name}</h1>
          <p>{author.username}</p>
        </div>
        <Button>View</Button>
      </div>
    </div>
  );
}

export default AuthorList;
