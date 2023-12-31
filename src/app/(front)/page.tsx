import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
import Container from "@/components/ui/base/Container";
export default async function Home() {
  // const session = await getServerSession(authOptions);

  return (
    <div>
      <Container />
    </div>
  );
}
