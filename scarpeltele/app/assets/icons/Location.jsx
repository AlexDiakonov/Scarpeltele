import React from 'react';

const LocationIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 10.7727C20 15.0655 12 22 12 22C12 22 4 15.0655 4 10.7727C4 6.47997 7.58172 3 12 3C16.4183 3 20 6.47997 20 10.7727Z"
        stroke="#BFFF15"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="10.6665" r="3" stroke="#BFFF15" strokeWidth="1.5" />
    </svg>
  );
};

export default LocationIcon;
