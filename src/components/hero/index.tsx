'use client'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const Hero = ({
  children,
  className,
}: {
  children: ReactNode
  className: string
}) => {
  return (
    <div
      className={`${className} w-full h-fit min-h-[85vh] max-lg:pt-[6rem] pb-[3rem] flex flex-col gap-[.7rem] items-center justify-center px-[4rem] relative overflow-hidden max-lg:text-center `}
    >
      {children}
    </div>
  )
}

export const TitleHero = ({ children, ...props }: { children: ReactNode, className?: string }) => {
  return (
    <motion.h1
      className={`font-bold text-[3.5rem] leading-tight z-10 relative max-xl:max-w-[25rem] max-lg:max-w-[30rem] ${props.className}`}
      variants={item}
    >
      {children}
    </motion.h1>
  )
}

export const RotaHero = ({ children }: { children: ReactNode }) => {
  return (
    <motion.span
      variants={item}
      className="font-bold text-[.8rem] max-lg:text-[1rem] max-sm:text-[.8rem]"
    >
      {children}
    </motion.span>
  )
}

export const SubHero = ({ children }: { children: ReactNode }) => {
  return (
    <motion.span
      variants={item}
      className="font-normal z-10 text-[1.1rem] max-w-[38rem] tracking-wider mb-[1.5rem] text-neutral-500 max-xl:text-[.8rem] max-xl:max-w-[25rem] max-lg:max-w-[30rem] max-lg:text-[1rem] max-lg:text-neutral-700 max-sm:text-[.8rem]"
    >
      {children}
    </motion.span>
  )
}

export const Image = ({ children, ...props }: { children: ReactNode, className?: string }) => {
  return (
    <div className={`absolute shadow-md rounded-full bg-white  ${props.className}`}>
      {children}
    </div>
  )
}

export const Button = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div variants={item} className="flex gap-[1rem] relative z-50">
      {children}
    </motion.div>
  )
}

export const HeroText = {
  Root: Hero,
  Title: TitleHero,
  Rota: RotaHero,
  SubTitle: SubHero,
  Img: Image,
  Buttons: Button,
}
