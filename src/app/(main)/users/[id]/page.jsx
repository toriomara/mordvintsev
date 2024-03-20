import { Suspense } from 'react';
import UserPosts from '@/components/UserPosts';
import { getUser } from '@/libs/fetchData';
import { getUserPosts } from '@/libs/fetchData';
import { Loader } from '@/components/ui/loader';

export default async function UserPage({ params: { id } }) {
  // Инициализируем параллельный запрос
  const userData = getUser(id);
  const userPosts = getUserPosts(id);

  // Ждём оба ответа
  // const [user, posts] = await Promise.all([userData, userPosts]);

  const user = await userData;

  return (
    <div>
      <h1 className='text-5xl font-bold'>User Information</h1>
      <p className='text-3xl mt-10'>{user.name}</p>
      <Suspense fallback={<p className='text-3xl text-center'>Loading...</p>}>
        <UserPosts promise={userPosts} />
      </Suspense>
    </div>
  );
}
