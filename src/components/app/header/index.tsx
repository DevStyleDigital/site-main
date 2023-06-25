'use client'
import { NavsItems } from '@/utils/navs'
import clsx from 'clsx'
import Button from '@/components/button'
import Link from 'next/link'
import { useSideBar } from '../sidebar'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  const { setSidebarOpen } = useSideBar()
  const newPathname = pathname.split('/')[1]
  return (
    <header className="w-full h-auto flex justify-center items-center px-[2rem] absolute top-0 bg-transparent z-50">
      <div className="flex justify-between max-w-[1400px] items-center w-full border-black-500 pt-[2rem] pb-[.7rem]">
        <h1 className="font-extrabold text-[1.5rem]">{`</> DevStyle`}</h1>
        <ul className="flex items-center gap-[2rem] max-md:hidden max-lg:gap-[1.5rem]">
          {NavsItems.map((item) => {
            return (
              <li
                key={item.id}
                className={clsx('font-medium text-secondary_black-950', {
                  'border-b-[1px] border-black text-neutral-950': item.link === `/${newPathname}`,
                })}
              >
                <Link href={item.link}>{item.label}</Link>
              </li>
            )
          })}
          <li>
            <Button href="https://wa.me/5515988045279?text=Ol%C3%A1%2C+vim+do+site+DevStyle." fill>Get Started</Button>
          </li>
        </ul>
        <button
          onClick={() => setSidebarOpen((prev) => !prev)}
          className="w-[3rem] h-[3rem] justify-center items-center bg-white rounded-full shadow-md hidden max-md:flex"
        >
          <HamburgerMenuIcon className="w-[50%] h-full text-secondary_black-950" />
        </button>
      </div>
    </header>
  )
}

export default Header
