import { headers } from "next/headers";
export const getAllPost = async () => {
  const response = await fetch("http://localhost:3000/api/post", {
    method: "GET",
    cache: "no-store",
    headers: headers(),
  });

  return await response.json();
};
export const getCurrentUserPost = async () => {
  const response = await fetch("http://localhost:3000/api/user/post", {
    method: "GET",
    cache: "no-store",
    headers: headers(),
  });
  return await response.json();
};

export const getAllUser = async () => {
  const response = await fetch("http://localhost:3000/api/user", {
    method: "GET",
    cache: "no-store",
    headers: headers(),
  });
  return await response.json();
};

export const getCommment = async () => {
  const response = await fetch("http://localhost:3000/api/comment", {
    method: "GET",
    cache: "no-store",
    headers: headers(),
  });
  return await response.json();
};

export const getCurrentClikedPost = async (id: number) => {
  const response = await fetch(`http://localhost:3000/api/post/${id}`, {
    method: "GET",
    cache: "no-store",
    headers: headers(),
  });

  return await response.json();
};
export const getCurrentUserComments = async () => {
  const response = await fetch("http://localhost:3000/api/user/comment", {
    method: "GET",
    cache: "no-store",
    headers: headers(),
  });
  return await response.json();
};
