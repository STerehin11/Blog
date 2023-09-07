import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

export default function Home() {
  return <h1>Welcome to Blog app</h1>;
}
