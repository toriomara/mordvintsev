import loader from '../../../public/loader.svg';
import Image from 'next/image';

export const Loader = () => {
  return (
    <>
      <section className='flex justify-center items-center w-full'>
        <div>
          <Image
            src={loader}
            alt='Loader'
            width={56}
            height={56}
            className='object-contain'
          />
        </div>
      </section>
    </>
  );
};
