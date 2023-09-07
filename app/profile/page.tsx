import { authConfig } from "@/configs/auth";
import type { Metadata } from "next";
import { getServerSession } from "next-auth/next";

export const metadata: Metadata = {
  title: "Profile",
};

export default async function Profile() {
  const session = await getServerSession(authConfig);
  return (
    <div>
      <h1>Profile of {session?.user?.name}</h1>
    </div>
  );
}
