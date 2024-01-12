import PostCard from "@/components/common/PostCard";
import { getClickedUserDetails } from "@/lib/getServerData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

async function User({ params }: { params: { id: number } }) {
  const user: UserDeatailsType = await getClickedUserDetails(params.id);

  return (
    <div>
      <h2>Profile</h2>
      <div>
        <Tabs defaultValue="Posts">
          <TabsList className=" flex  ">
            <TabsTrigger value="Posts" className="w-full">
              Posts
            </TabsTrigger>
            <TabsTrigger value="Replies" className="w-full">
              Replies
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Posts">
            {user.posts.map((p) => {
              return <PostCard post={p} key={p.id} isDelete={false} />;
            })}
          </TabsContent>
          <TabsContent value="Replies">
            {/* {comments.map((p) => {
              return <CommentCard comment={p} key={p.id} isDelete={true} />;
            })} */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default User;
