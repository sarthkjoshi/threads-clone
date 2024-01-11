import CommentCard from "@/components/common/CommentCard";
import PostCard from "@/components/common/PostCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  getCurrentUserComments,
  getCurrentUserPost,
} from "@/lib/getServerData";

async function Profile() {
  const posts: Array<PostType> | [] = await getCurrentUserPost();
  const comments: Array<CommentType> | [] = await getCurrentUserComments();
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
              return <PostCard post={p} key={p.id} isDelete={true} />;
            })}
          </TabsContent>
          <TabsContent value="Comments">
            {comments.map((p) => {
              return <CommentCard comment={p} key={p.id} isDelete={true} />;
            })}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Profile;
