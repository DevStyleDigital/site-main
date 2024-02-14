'use client';

import clsx from 'clsx';
import { useEffect, useState } from 'react';

const ToTop = () => {
  const [handleTop, setHandleTop] = useState(false);

  const handleScrollMove = () => {
    const scrollPosition = window.pageYOffset;
    if (scrollPosition >= 500) {
      setHandleTop(true);
    } else {
      setHandleTop(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScrollMove);
  }, []);

  function ScrollTo() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <button
        aria-label="button"
        type="button"
        className={clsx(
          'w-[3rem] h-[3rem] fixed bottom-[5rem] right-[1rem] lg:right-[5rem] lg:w-[4rem] lg:h-[4rem] bg-[#FFDC60] shadow-lg z-[88] rounded-md flex justify-center items-center opacity-0 transition-all',
          {
            '!opacity-100 animate-bounce': handleTop,
          },
        )}
        onClick={ScrollTo}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.14645 2.14645C7.34171 1.95118 7.65829 1.95118 7.85355 2.14645L11.8536 6.14645C12.0488 6.34171 12.0488 6.65829 11.8536 6.85355C11.6583 7.04882 11.3417 7.04882 11.1464 6.85355L8 3.70711L8 12.5C8 12.7761 7.77614 13 7.5 13C7.22386 13 7 12.7761 7 12.5L7 3.70711L3.85355 6.85355C3.65829 7.04882 3.34171 7.04882 3.14645 6.85355C2.95118 6.65829 2.95118 6.34171 3.14645 6.14645L7.14645 2.14645Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </>
  );
};

export default ToTop;
