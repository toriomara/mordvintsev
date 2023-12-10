export const getAllPosts = async () => {
  const res = await fetch('http://127.0.0.1:3010/api/posts', {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error('Невозможно отобразить данные');
  const posts = await res.json();

  return posts;
};
