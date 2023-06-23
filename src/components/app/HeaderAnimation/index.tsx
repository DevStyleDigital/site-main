'use client'
import Button from '@/components/button'
import { HeroText } from '@/components/hero'
import Image from 'next/image'
import Pc from '@/assets/img/pczinho.png'
import Microfone from '@/assets/img/microfone.png'
import Selo from '@/assets/img/selo.png'
import Mira from '@/assets/img/mira.png'
import Fundo from '@/assets/img/fundo.png'
import Triangulo from '@/assets/img/triangulo.png'
import { motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'

const HeaderAnimation = () => {
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
    <HeroText.Root className="header_home">
      <HeroText.Img  className='w-[45%] h-full top-[-50%] right-[-50%]  max-lg:opacity-[15%] translate-x-[-85%] translate-y-[40%] max-2xl:w-[70%] max-[1700px]:w-[50%] max-2xl:translate-x-[-40%] max-xl:w-[80%] max-xl:translate-x-[-30%] max-2xl:h-screen'>
        <div className="w-full h-full rounded-full relative">
          <Image
            src={Fundo}
            className="FundoImg"
            alt="fundoimg"
            width={450}
            height={519}
          ></Image>
          <motion.div
            className="w-full h-full relative preserve"
            style={{ rotateX: a, rotateY: b }}
          >
            <motion.div
              className="iconPc max-xl:w-[400px]"
              ref={cardRef}
              initial={{ scale: 0 }}
              animate={{ rotateY: 180, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 60,
                damping: 5,
              }}
            >
              <Image src={Pc} alt="PC" width={695} height={594}></Image>
            </motion.div>
            <motion.div
              className="microfone max-2xl:w-[150px]"
              ref={cardRef}
              initial={{ scale: 0 }}
              animate={{ rotateY: 180, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 60,
                damping: 5,
              }}
            >
              <Image
                src={Microfone}
                alt="Microfone"
                width={211}
                height={187}
              ></Image>
            </motion.div>
            <motion.div
              className="selo max-2xl:w-[80px]"
              ref={cardRef}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: 'spring',
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            >
              <Image src={Selo} alt="Selo" width={155} height={155}></Image>
            </motion.div>
            <motion.div
              className="mira max-2xl:w-[80px] max-2xl:mb-[4rem]"
              ref={cardRef}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: 'spring',
                  damping: 5,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            >
              <Image src={Mira} alt="Mira" width={138} height={190}></Image>
            </motion.div>
            <Image
              src={Triangulo}
              className="triangulo"
              alt="triangulo"
              width={30}
              height={33}
            ></Image>
          </motion.div>
        </div>
      </HeroText.Img>
      <motion.div
        className="max-w-[1400px] w-full flex flex-col items-start max-lg:items-center max-lg:gap-[1rem] "
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <HeroText.Rota>
          <span className="font-extrabold text-[1rem] tracking-widest text-[#FEC90C]">
            //
          </span>{' '}
          INÍCIO
        </HeroText.Rota>
        <HeroText.Title className='max-2xl:max-w-[40rem] max-2xl:text-[2.5rem] max-xl:text-[2rem] max-lg:text-[3rem] max-sm:text-[1.5rem]'>
          Construindo marcas,
          <br /> uma história de <span className="text-[#5956E8]">sucesso </span>
          por vez.
        </HeroText.Title>
        <HeroText.SubTitle>
          Crie uma marca que ressoe: podemos ajudá-lo a definir e comunicar sua
          mensagem exclusiva.
        </HeroText.SubTitle>
        <HeroText.Buttons>
          <Button fill href="https://wa.me/5515988045279?text=Ol%C3%A1%2C+vim+do+site+DevStyle.">Nossos serviços</Button>
          <Button href="https://wa.me/5515988045279?text=Ol%C3%A1%2C+vim+do+site+DevStyle.">Get Started</Button>
        </HeroText.Buttons>
      </motion.div>
      <motion.div
        className="w-[100vw] h-[90vh] absolute select-none"
        style={{ rotateX: a, rotateY: b }}
      >
        <div className="w-[4rem] h-[4rem] left-[45%] rounded-full shadow-md absolute top-[13rem] bg-[#f8c6d0] z-2 max-lg:opacity-[30%]"></div>
        <div className="w-[3rem] h-[3rem] rounded-full shadow-md absolute bottom-[13rem] left-[5rem] bg-[#bee1f9] z-2 max-lg:opacity-[30%]"></div>
        <div className="w-[2.5rem] h-[2.5rem] rounded-full left-[40%] shadow-md absolute bottom-[8rem] bg-transparent border-[2px] border-[#F8BDBD] z-2 max-lg:opacity-[30%]"></div>
      </motion.div>
    </HeroText.Root>
  )
}

export default HeaderAnimation
