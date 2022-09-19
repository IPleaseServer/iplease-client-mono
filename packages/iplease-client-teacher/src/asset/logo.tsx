import React from 'react';

interface LogoProps {
  size: 'big' | 'small';
}

function Logo(p: LogoProps): JSX.Element {
  const { size } = p;
  const pixel = size === 'big' ? 80 : 50;
  return (
    <svg
      width={pixel}
      height={pixel}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.83 76.4808L16.7792 63.8858V13.33L50.045 3.5625V18.9583L63.1792 15.4267V44.9642L43.7 56.5958V27.245L36.83 29.0925V76.4808ZM23.1242 60.37L30.485 64.995V24.22L43.7 20.665V12.0467L23.1242 18.0883V60.37ZM50.045 25.5383V45.4092L56.8342 41.355V23.715L50.045 25.5383Z"
        fill="#F21361"
      />
    </svg>
  );
}

export default Logo;
