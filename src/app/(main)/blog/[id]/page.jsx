import { Suspense } from 'react';
import { getAllPosts } from '../page';
import { Loader } from '@/components/ui/loader';

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

// export async function generateMetadata({ params: { id } }) {
//   const post = await getPostById(id);

//   return {
//     title: post.title,
//   };
// }

// export const getPostById = async (id) => {
//   const res = await fetch(`http://localhost:3010/api/posts/${id}`, {
//     headers: { 'Content-type': 'application/json' },
//   });

//   if (!res.ok) throw new Error('Невозможно загрузить пост');

//   return res.json();
// };

// async function Postlist({ id }) {
//   // Wait for the playlists
//   const playlists = await getArtistPlaylists(artistID);

//   return (
//     <ul>
//       {playlists.map((playlist) => (
//         <li key={playlist.id}>{playlist.name}</li>
//       ))}
//     </ul>
//   );
// }

const Post = async ({ params }) => {
  // const { post } = params.id;

  return (
    <>
      <Suspense fallback={<Loader />}>
        <h1 className='mb-2 font-bold'>{params.id}</h1>
        {/* <p className='mb-6'>{post.title}</p> */}
      </Suspense>
    </>
  );
};

export default Post;
