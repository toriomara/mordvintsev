import { unstable_noStore as noStore } from 'next/cache';

const basicFetch = async (endpoint) => {
  const res = await fetch(endpoint);
  if (!res) throw new Error('Невозможно загрузить данные');

  return res.json();
};

const getAllPosts = async () => {
  noStore();
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Невозможно отобразить посты');

  return res.json();
};

const getPostById = async (id) => {
  noStore();
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts/${id}`, {
  // const res = await fetch(`${process.env.VERCEL_URL}/api/posts/${id}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error('Невозможно отобразить пост');

  return res.json();
};

const getPostBySearch = async (search) => {
  noStore();
  // const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts?q=${search}`);
  const res = await fetch(`${process.env.VERCEL_URL}/api/posts?q=${search}`);
  if (!res.ok) throw new Error('Невозможно отобразить пост');

  return res.json();
};

const getUser = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error('Невозможно отобразить пользователей');
  return res.json();
};

const getUserPosts = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  if (!res.ok) throw new Error('Невозможно отобразить посты');

  return res.json();
};

const getUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) throw new Error('Невозможно отобразить пользователей');

  return res.json();
};

export {
  basicFetch,
  getAllPosts,
  getUser,
  getUserPosts,
  getUsers,
  getPostById,
  getPostBySearch,
};

// https://jsonplaceholder.typicode.com/posts
