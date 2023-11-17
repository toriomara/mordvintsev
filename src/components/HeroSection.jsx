'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { Button, ButtonOutlined } from './ui/buttons';

export const HeroSection = () => {
  return (
    <section className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-5 xl:grid-cols-12 gap-10'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-1 sm:col-span-3 xl:col-span-7 place-self-center text-center sm:text-left justify-between'
        >
          <h1 className='mb-4 font-extrabold text-3xl xs:text-4xl sm:text-[30px] md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl leading-8 sm:leading-8'>
            <span className='text-secondary-400 '>
              Роман&nbsp;Фёдорович Мордвинцев
            </span>
            <br />
            {/* <TypeAnimation
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
            /> */}
          </h1>
          <p className='mb-6 leading-56 text-base md:text-lg'>
            Здравствуйте. Я — адвокат по уголовным делам с более чем 12-летним
            опытом. Также веду гражданские, арбитражные и дела об
            административных правонарушениях. Предоставляю услуги семейного
            адвоката и услуги юридического сопровождения бизнеса
          </p>
          <div className='grid gap-4 xs:flex justify-center sm:justify-start'>
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
          className='flex col-span-1 justify-center items-center xl:justify-end sm:col-span-2 xl:col-span-5'
        >
          <div className='relative rounded-full bg-gray-200 dark:bg-[#222222] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]'>
            <Image
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              src='/images/121213.png'
              alt='/images/121213.png'
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
