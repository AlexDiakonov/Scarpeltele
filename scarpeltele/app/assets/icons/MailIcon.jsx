import React from 'react';

const MailIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="18"
        height="14"
        rx="2"
        stroke="#BFFF15"
        strokeWidth="1.5"
      />
      <path
        d="M1.5 1.5L8.01513 7.24865C9.1492 8.2493 10.8508 8.2493 11.9849 7.24865L18.5 1.5"
        stroke="#BFFF15"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MailIcon;
