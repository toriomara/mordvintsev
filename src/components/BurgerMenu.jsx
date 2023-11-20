import { useEffect } from 'react';
import { NavLink } from './NavLink';

export const BurgerMenu = ({ links, onClose, isNavbarOpen }) => {
  useEffect(() => {
    const closeMenu = () => {
      if (window.innerWidth > 768) return onClose();
    };
    if (isNavbarOpen) {
      window.addEventListener('resize', closeMenu);
      return () => {
        window.removeEventListener('resize', closeMenu);
      };
    }
  }, [innerWidth, onClose]);

  useEffect(() => {
    document.body.style.overflow = isNavbarOpen ? 'hidden' : 'unset';
  }, [isNavbarOpen]);

  return (
    <ul className='flex flex-col py-4 items-center'>
      {links.map((link, index) => (
        <li key={index} onClick={onClose}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};
