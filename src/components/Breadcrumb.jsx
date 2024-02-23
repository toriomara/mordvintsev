'use client';

import { Fragment } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const Breadcrumb = ({ capitalizeLinks }) => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);
  console.log(paths);

  const listClasses = 'hover:underline px-2 first:pl-0 font-bold';
  const activeClasses = 'text-primary';

  return (
    <div>
      <ul className='flex py-5'>
        <li className={listClasses}>
          <Link href='/'>Главная</Link>
        </li>
        {pathNames.length > 0 && '/'}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join('/')}`;
          let itemClasses =
            paths === href ? `${listClasses} ${activeClasses}` : listClasses;
          let itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;
          return (
            <Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && '/'}
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
};
