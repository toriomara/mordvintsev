import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/utils/fetchData';

export const metadata = {
  title: 'Блог | Адвокат Р.Ф. Мордвинцев',
  description: 'Блог адвоката Романа Фёдоровича Мордвинцева',
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  // const posts = await getAllPosts().sort(
  //   (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  // );

  return (
    <div className='wrapper-main'>
      <div className='wrapper-section'>
        <h1 className='title-section'>Блог</h1>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-y-8 md:gap-x-6'>
          {posts.length === 0 ? (
            <h2 className='text-center text-3xl'>Постов нет</h2>
          ) : (
            posts.map((post) => (
              <Link
                className='rounded-md border border-custom'
                href={`/blog/${post.id}`}
                key={post.id}
              >
                <article>
                  <Image
                    className=''
                    src={post.image}
                    alt={post.title}
                    height={300}
                    width={200}
                  />
                  <div className='py-6'>
                    <h5 className='text-lg font-semibold'>{post.title}</h5>
                  </div>
                </article>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
