import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useState, useEffect, useCallback } from 'react';
import { ModalSearch } from './ModalSearch';

export const SearchInput = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleChange = useCallback(() => {
    setIsOpen(!isOpen);
  });

  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === 'Escape' || !evt.target.closest('#modal')) {
        handleChange();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', closeByEscape);
      document.addEventListener('mouseup', closeByEscape);

      return () => {
        document.removeEventListener('keydown', closeByEscape);
        document.removeEventListener('mouseup', closeByEscape);
      };
    }
  }, [handleChange, isOpen]);

  return (
    <>
      <div className='justify-center hidden lg:flex'>
        <div className='relative flex items-center'>
          <div className='pointer-events-none absolute inset-y-0 left-0 flex pl-3'>
            <MagnifyingGlassIcon width={16} className='fill-gray-500' />
          </div>
          <input
            type='text'
            name='search'
            id='search'
            className='input-simple w-48 h-8 md:h-10 border-0 py-1.5 pl-7 pr-20 sm:text-sm sm:leading-6 cursor-pointer'
            placeholder='Поиск   Ctrl Ksadasd'
            onClick={handleChange}
          />
        </div>
      </div>
      {isOpen && <ModalSearch isOpen={isOpen} onClose={handleChange} />}
    </>
  );
};
