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

export const TitleHero = ({ children }: { children: ReactNode }) => {
  return (
    <motion.h1
      className="font-bold text-[3.5rem] leading-tight z-10 relative max-2xl:max-w-[40rem] max-2xl:text-[2.5rem] max-xl:text-[2rem] max-xl:max-w-[25rem] max-lg:max-w-[30rem]  max-lg:text-[3rem] max-sm:text-[1.5rem]"
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

export const Image = ({ children }: { children: ReactNode }) => {
  return (
    <div className="absolute w-[45%] h-full shadow-md rounded-full bg-white top-[-50%] right-[-50%] translate-x-[-85%] translate-y-[40%] max-2xl:w-[70%] max-2xl:translate-x-[-40%] max-xl:w-[80%] max-xl:translate-x-[-30%] max-lg:opacity-[15%]">
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
