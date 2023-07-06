'use client'
import { HeroText } from '@/components/hero'
import Image from 'next/image'
import Fundo from '@/assets/img/fundo.png'
import Triangulo from '@/assets/img/triangulo.png'
import { motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'

const HeaderAnimationAbout = () => {
  const [handleAnimationIMAGES, setHandleAnimationIMAGES] = useState(true)
  const cardRef = useRef<HTMLDivElement>(null)
  const [a, setA] = useState<any>()
  const [b, setB] = useState<any>()

  const handleScrollMove = () => {
    const scrollPosition = window.pageYOffset
    if (scrollPosition >= 500) {
      setHandleAnimationIMAGES(false)
    } else {
      setHandleAnimationIMAGES(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollMove)
  }, [])

  const dampen = 80

  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.current) return 0
    const rect = cardRef.current.getBoundingClientRect()
    const newRotateX = e.clientY - rect.top - rect.height / 2
    setA(-newRotateX / dampen)
    const newRotateY = e.clientX - rect.left - rect.width / 2
    setB(newRotateY / dampen)
  }

  const EventoAdd = useCallback(() => {
    window.addEventListener('mousemove', handleMouseMove)
  }, [])

  const EventoRemove = useCallback(() => {
    window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    if (handleAnimationIMAGES) {
      EventoAdd()
    } else {
      EventoRemove()
    }
  }, [handleAnimationIMAGES])

  const container = {
    hidden: { opacity: 1, y: 400 },
    visible: {
      y: -200, 
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <HeroText.Root className="header_about">
      <motion.div
        className="max-w-[1400px] w-full flex flex-col z-30 items-start max-lg:items-center max-lg:gap-[1rem]"
        variants={container}
        initial="hidden"
        animate="visible"
      >
      <HeroText.Img className='right-[50%]  w-[50rem] h-[50rem]  translate-x-[50%] top-[15%] max-lg:text-[3rem] max-md:w-[30rem] max-xl:w-[70%] max-[1100px]:w-full max-sm:w-screen max-xl:h-[70vh] max-md:translate-y-[20%] max-[920px]:translate-y-[10%]'>
        <div className="w-full h-full rounded-full relative">
            <Image
                src={Fundo}
                className="FundoImgCenter"
                alt="fundoimg"
                width={450}
                height={519}
              ></Image>
          <div className='w-full h-full flex justify-center items-center pb-[2rem] max-sm:translate-y-[-3rem] max-sm:items-center max-2xl:translate-y-[-3rem] max-[920px]:items-start max-[920px]:translate-y-[30%] max-md:translate-y-[20%]'>
            <HeroText.Title className='text-[7rem] max-2xl:text-[5rem]'>
              About <span className="text-[#5956E8]">Us </span>
            </HeroText.Title>
          </div>
        </div>
      </HeroText.Img>
      </motion.div>
      <motion.div
        className="w-[100vw] h-[90vh] absolute select-none"
        style={{ rotateX: a, rotateY: b }}
      >
        <div className="w-[15rem] h-[15rem] rounded-full sombra-1 absolute bottom-[8rem] left-[35%] z-2 max-md:top-[10rem] max-md:right-0"></div>
        <div className="w-[15rem] h-[15rem] rounded-full sombra-2 absolute bottom-[8rem] right-[20%] z-2 max-md:top-[10rem] max-md:left-0"></div>
        <div className="w-[5rem] h-[2rem] shadow-md absolute bottom-[13rem] rotate-45 left-[10rem] bg-[#bee1f9] z-2 max-md:left-[2rem] max-md:top-[15rem] max-lg:opacity-[60%]"></div>
        <div className="w-[2.5rem] h-[2.5rem] right-[20%] absolute  bottom-[50%] max-md:right-[2rem] max-md:top-[10rem] max-lg:opacity-[60%]">
        <Image
          src={Triangulo}
          className="triangulo"
          alt="triangulo"
          width={30}
          height={33}
        ></Image>
        </div>
      </motion.div>
    </HeroText.Root>
  )
}

export default HeaderAnimationAbout
