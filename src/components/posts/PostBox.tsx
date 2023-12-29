import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function PostBox() {
  return (
    <div className="flex flex-col h-40 justify-between">
      <div className="flex">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Input
          placeholder="What is happening?!"
          className="bg-transparent border-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>
      <div className="ml-auto">
        <Button className="bg-sky-500">Post</Button>
      </div>
    </div>
  );
}

export default PostBox;
