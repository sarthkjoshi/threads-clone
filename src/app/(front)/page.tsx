import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
      tg
      <Button>CLick me</Button>
      <p>{session && JSON.stringify(session)}</p>
    </div>
  );
}
