'use client';

import { useEffect } from 'react';
import { IoClose } from 'react-icons/io5';

export const ModalSearch = (props) => {
  const { onClose, isOpen } = props;

  // useEffect(() => {
  //   function closeByEscape(evt) {
  //     if (
  //       evt.key === 'Escape' ||
  //       evt.target.classList.contains(
  //         'p-4 border border-custom bg-background rounded-lg modal'
  //       )
  //     ) {
  //       onClose();
  //     }
  //   }

  //   if (isOpen) {
  //     document.addEventListener('keydown', closeByEscape);
  //     document.addEventListener('mouseup', closeByEscape);

  //     return () => {
  //       document.removeEventListener('keydown', closeByEscape);
  //       document.removeEventListener('mouseup', closeByEscape);
  //     };
  //   }
  // }, [onClose, isOpen]);

  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 flex flex-col justify-center items-center bg-neutral-800 bg-opacity-80 z-10 backdrop-blur-sm'>
          <div
            className='p-4 border border-custom bg-background rounded-lg'
            id='modal'
          >
            <div className='flex'>
              <input
                className='bg-transparent focus:none outline-none'
                type='text'
                placeholder='Search input  Ctrl K'
              />
              <button className='items-end cursor-pointer' onClick={onClose}>
                <IoClose size={24} />
              </button>
            </div>
            <div>
              <button>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
