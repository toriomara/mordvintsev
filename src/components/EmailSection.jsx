'use client';
import { useState } from 'react';
import GithubIcon from '../../public/images/github-icon.svg';
import LinkedinIcon from '../../public/images/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';

export const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const data = {
      email: evt.target.email.value,
      subject: evt.target.subject.value,
      message: evt.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = '/api/send';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const resData = await response.json();
    console.log(resData);

    if (response.status === 200) {
      setEmailSubmitted(true);
      console.log('Message sent');
    }
  };

  return (
    <section className='grid w-full md:grid-cols-2 wrapper-section gap-4'>
      <div className='z-10'>
        <h5 className='text-xl font-bold mb-2'>Let&apos;s Connect</h5>
        <p className='text-[#adb7be] mb-4 max-w-md'>
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className='socials flex flex-row gap-2'>
          <Link href='github.com'>
            <Image src={GithubIcon} alt=''></Image>
          </Link>
          <Link href='github.com'>
            <Image src={LinkedinIcon} alt=''></Image>
          </Link>
        </div>
      </div>
      <div>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <div className='mb-6'>
            <label
              className='block mb-2 text-sm font-medium text-white'
              htmlFor='email'
            >
              Your email
            </label>
            <input
              className='contact-input'
              name='email'
              type='email'
              id='email'
              required
              placeholder='jacob@yandex.ru'
            />
          </div>
          <div className='mb-6'>
            <label
              className='block mb-2  text-sm font-medium text-white'
              htmlFor='subject'
            >
              Subject
            </label>
            <input
              className='contact-input'
              name='subject'
              type='text'
              id='subject'
              required
              placeholder='Jojo saying hi!'
            />
          </div>
          <div className='mb-6'>
            <label
              className='block mb-2 text-sm text-white font-medium'
              htmlFor='message'
            >
              Message
            </label>
            <textarea
              className='contact-input'
              name='message'
              id='message'
              placeholder="Let's talk about..."
            />
          </div>
          <button
            className='bg-primary-500 hover:bg-primary-700 text-white font-medium py-2.5 px-5 rounded-lg w-full'
            type='submit'
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className='mt-2 text-sm text-green-500'>
              Email sent successfuly!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};