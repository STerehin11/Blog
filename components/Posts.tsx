"use client";
import { deletePostById, getAllPosts } from "@/services/getPosts";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MouseEventHandler } from "react";
import useSWR from "swr";

const Posts = () => {
  const { data: posts, isLoading, mutate } = useSWR("posts", getAllPosts);
  const router = useRouter();

  const deletePost: MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;

    await deletePostById(button.id);

    mutate(posts.filter((post: any) => post.id.toString() !== button.id));
    router.push("/");
  };

  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <div className="postBg">
            <Link href={"/blog/" + post.id}>{post.title}</Link>
            <div className="buttonWrap">
              <button
                className="deleteButton"
                id={post.id}
                onClick={deletePost}
              >
                Delete post
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
