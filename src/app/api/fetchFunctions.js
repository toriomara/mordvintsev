export const basicFetch = async (endpoint) => {
  const res = await fetch(endpoint);
  if (!res) throw new Error('Невозможно загрузить данные');
  const data = await res.json();

  return data
}

export const getAllPosts = async () => {
  const res = await fetch('http://localhost:3010/api/posts', {
    method: 'GET',
  });
  if (!res.ok) throw new Error('Невозможно отобразить данные');
  const posts = await res.json();

  return posts;
};

// export const getPostById = async (postId) => {
//   const res = await fetch(`http://localhost:3010/api/posts/${postId}`, {
//     method: 'GET',
//   });
//   if (!res.ok) throw new Error('Невозможно отобразить данные');
//   const posts = await res.json();

//   return posts;
// };
