import PostCard from "@/components/common/PostCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getCurrentUserPost } from "@/lib/getServerData";

async function Profile() {
  const posts: Array<PostType> | [] = await getCurrentUserPost();
  return (
    <div>
      <h2>Profile</h2>
      <div>
        <Tabs defaultValue="Posts">
          <TabsList className=" flex  ">
            <TabsTrigger value="Posts" className="w-full">
              Posts
            </TabsTrigger>
            <TabsTrigger value="Comments" className="w-full">
              Comments
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Posts">
            {posts.map((p) => {
              return <PostCard post={p} key={p.id} />;
            })}
          </TabsContent>
          <TabsContent value="Comments">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Profile;
