'use client'
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'
import clsx from 'clsx'
import { Cross1Icon } from '@radix-ui/react-icons'
import { NavsItems } from '@/utils/navs'
import Button from '@/components/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
interface SideBarProps {
  sidebarOpen: boolean
  setSidebarOpen: Dispatch<SetStateAction<boolean>>
}

const SidebarContext = createContext<SideBarProps>({} as SideBarProps)
export const useSideBar = () => useContext(SidebarContext)

export const SideBarRoot = ({ children }: { children: any }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    document.addEventListener(
      'keydown',
      (ev) => ev.key === 'Escape' && setSidebarOpen(false),
    )
  })

  return (
    <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const SideBarFundo = () => {
  const pathname = usePathname()
  const { sidebarOpen, setSidebarOpen } = useSideBar()
  return (
    <section
      id="sidebar-menu"
      className={clsx(
        'w-full h-screen fixed z-[99] pointer-events-none opacity-0 transition-all',
        { 'opacity-100 pointer-events-auto': sidebarOpen },
      )}
    >
      <div
        className="w-full h-screen absolute bg-black/70"
        onClick={() => setSidebarOpen(false)}
      ></div>
      <div className="relative z-40 float-right w-[60%] h-full bg-black/95">
        <div className="absolute w-full flex flex-col gap-12 p-[2rem] top-0 h-full z-50">
          <div className="w-full flex justify-end">
            <button
              className="w-[3rem] h-[3rem] bg-white rounded-full shadow-md flex justify-center items-center"
              onClick={() => setSidebarOpen(false)}
            >
              <Cross1Icon className="w-[50%] h-full text-secondary_black-950" />
            </button>
          </div>
          <ul className="flex-col items-center gap-[2rem] hidden max-md:flex">
            {NavsItems.map((item) => {
              return (
                <li
                  key={item.id}
                  className={clsx('font-medium text-white', {
                    'border-b-[1px] border-white text-white': item.link === pathname,
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
        </div>
      </div>
    </section>
  )
}

export const SidebarMain = {
  Root: SideBarRoot,
  Fundo: SideBarFundo,
}
