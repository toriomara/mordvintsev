const basicFetch = async (endpoint) => {
  const res = await fetch(endpoint);
  if (!res) throw new Error('Невозможно загрузить данные');

  return res.json();
};

const getAllPosts = async () => {
  const res = await fetch('https://mordvintsev.vercel.app/posts', {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Невозможно отобразить посты');

  return res.json();
};

const getPostById = async (id) => {
  const res = await fetch(`http://localhost:3010/api/posts/${id}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error('Невозможно отобразить пост');

  return res.json();
};

const getPostBySearch = async (search) => {
  const res = await fetch(`http://localhost:3010/api/posts?q=${search}`);
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
