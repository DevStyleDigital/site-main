'use client';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import clsx from 'clsx';
import { Cross1Icon } from '@radix-ui/react-icons';
import { NavsItems } from '@/utils/navs';
import { ButtonFree } from '@/components/button';
import { usePathname } from 'next/navigation';
interface SideBarProps {
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const SidebarContext = createContext<SideBarProps>({} as SideBarProps);
export const useSideBar = () => useContext(SidebarContext);

export const SideBarRoot = ({ children }: { children: any }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    document.addEventListener(
      'keydown',
      (ev) => ev.key === 'Escape' && setSidebarOpen(false),
    );
  });

  return (
    <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const SideBarFundo = () => {
  const pathname = usePathname();
  const { sidebarOpen, setSidebarOpen } = useSideBar();
  return (
    <>
      <div
        className={clsx(
          'w-full z-[98] top-0 opacity-0 pointer-events-none left-0 transition-all h-screen fixed bg-black/70',
          { 'opacity-100 pointer-events-auto': sidebarOpen },
        )}
        onClick={() => setSidebarOpen(false)}
      />
      <aside
        id="sidebar-menu"
        className={clsx('w-full h-screen fixed z-[99] translate-x-full transition-all', {
          '-translate-x-0 pointer-events-auto': sidebarOpen,
        })}
      >
        <div className="relative z-40 float-right w-[60%] h-full bg-black/50 backdrop-blur-lg border-l-white border-l">
          <div className="absolute w-full flex flex-col gap-12 p-[2rem] top-0 h-full z-50">
            <div className="w-full flex justify-end">
              <button
                aria-label="open sidebar"
                className="w-[3rem] h-[3rem] bg-white rounded-full shadow-md flex justify-center items-center"
                onClick={() => setSidebarOpen(false)}
              >
                <Cross1Icon className="w-[50%] h-full text-secondary_black-950" />
              </button>
            </div>
            <ul className="flex-col items-center gap-[2rem] hidden max-[800px]:flex">
              {NavsItems.map((item) => {
                return (
                  <li
                    key={item.id}
                    className={clsx('font-medium text-white', {
                      'border-b-[1px] border-white text-white': item.link === pathname,
                    })}
                  >
                    <a href={item.link}>{item.label}</a>
                  </li>
                );
              })}
              <li>{sidebarOpen && <ButtonFree invert />}</li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export const SidebarMain = {
  Root: SideBarRoot,
  Fundo: SideBarFundo,
};
