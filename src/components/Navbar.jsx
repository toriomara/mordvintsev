'use client';
import { useState } from 'react';
import Link from 'next/link';
import { IoClose, IoMenuSharp } from 'react-icons/io5';
import MenuOverlay from './MenuOverlay';
import { useRouter, usePathname } from 'next/navigation';
import { ModeToggle } from './ModeToggle';
import { SearchInput } from './SearchInput';

const navLinks = [
  { title: 'Главная', path: '/' },
  { title: 'Услуги', path: '/services' },
  { title: 'Об адвокате', path: '/about' },
  { title: 'Контакты', path: '/contacts' },
  { title: 'Блог', path: '/blog' },
];

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleOpen = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <header className='border-b border-custom'>
      <nav className='flex items-center justify-between max-w-screen-xl mx-auto wrapper-footer'>
        <div className='flex items-center gap-6'>
          <Link className='text-2xl md:text-3xl font-semibold' href='/'>
            LOGO
          </Link>
          <SearchInput />
          <ModeToggle />
        </div>
        <div className='mobile-menu block md:hidden'>
          <button className='flex items-center px-2 py-2' onClick={handleOpen}>
            {!isNavbarOpen ? (
              <IoMenuSharp
                className='fill-black hover:fill-slate-600 dark:fill-slate-200 dark:hover:fill-white'
                size={24}
              />
            ) : (
              <IoClose
                className='fill-black hover:fill-slate-600 dark:fill-slate-200 ark:hover:fill-white'
                size={24}
              />
            )}
          </button>
        </div>
        <div className='menu hidden md:block md:w-auto' id='navbar'>
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 items-center'>
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className={`${
                  pathname === link.path
                    ? 'px-4 py-2 text-white bg-secondary-600 rounded-md'
                    : 'block py-2 pl-3 pr-4  sm:text-sl rounded md:p-0 hover:text-secondary-600 '
                }
                `}
              >
                {link.title}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
      {isNavbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </header>
  );
};
