import React from 'react';

const DropArrow = ({ className }) => {
  return (
    <svg
      className={className}
      width='15'
      height='8'
      viewBox='0 0 15 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13.5 7.00018L7.5 1.00018L1.5 7.00018'
        stroke='white'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default DropArrow;
