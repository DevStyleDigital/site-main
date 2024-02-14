'use client';
import { NavsItems } from '@/utils/navs';
import clsx from 'clsx';
import Button from '@/components/button';
import Link from 'next/link';
import { useSideBar } from '../sidebar';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Header = () => {
  const pathname = usePathname();
  const { setSidebarOpen } = useSideBar();
  const newPathname = pathname.split('/')[1];
  const [time, setTime] = useState<string | undefined>();

  useEffect(() => {
    const countDate = new Date('Feb 23, 2024 00:00:00').getTime();
    function newYear() {
      const now = new Date().getTime();
      const gap = countDate - now;
      if (gap <= 0) return setTime(undefined);

      const segundos = 1000;
      const minutos = segundos * 60;
      const hora = minutos * 60;
      const dia = hora * 24;

      const d = Math.floor(gap / dia);
      const h = Math.floor((gap % dia) / hora);
      const m = Math.floor((gap % hora) / minutos);
      const s = Math.floor((gap % minutos) / segundos);

      setTime(`${d} dias ${h}:${m}:${s < 10 ? `0${s}` : s}`);
    }

    const time = setInterval(function () {
      newYear();
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <>
      {time && (
        <div className="fixed top-0 left-0 w-full z-[9999]">
          <Link
            href="/"
            role="alert"
            className="w-full bg-yellow-400/20 backdrop-blur-lg animate-appearance-in border-yellow-400/20 border p-2 items-center justify-center text-center group inline-flex text-sm"
          >
            <span className="group-hover:underline">
              Super PROMOÇÃO!!! Vai ficar de fora?
            </span>{' '}
            <span className="w-3 ml-2">🤑</span>
            <span className="w-2 ml-1">💲</span>
            <span className="w-5">💲 </span>
            Acaba em {time}
          </Link>
        </div>
      )}
      <header className="w-full h-auto flex justify-center items-center px-[2rem] absolute top-0 bg-transparent z-50">
        <div className="flex justify-between max-w-[1400px] items-center w-full border-black-500 pt-[2rem] pb-[.7rem]">
          <h1 className="font-extrabold text-[1.5rem]">{'</> DevStyle'}</h1>
          <ul className="flex items-center gap-[2rem] max-[800px]:hidden max-lg:gap-[1.5rem]">
            {NavsItems.map((item) => {
              return (
                <li
                  key={item.id}
                  className={clsx('font-medium text-secondary_black-950', {
                    'border-b-[1px] border-black text-neutral-950':
                      item.link === `/${newPathname}`,
                  })}
                >
                  <Link href={item.link}>{item.label}</Link>
                </li>
              );
            })}
            <li>
              <Button
                href="https://wa.me/5515988045279?text=Ol%C3%A1%2C+vim+do+site+DevStyle."
                fill
              >
                Contratar
              </Button>
            </li>
          </ul>
          <button
            aria-label="open"
            onClick={() => setSidebarOpen((prev) => !prev)}
            className="w-[3rem] h-[3rem] justify-center items-center bg-white rounded-full shadow-md hidden max-[800px]:flex"
          >
            <HamburgerMenuIcon className="w-[50%] h-full text-secondary_black-950" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
