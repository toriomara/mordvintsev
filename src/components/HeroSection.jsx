'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { Button, ButtonOutlined } from './ui/buttons';

export const HeroSection = () => {
  return (
    <section className='wrapper-section'>
      <div className='grid grid-cols-1 sm:grid-cols-6 xl:grid-cols-12 gap-4'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-1 sm:col-span-3 xl:col-span-6 place-self-center text-center sm:text-left justify-between'
        >
          <h1 className='mb-4 font-extrabold text-2xl xs:text-4xl sm:text-[26px] md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl leading-8 sm:leading-8'>
            <span className='text-secondary-400 '>
              Роман&nbsp;Фёдорович Мордвинцев
            </span>
            <br />
            <span className='text-2xl'>
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
            </span>
          </h1>
          <p className='mb-6 leading-56 text-base md:text-lg'>
            Здравствуйте. Я — адвокат по уголовным делам с более чем 12-летним
            опытом. Также веду гражданские, арбитражные и дела об
            административных правонарушениях. Предоставляю услуги семейного
            адвоката и услуги юридического сопровождения бизнеса
          </p>
          <div className='gap-4 grid xs:flex sm:grid lg:flex justify-center sm:justify-start'>
            <Button className=''>
              <Link
                className='flex items-center'
                href='tel:+79608670139'
                passHref={true}
              >
                <FaPhoneAlt size={16} className='relative mr-3' />
                Позвонить
              </Link>
            </Button>
            <ButtonOutlined className='px-6 py-2'>
              <Link
                className='flex items-center'
                href='mailto:r.mordvintseff@yandex.ru'
                passHref={true}
              >
                <FaEnvelope size={16} className='relative mr-3' />
                Написать
              </Link>
            </ButtonOutlined>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='flex col-span-1 py-10 xs:py-14 sm:py-0 sm:col-span-3 xl:col-span-6 justify-center items-center md:justify-end'
        >
          <div className='relative rounded-full bg-gray-200 dark:bg-zinc-800 w-[200px] h-[200px] xs:w-[250px] xs:h-[250px] lg:w-[400px] lg:h-[400px]'>
            <Image
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              src='/images/heroPhoto.png'
              alt='Фото адвоката Р.Ф. Мордвинцева'
              width={350}
              height={350}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
