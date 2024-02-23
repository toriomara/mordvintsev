'use client';

import { FaEnvelope, FaVk, FaOdnoklassniki } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from './ui/button';
import { Input } from './ui/input';

export const EmailSection = () => {
  return (
    <section className='grid w-full md:grid-cols-2 wrapper-section gap-6'>
      <div className=''>
        <h5 className='text-xl font-bold mb-2'>Свяжитесь со мной</h5>
        <p className='mb-4 max-w-md'>
          Изложите в сообщении суть обращения и/или ваш вопрос. Я обязательно
          отвечу на него. Обычно время ответа не более двух дней.
        </p>
        <p className='mb-4 max-w-md'>
          Также вы можете задать мне вопрос в социальных сетях, перейдя по
          ссылкам ниже
        </p>
        <div className='socials flex flex-row gap-2'>
          <Link href='https://vk.com' target='_blank'>
            <FaVk size={30} />
          </Link>
          <Link href='https://odnoklassniki.com' target='_blank'>
            <FaOdnoklassniki size={30} />
          </Link>
        </div>
      </div>
      <div>
        <form className='flex flex-col'>
          <div className='mb-6'>
            <label className='block mb-2 text-sm font-medium ' htmlFor='email'>
              Ваша почта
            </label>
            <Input
              className='contact-input'
              name='email'
              type='email'
              id='email'
              required
              placeholder='ivan.baryshnikov@yandex.ru'
            />
          </div>
          <div className='mb-6'>
            <label
              className='block mb-2  text-sm font-medium '
              htmlFor='subject'
            >
              Тема обращения
            </label>
            <Input
              className='contact-input'
              name='subject'
              type='text'
              id='subject'
              required
              placeholder='Спор при межевании земельного участка'
            />
          </div>
          <div className='mb-6'>
            <label className='block mb-2 text-sm font-medium' htmlFor='message'>
              Текст обращения
            </label>
            <textarea
              className='contact-input'
              name='message'
              id='message'
              placeholder='Опишите вашу ситуацию'
            />
          </div>
          <Button className='w-full' type='submit'>
            <FaEnvelope className='h-4 w-4 mr-2' />
            Отправить
          </Button>
        </form>
      </div>
    </section>
  );
};
