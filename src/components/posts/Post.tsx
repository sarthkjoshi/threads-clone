import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Post() {
  return (
    <div className="flex border border-sky-900 gap-2 items-center">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div>
        <div className="flex">
          <h1 className="font-bold mr-1">Sarthak Joshi</h1>
          <p>@sarthak</p>
          <p>. 5m</p>
        </div>

        <div>
          <p>
            architecto nam voluptatum explicabo est qui ea veritatis sunt
            minima. Est.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Post;
