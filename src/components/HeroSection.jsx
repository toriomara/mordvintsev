'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export const HeroSection = () => {
  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-10'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-1 sm:col-span-1 xl:col-span-6 place-self-center text-center sm:text-left justify-between'
        >
          <h1 className='mb-4 2xl:text-6xl lg:text-4xl sm:text-4xl text-4xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500'>
              Роман Фёдорович Мордвинцев
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
          <p className='mb-6 '>
            Здравствуйте. Я — адвокат по уголовным делам с более чем 12-летним
            опытом. Также веду гражданские, арбитражные и дела об
            административных правонарушениях. Предоставляю услуги семейного
            адвоката и услуги юридического сопровождения бизнеса
          </p>
          <div className='grid gap-4 xs:flex justify-center sm:justify-start'>
            <button className='px-6 py-2 rounded-lg sm:w-fit sm:mr-4 bg-primary-500 border border-transparent text-white hover:text-primary-500 hover:bg-transparent hover:border hover:border-primary-500'>
              <Link className='flex' href='tel:+79608670139' passHref={true}>
                <FaPhoneAlt size={16} className='relative top-0.5 mr-3' />
                Позвонить
              </Link>
            </button>
            <button className='px-6 py-2 rounded-lg sm:w-fit text-primary-500 border border-primary-500 hover:text-white hover:bg-primary-500'>
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
          className='flex col-span-1 justify-center items-center xl:justify-end sm:col-span-1 xl:col-span-6'
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
