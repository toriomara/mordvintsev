'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export const HeroSection = () => {
  return (
    <section className='lg:py-16'>
      <div className='grid sm:grid-cols-12'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-7 place-self-center text-center sm:text-left justify-between'
        >
          <h1 className='mb-4 2xl:text-7xl lg:text-6xl leading-normal sm:text-5xl text-4xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600'>
              Р.Ф. Мордвинцев
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Уголовный адвокат',
                1000,
                'Семейный адвокат',
                1000,
                'Гражданские дела',
                1000,
                'Арбитраж',
                1000,
              ]}
              wrapper='span'
              speed={10}
              repeat={Infinity}
            />
          </h1>
          <p className='text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem,
            est! ПРивет 337!
          </p>
          <div className='grid gap-4 xs:flex justify-center sm:justify-start'>
            <button className='px-6 py-2 rounded-lg sm:w-fit sm:mr-4 bg-primary-500 hover:bg-primary-400 text-white'>
              <Link className='flex' href='tel:+79608670139' passHref={true}>
                <FaPhoneAlt size={16} className='relative top-0.5 mr-3' />
                Позвонить
              </Link>
            </button>
            <button
              style={{ border: '1px solid white' }}
              className='px-6 py-2 rounded-lg sm:w-fit hover:bg-neutral-800'
            >
              <Link
                className='flex items-start'
                href='mailto:r.mordvintseff@yandex.ru'
                passHref={true}
              >
                <FaEnvelope size={16} className='relative top-0.5 mr-3' />
                Написать
              </Link>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-4'
        >
          <div className='relative rounded-full bg-[#222222] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]'>
            <Image
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              src='/images/image-hero.jpg'
              alt=''
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
