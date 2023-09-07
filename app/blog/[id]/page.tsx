import { posts } from "@/app/api/posts/posts";
import { deletePostById, getPostById } from "@/services/getPosts";
import { Metadata } from "next";
import { MouseEventHandler, useState } from "react";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getPostById(id);
  return {
    title: post.title,
  };
}

const Post = async ({ params: { id } }: Props) => {
  const post = await getPostById(id);
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};

export default Post;
// export default async function Post({ params: { id } }: Props) {

//   const post = await getPostById(id);
//   return (
//     <>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//       <button id={post.id} onClick={deletePost}>
//         Delete post
//       </button>
//     </>
//   );
// }
