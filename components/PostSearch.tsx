"use client";
import useSWR from "swr";
import { getPostsBySearch } from "@/services/getPosts";
import { FormEventHandler, useState } from "react";

const PostSearch = () => {
  const { mutate } = useSWR("posts");
  const [search, setSearch] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const posts = await getPostsBySearch(search);
    mutate(posts);
  };

  return (
    <form onSubmit={handleSubmit} className="row">
      <input
        type="search"
        placeholder="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className="myInput"
      ></input>
      <button className="myButton" type="submit">
        Search
      </button>
    </form>
  );
};

export default PostSearch;
