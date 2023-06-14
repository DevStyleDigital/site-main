'use client'
import { motion } from 'framer-motion'
import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const ImagesAnimate = ({
  ...props
}: {
  src: any
  alt: string
  className: string
  width: number
  height: number
  min: number
  max: number
}) => {
  const [handleAnimationIMAGES, setHandleAnimationIMAGES] = useState(true)
  const cardRef = useRef<HTMLImageElement | null>(null)
  const [isMobile , setIsMobile] = useState(false)
  const [a, setA] = useState<any>()
  const [b, setB] = useState<any>()
  const [c, setC] = useState<any>()

  useEffect(() => {
      var largura = window.screen.width;
      if(largura < 600){
        setIsMobile(true)
      }
  },[])

  const handleScrollMove = () => {
    const scrollPosition = window.pageYOffset
    if (scrollPosition >= props.min && scrollPosition < props.max) {
      setHandleAnimationIMAGES(true)
    } else {
      setHandleAnimationIMAGES(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollMove)
  }, [])

  const dampen = 60  

  const handleMobileMove = (e:any ) => {
    // setA(e?.alpha || 0)
    setB(e?.beta / 2  || 0)
    setC(e?.gamma / 3 || 0)
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.current) return 0
    const rect = cardRef.current.getBoundingClientRect()
    const newRotateX = e.clientY - rect.top - rect.height / 2
    setA(-newRotateX / dampen)
    const newRotateY = e.clientX - rect.left - rect.width / 2
    setB(newRotateY / dampen)
  }

  const EventoAddMobile = useCallback(() => {
    window.addEventListener('deviceorientation', handleMobileMove)
  }, [])

  const EventoRemoveMobile = useCallback(() => {
    window.removeEventListener('deviceorientation', handleMobileMove)
  }, [])

  const EventoAdd = useCallback(() => {
    window.addEventListener('mousemove', handleMouseMove)
  }, [])

  const EventoRemove = useCallback(() => {
    window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  
  useEffect(() => {
    if(isMobile){
      EventoAddMobile()
    }
    else {
      EventoRemoveMobile()
    }
  }, [isMobile])

  useEffect(() => {
    if (handleAnimationIMAGES) {
      EventoAdd()
    } else {
      EventoRemove()
    }
  }, [handleAnimationIMAGES])

  const variants = {
    offscreen: {
      scale: 0,
    },
    onscreen: {
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 30,
        damping: 7,
      },
    },
  }

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full relative z-10"
      style={{ perspective: 2000 }}
    >
      <motion.div
        variants={variants}
        className="w-full max-lg:flex max-lg:justify-center"
        style={{ rotateX: a, rotateY: b, rotateZ: c}}
      >
        <Image
          ref={cardRef}
          src={props.src}
          alt={props.alt}
          className={props.className}
          width={props.width}
          height={props.height}
        />
      </motion.div>
    </motion.div>
  )
}

export default ImagesAnimate
