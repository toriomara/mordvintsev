import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <main className='grid flex-auto min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8'>
        <div className='text-center'>
          <p className='font-semibold text-8xl text-secondary-500'>404</p>
          <h1 className='mt-4 text-3xl font-bold text-white tracking-tight sm:text-5xl'>
            Страница не найдена
          </h1>
          <p className='mt-6 text-base leading-7 text-gray-300'>
            Извините, но такой страницы ещё нет
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-6'>
            <Link
              href='/'
              className='rounded-md bg-secondary-500 px-3.5 py-2.5 text-sm font-semibold text-neutral-800 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              На главную
            </Link>
            <Link href='/' className='text-sm font-semibold text-white'>
              Связаться с поддержкой <span aria-hidden='true'>&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
