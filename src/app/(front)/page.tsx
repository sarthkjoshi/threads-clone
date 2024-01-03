import Container from "@/components/base/Container";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";
export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      <Container />
    </div>
  );
}
