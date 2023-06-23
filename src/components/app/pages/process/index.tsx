'use client'
import { HeroText } from '@/components/hero'
import Image from 'next/image'
import Process from '@/assets/img/Image.png'
import { motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import Button from '@/components/button'

const HeaderAnimationProcess = () => {
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
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <HeroText.Root className="header_process">
      <HeroText.Img  className='w-[53%] h-full top-[-53%] max-xl:top-[-50%] max-sm:top-[-45%] !shadow-none max-lg:opacity-[20%]  !rounded-none right-[-50%]  translate-x-[-85%] translate-y-[40%] max-[1700px]:w-[50%] max-xl:w-[80%] max-xl:translate-x-[-30%]'>
        <div className="w-full h-full rounded-full relative z-50">
          <motion.div
            className="w-full h-full relative preserve z-40"
            style={{ rotateX: a, rotateY: b }}
          >
           <motion.div
              className="iconProcess max-xl:w-[500px] max-sm:w-[300px] z-40"
              ref={cardRef}
              initial={{ scale: 0 }}
              animate={{ rotateY: 180, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 40,
                damping: 5,
              }}
            >
              <Image src={Process} alt="PC" width={2525} height={2278}></Image>
            </motion.div>
           </motion.div>
        </div>
        <div className="w-[20rem] h-[20rem] rounded-full sombra-6 absolute z-0 bottom-[1rem] left-[0] max-md:top-[10rem] max-md:right-0"></div>
        <div className="w-[20rem] h-[20rem] rounded-full sombra-7 absolute z-0 bottom-[1rem] right-[30%] max-md:bottom-[0rem] max-md:left-0"></div>
      </HeroText.Img>
      <motion.div
        className="max-w-[1400px] w-full flex flex-col items-start max-lg:items-center max-lg:gap-[1rem] "
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <HeroText.Title className='max-2xl:max-w-[40rem] max-2xl:text-[2.5rem] max-xl:text-[2rem] max-lg:text-[3rem] max-sm:text-[1.5rem]'>
              DevStyle Web <br /> & Mobile
        </HeroText.Title>
        <HeroText.SubTitle>
          Seja desenvolvimento web ou mobile nós encontramos e desenvolvemos a solução para o seu problema!
          De maneira performatica atualizada e muito elegante você tera suas soluções unicas e costumizadas. 
        </HeroText.SubTitle>
        <HeroText.Buttons>
          <Button fill href="https://wa.me/5515988045279?text=Ol%C3%A1%2C+vim+do+site+DevStyle.">Nossos serviços</Button>
          <Button href="https://wa.me/5515988045279?text=Ol%C3%A1%2C+vim+do+site+DevStyle.">Get Started</Button>
        </HeroText.Buttons>
      </motion.div>
    </HeroText.Root>
  )
}

export default HeaderAnimationProcess
