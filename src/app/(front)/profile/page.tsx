import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function Profile() {
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
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="Comments">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Profile;
