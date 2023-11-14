import Link from 'next/link';

export const NavLink = ({ href, title }) => {
  return (
    <Link
      className='block py-2 pl-3 pr-4 text-[#adb7be] sm:text-sl rounded md:p-0 hover:text-white'
      href={href}
    >
      {title}
    </Link>
  );
};
