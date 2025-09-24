import { prismaClient } from "db/client";

export default async function Home() {
  const users = await prismaClient.user.findMany();

  return (
    <div>
      Hi there
      {JSON.stringify(users)}
    </div>
  );
}

// export const revalidate = 60 // reavalidate the page every 60 seconds
// or
// export const dynamic = "force-dynamic"