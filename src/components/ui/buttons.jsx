import React from 'react';

export const Button = (props) => {
  return (
    <button class='px-4 py-1 text-base md:px-4 md:py-1 md:text-lg lg:px-5 lg:py-2 transition-colors duration-150 rounded-md lg:rounded-lg outline-none focus:ring bg-primary-500 border border-transparent text-white hover:text-primary-500 hover:bg-transparent hover:border hover:border-primary-500'>
      {props.children}
    </button>
  );
};

export const ButtonOutlined = (props) => {
  return (
    <button class='px-4 py-1 text-base md:px-4 md:py-1 md:text-lg lg:px-5 lg:py-2 transition-colors duration-150 rounded-md lg:rounded-lg  outline-none focus:ring text-primary-500 border border-primary-500 hover:text-white hover:bg-primary-500'>
      {props.children}
    </button>
  );
};
