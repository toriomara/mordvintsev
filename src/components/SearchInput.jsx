import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

export const SearchInput = () => {
  return (
    <div className='flex justify-center'>
      <div className='relative flex items-center rounded-md'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex pl-3'>
          <MagnifyingGlassIcon width={16} className='fill-gray-500 ' />
        </div>
        <input
          type='text'
          name='search'
          id='search'
          className='input-simple w-48 border-0 py-1.5 pl-7 pr-20 sm:text-sm sm:leading-6'
          placeholder='Поиск...'
        />
      </div>
    </div>
  );
};
