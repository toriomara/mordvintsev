import Link from 'next/link';
import Post from './[id]/page';
import Image from 'next/image';

export const metadata = {
  title: 'Блог | Адвокат Р.Ф. Мордвинцев',
};

export const getAllPosts = async () => {
  const res = await fetch('http://localhost:3010/api/posts');

  if (!res.ok) throw new Error('Невозможно отобразить данные');

  return res.json();
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className='wrapper-main'>
      <div className='wrapper-section'>
        <h1 className='title-section'>Блог</h1>
        <div>
          <ul className='grid md:grid-cols-3 gap-4 md:gap-y-8 md:gap-x-6'>
            {posts.map((post) => (
              <BlogCard
                key={post.id}
                id={post.id}
                title={post.title}
                description={post.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const BlogCard = (props) => {
  const { title, description, id } = props;

  return (
    <Link className='bg-neutral-600 rounded-md' href={`/blog/${id}`}>
      <Image
        className='rounded-md'
        src='/images/projects/1.png'
        alt='Blog article'
        height={300}
        width={200}
      />
      <div className='text-white px-4 py-6 mt-3'>
        <h5 className='text-xl font-xl font-semibold mb-2'>{title}</h5>
        <p className='text-[#adb7be]'>{description}</p>
      </div>
    </Link>
  );
};
