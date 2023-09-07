export const getAllPosts = async () => {
  const response = await fetch("api/posts");

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
};

export const getPostsBySearch = async (search: string) => {
  const response = await fetch(`api/posts?q=${search}`);

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
};

export const deletePostById = async (id: string) => {
  const response = await fetch(`api/posts/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) throw new Error("Unable to deelte post.");

  return response.json();
};

export const getPostById = async (id: string) => {
  console.log("getPostById. Id " + id);
  const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error("Unable to fetch post.");

  return response.json();
};
