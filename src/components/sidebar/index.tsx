'use client';
import clsx from 'clsx';
import { useEffect, useMemo, useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { LinksSideBar } from '@/utils/linksSidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useRouter } from 'next/navigation';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/auth';

const SideBarRoot = ({ children, ...props }: { children: any; className?: string }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    document.addEventListener(
      'keydown',
      (ev) => ev.key === 'Escape' && setSidebarOpen(false),
    );
  }, []);

  return (
    <>
      <div
        {...props}
        id="sidebar"
        className={clsx(
          'lg:sticky fixed h-[100dvh] bg-white left-0 top-0 z-40 transition-all  border border-[#D2D5DA] min-w-[15rem] max-w-[15rem] w-full p-8 flex flex-col gap-2 lg:translate-x-0 -translate-x-full',
          { 'translate-x-0': sidebarOpen },
          props.className,
        )}
      >
        <button
          className={clsx(
            'lg:hidden absolute right-0 top-0 flex justify-center m-4 w-10 h-10 p-4 rounded-full bg-bg-gray-default shadow-md',
            {
              'translate-x-[calc(100%+1rem+1rem)] bg-bg-gray-default':
                handleSidebarToggle,
            },
          )}
          aria-label="Toggle Sidebar"
          aria-labelledby="sidebar"
          title="Toggle Sidebar"
          onClick={handleSidebarToggle}
        >
          {sidebarOpen ? (
            <ArrowBackIosIcon className="!translate-x-[4px] !-translate-y-[7px]" />
          ) : (
            <ArrowBackIosIcon className="rotate-180 !-translate-x-[4px] !-translate-y-[7px]" />
          )}
        </button>
        {children}
      </div>
      {sidebarOpen && (
        <div
          aria-hidden
          className="fixed w-full h-screen z-10"
          onClick={handleSidebarToggle}
        />
      )}
    </>
  );
};

const SideBarUser = ({ ...props }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  const { signOut } = useAuth();

  return (
    <Popover>
      <PopoverTrigger className="flex items-center gap-2 cursor-pointer">
        <Avatar>
          <AvatarImage src="/userteste.jpeg" />
          <AvatarFallback>DV</AvatarFallback>
        </Avatar>
        <span className="text-sm font-semibold">{props.userName}</span>
      </PopoverTrigger>
      <PopoverContent className="w-fit rounded-sm bg-white" align="start">
        <button
          type="button"
          className="flex items-center gap-2 text-sm"
          onClick={signOut}
        >
          <LogoutOutlinedIcon className="w-5 h-5" /> Logout
        </button>
      </PopoverContent>
    </Popover>
  );
};

const SidebarLogo = ({ ...props }) => <div {...props} className="text-2xl font-medium" />;

const SidebarNavs = () => {
  const [openSubLinks, setOpenSubLinks] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <ul className="flex flex-col gap-1">
        <span className="text-base font-normal text-black/40">Dashboards</span>
        {LinksSideBar.map((links) => {
          if (links.type == 1) {
            return (
              <li key={links.id}>
                <Link
                  className={clsx(
                    'w-full flex text-sm py-2 gap-3 items-center px-4 relative font-medium transition-all',
                    {
                      'bg-black/10 rounded-sm font-semibold':
                        pathname == links.href || pathname == links?.subLink,
                    },
                  )}
                  href={links.href}
                >
                  <span
                    className={clsx(
                      'w-0 h-5 bg-red-700 rounded-lg absolute left-0 transition-all top-0 translate-y-[50%]',
                      { '!w-1': pathname == links.href || pathname == links?.subLink },
                    )}
                  />
                  {links.icon}
                  {links.label}
                </Link>
              </li>
            );
          }
        })}
      </ul>
    </>
  );
};

const SidebarFooters = ({ children }: { children: any }) => (
  <ul className="w-full flex justify-center gap-4 pb-4">{children}</ul>
);

export const Sidebar = {
  Root: SideBarRoot,
  User: SideBarUser,
  Logo: SidebarLogo,
  Navs: SidebarNavs,
  Footer: SidebarFooters,
};
