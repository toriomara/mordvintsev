import { useState, useEffect } from 'react';
import { IoMoonSharp, IoSunnySharp } from 'react-icons/io5';

export const ModeToggle = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    function toggleModeByKeys(evt) {
      if (evt.shiftKey && evt.keyCode === 68) {
        handleModeToggle();
      }
    }

    document.addEventListener('keydown', toggleModeByKeys);

    return () => {
      document.removeEventListener('keydown', toggleModeByKeys);
    };
  }, [theme]);

  const handleModeToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div>
      <i onClick={handleModeToggle} className='hover:cursor-pointer'>
        {theme === 'dark' ? (
          <IoSunnySharp />
        ) : (
          <IoMoonSharp width={24} className='fill-neutral-700' />
        )}
      </i>
    </div>
  );
};
