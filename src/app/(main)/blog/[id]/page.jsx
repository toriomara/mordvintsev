import { Suspense } from 'react';
import { Loader } from '@/components/ui/loader';
import { getAllPosts, getPostById } from '@/utils/fetchData';

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export const Post = async ({ params: { id } }) => {
  const [post] = await getAllPosts(id);
  console.log(post);

  return (
    <div className='wrapper-main'>
      <Suspense fallback={<Loader />}>
        <h1>{post.body}</h1>
      </Suspense>
    </div>
  );
};

export default Post;
