import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { posts } from "../posts";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  let postIndex = -1;
  for (let index = 0; index < posts.length; index++) {
    const post = posts[index];
    if (post.id.toString() == id) {
      postIndex = index;
      break;
    }
  }

  posts.slice(postIndex, 1);
  //логику удаления сюда надо засунуть
  // redirect("/");

  return NextResponse.json({ postIndex });
}

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  console.log("GET. ID " + params.id);
  const id = params.id;

  let post = null;
  for (let index = 0; index < posts.length; index++) {
    const element = posts[index];
    console.log("GET. index " + index);
    if (element.id.toString() === id) {
      post = element;
    }
  }
  console.log("GET. Element title " + post?.title);
  if (post !== null) {
    return NextResponse.json(post);
  } else {
    return NextResponse.error();
  }
}
