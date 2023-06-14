import clsx from 'clsx'
import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  fill?: boolean
  light?: boolean
  href: string
}
const Button = ({ children, fill, light, href }: ButtonProps) => {
  return (
    <Link
      target='blank'
      href={href}
      className={clsx(
        'py-[.7rem] max-h-[3rem] max-lg:py-[.5rem] whitespace-nowrap px-[1.5rem] max-lg:px-[1rem] max-md:text-[.8rem] bg-transparent border-secondary_black-950 rounded-md border-[1px] font-semibold text-neutral-950  duration-500 transition-color hover:bg-[#F6F6F6] ',
        {
          'text-white !bg-secondary_black-950 hover:!bg-secondary_black-950/80':
            fill,
          '!text-secondary_black-950 !bg-white flex items-center gap-[.75rem] hover:!bg-white/80':
            light,
        },
      )}
    >
      {children}
    </Link>
  )
}

export default Button
