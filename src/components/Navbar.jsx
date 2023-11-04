'use client';
import { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

const navLinks = [
  { title: 'Главная', path: '/' },
  { title: 'Услуги', path: '/services' },
  { title: 'Об адвокате', path: '/about' },
  { title: 'Контакты', path: '/contacts' },
  { title: 'Блог', path: '/blog' },
];

export const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleOpen = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <header className='border-b border-[#33353f] bg-gray-300 dark:bg-transparent'>
      <nav className='flex max-w-screen-xl mx-auto px-10 my-6 sm:px-12 md:px-20 2xl:px-4 items-center justify-between flex-wrap'>
        <Link
          className='text-2xl md:text-5xl text-white font-semibold'
          href='/'
        >
          LOGO
        </Link>
        <div className='mobile-menu block md:hidden'>
          {!isNavbarOpen ? (
            <button
              className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
              onClick={handleOpen}
            >
              <Bars3Icon className='h-5 w-5' />
            </button>
          ) : (
            <button
              className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
              onClick={handleOpen}
            >
              <XMarkIcon className='h-5 w-5' />
            </button>
          )}
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {isNavbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </header>
  );
};
