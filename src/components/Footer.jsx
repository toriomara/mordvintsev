import Image from 'next/image';
import Link from 'next/link';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaTelegramPlane,
  FaVk,
  FaOdnoklassniki,
  FaWhatsapp,
} from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className='bg-gray-300 dark:bg-gradient-to-r from-neutral-700 to-neutral-900'>
      <div className='wrapper-main max-w-screen-xl mx-auto'>
        <div className='grid py-4 text-base font-light md:grid-cols-2 lg:grid-cols-12 grid-cols-1 gap-6 justify-between items-start text-gray-900 bg:dark:text-neutral-200 dark:text-neutral-300'>
          <div className='grid gap-4 lg:col-span-4 md:col-span-1'>
            <Image src='/logo.svg' width={200} height={36} alt='Лого' />
            <h4 className='font-semibold text-xl'>Адвокат Р.Ф. Мордвинцев</h4>
            <p className=''>
              № 34/1803 в реестре адвокатов Волгоградской области
            </p>
            <p className=''>
              Деятельность осуществляется на основе Федерального закона от 31
              мая 2002 г. N 63-ФЗ «Об адвокатской деятельности и адвокатуре в
              Российской Федерации»
            </p>
          </div>
          <div className='grid lg:col-span-2 gap-3 mt-4 md:col-span-1'>
            <h4 className='font-semibold text-xl'>Информация</h4>
            <Link href='/'>Главная</Link>
            <Link href='/services'>Услуги</Link>
            <Link href='/about'>Об адвокате</Link>
            <Link href='/blog'>Блог</Link>
          </div>
          <div className='grid lg:col-span-4 gap-3 mt-4 md:col-span-1'>
            <h4 className='font-semibold text-xl'>Контакты</h4>
            <Link href='/' className='flex items-start'>
              <FaMapMarkerAlt size={16} className='relative top-0.5 mr-3' />
              <span className='leading-5'>
                400005, г. Волгоград, <br />
                ул. Коммунистическая, д.21, оф. 46
              </span>
            </Link>
            <Link
              className='flex items-start'
              href='mailto:r.mordvintseff@ya.ru'
              passHref={true}
            >
              <FaEnvelope size={16} className='relative top-0.5 mr-3' />
              <span>r.mordvintseff@yandex.ru</span>
            </Link>
            <Link
              className='flex items-start'
              href='tel:+79608670139'
              passHref={true}
            >
              <FaPhoneAlt size={16} className='relative top-0.5 mr-3' />
              <span>+7 960 867 01 39</span>
            </Link>
          </div>

          <div className='grid lg:col-span-2 gap-6 mt-4 md:col-span-1'>
            <h4 className='font-semibold text-xl'>Вопрос</h4>
            <span className='text-lg leading-6'>Задать вопрос адвокату</span>
            <button className='bg-primary-500 text-zinc-900 w-full font-medium py-2 rounded-md'>
              Отправить
            </button>
          </div>
        </div>
        <hr className='border-[#33353f] sm:mx-auto dark:bg-gradient-to-r from-neutral-900 to-neutral-700 max-w-7xl mx-auto' />
        <div className='max-w-screen-xl mx-auto sm:flex sm:items-center sm:justify-between pt-4'>
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © {new Date().getFullYear()} Адвокат Р.Ф. Мордвинцев. Все права
            защищены
          </span>
          <div className='flex mt-4 space-x-5 sm:justify-center sm:mt-0'>
            <Link
              href='#'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
              passHref={true}
            >
              <FaTelegramPlane size={24} />
              <span className='sr-only'>Telegram page</span>
            </Link>
            <Link
              href='#'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
              passHref={true}
            >
              <FaVk size={24} />
              <span className='sr-only'>Vkontakte page</span>
            </Link>
            <Link
              href='#'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
              passHref={true}
            >
              <FaOdnoklassniki size={24} />
              <span className='sr-only'>Odnoklassniki page</span>
            </Link>
            <Link
              href='#'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
              passHref={true}
            >
              <FaWhatsapp size={24} />
              <span className='sr-only'>Whatsapp page</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
