// import { Suspense } from 'react';
// import { Loader } from '@/components/ui/loader';
// import { getAllPosts, getPostById } from '@/utils/fetchData';

// export async function generateStaticParams() {
//   const posts = await getAllPosts();

//   return posts.map((post) => ({
//     id: post.id.toString(),
//   }));
// }

// export const Post = async ({ params: { id } }) => {
//   const [post] = await getAllPosts(id);
//   console.log(post);

//   return (
//     <div className='wrapper-main'>
//       <Suspense fallback={<Loader />}>
//         <h1>{post.body}</h1>
//       </Suspense>
//     </div>
//   );
// };

// export default Post;

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import { Suspense } from 'react';
// import { Loader } from '@/components/ui/loader';
// import { getAllPosts, getPostById } from '@/utils/fetchData';

// export const Post = async ({ params }) => {
//   const post = params;
//   console.log(post);

//   return (
//     <div className='wrapper-main'>
//       <Suspense fallback={<Loader />}>
//         <h1>{post.body}</h1>
//       </Suspense>
//     </div>
//   );
// };

// export default Post;

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import { Suspense } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Loader } from '@/components/ui/loader';
import { getAllPosts, getPostById } from '@/utils/fetchData';

const Post = async ({ params: { itemId } }) => {
  console.log(itemId);

  const posts = await getAllPosts();

  const arr = Array.from(posts);
  console.log(arr);

  const resultObject = arr.filter((p) => p.id === itemId);

  console.log(resultObject);

  // function search(id, myArray) {
  //   for (let i = 0; i < myArray.length; i++) {
  //     if (myArray[i].id === id) {
  //       return myArray[i];
  //     }
  //   }
  // }
  // const resultObject = search(id, arr);
  // console.log(resultObject);

  try {
    return (
      <div className='wrapper-main'>
        <Suspense fallback={<Loader />}>
          <Item itemId={resultObject} />
        </Suspense>
      </div>
    );
  } catch (error) {
    return notFound();
  }
};

const Item = async (itemId) => {
  const item = await getPostById(itemId);

  return (
    <div>
      <h2 className='text-white text-3xl'>{item.title}</h2>
      <h3>{item.body}</h3>
      <Image
        className=''
        src={item.image}
        alt={item.title}
        height={300}
        width={200}
      />
    </div>
  );
};

export default Post;
