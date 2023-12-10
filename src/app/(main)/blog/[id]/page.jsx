import { Suspense } from 'react';
import { Loader } from '@/components/ui/loader';
import { getAllPosts } from '@/utils/fetchData';

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
//   const res = await fetch(`http://127.0.0.1:3010/api/posts/${id}`, {
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

const Post = async () => {
  const res = await fetch('http://127.0.0.1:3010/api/posts');
  const data = await res.json();

  return data[10].title;
};

// export async function getServerSideProps({ params }) {
//   const { id } = params;

//   // Fetch data for the specific post using slug
//   const response = await fetch(`http://127.0.0.1:3010/api/posts/${id}`);
//   const post = await response.json();

//   return {
//     props: { post },
//   };
// }

const PostPage = async ({ params }) => {
  // const { post } = params.id;

  return (
    <>
      <div className='wrapper-main'>
        <Suspense fallback={<Loader />}>
          <Post id={params.id} />
          {/* <h1 className='mb-2 font-bold'>{params.id}</h1> */}

          {/* <p className='mb-6'>{post.title}</p> */}
        </Suspense>
      </div>
    </>
  );
};

export default PostPage;
