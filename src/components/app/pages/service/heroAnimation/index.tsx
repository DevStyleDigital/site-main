'use client'
import Fundo from '@/assets/img/fundo.png'
import Image from 'next/image'
import Foguete from '@/assets/img/foguete.png'
import Mira from '@/assets/img/mira.png'
import Triangulo from '@/assets/img/triangulo.png'
import Button from '@/components/button'
import { motion } from 'framer-motion'
import { use, useEffect, useState } from 'react'
import { removeAllListeners } from 'process'

const HeroStartAnimation = () => {
    const [newVariant , setNewVariant] = useState<{} | undefined>(undefined)
    const [newVariantFoguete, setNewVariantFoguete] = useState<{}| undefined>(undefined)
    
    useEffect(() => {
        console.log(window.innerWidth)
        if(window.innerWidth > 768){
            setNewVariant({
                offscreen: {
                    opacity: 0,
                    x: 200,
                    y:0
                },
                onscreen: {
                    opacity: 1,
                    x: 0,
                    y:0,
                    transition: {
                        type: 'spring',
                        bounce: 0.5,
                        duration: 0.7,
                    },
                },
            })
            setNewVariantFoguete({
                offscreen: {
                    opacity: 0,
                    x: 400,
                    y: 400,
                },
                onscreen: {
                    opacity: 1,
                    y: 0,
                    x: 0,
                    transition: {
                        type: 'spring',
                        bounce: 0.5,
                        duration: 1.5,
                    },
                },
            })
        }else{
            setNewVariant({
                offscreen: {
                    opacity: 0,
                    y: 200,
                    x:0,
                },
                onscreen: {
                    opacity: 1,
                    y: 0,
                    x:0,
                    transition: {
                        type: 'spring',
                        bounce: 0.5,
                        duration: 0.7,
                    },
                },
            })
            setNewVariantFoguete({
                offscreen: {
                    opacity: 0,
                    y: 400,
                    x: 0,
                },
                onscreen: {
                    opacity: 1,
                    y: 0,
                    x: 0,   
                    transition: {
                        type: 'spring',
                        bounce: 0.5,
                        duration: 1.5,
                    },
                },
            })
        }
    }, [])

    console.log(newVariant, newVariantFoguete)
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            style={{ perspective: 2000 }}
            className="w-[70%] h-fit min-h-[27rem] flex flex-col gap-[2rem] justify-center p-[4rem] rounded-3xl header_home relative overflow-hidden max-2xl:w-[90%] max-xl:w-[100%]">

            <div className='flex flex-col max-md:justify-start max-md:items-center gap-[2rem]'>
                <h1 className='max-w-[33rem] max-md:text-center max-md:max-w-[95%] max-sm:max-w-[100%] font-bold text-[2rem] leading-none max-sm:leading-tight max-[1600px]:max-w-[30rem] max-2xl:text-[2.5rem] max-xl:text-[2rem] max-xl:max-w-[40%] max-sm:text-[1.5rem]'>
                    Entre em contato e <span className="text-[#5956E8]">comece</span> <span className="text-[#5956E8]">crescendo </span>sua startup hoje mesmo!
                </h1>
                <div className='flex items-center gap-[1rem]'>
                    <Button href='/' fill>Saber mais</Button>
                    <Button href='/'>Começar agora</Button>
                </div>
            </div>
            <motion.div className='w-full max-md:h-[20rem]'>
                {newVariant && newVariantFoguete && (
                        <motion.div variants={newVariant} className="absolute -right-40 -top-5 w-[35rem] h-[30rem] max-md:w-[30rem] max-md:h-[30rem] rounded-full bg-white max-md:right-[50%] max-md:!translate-x-[50%] max-md:top-[initial] max-md:!bottom-[-150px]  ">
                            <motion.div variants={newVariant} className="w-full h-full relative">
                                <div className='w-full h-full sombra-hero absolute'></div>
                                <Image
                                    src={Fundo}
                                    className='w-[50%] h-[50%] absolute top-[50%] left-[50%] -translate-x-[70%] -translate-y-[50%]'
                                    alt="fundoimg"
                                    width={450}
                                    height={519}
                                ></Image>
                                <motion.div variants={newVariantFoguete} className='w-full h-full relative'>
                                    <Image
                                        src={Foguete}
                                        className='w-[85%] h-[85%] absolute z-50 -left-[8rem] bottom-[50%] translate-y-[45%] max-md:rotate-45 max-md:left-50% max-md:translate-x-[40%] max-md:translate-y-[20%]'
                                        alt="foguete"
                                        width={1662}
                                        height={1662}
                                    ></Image>
                                    <Image
                                        src={Mira}
                                        className='w-[15%] h-[20%] absolute z-50 left-[17rem] bottom-14 max-md:left-[24rem] max-md:bottom-52 max-md:-rotate-45'
                                        alt="mira"
                                        width={138}
                                        height={190}
                                    ></Image>
                                    <Image
                                        src={Triangulo}
                                        className="w-[1.6rem] h-[1.5rem] absolute z-50 left-[13rem] bottom-12 max-md:left-[5rem] max-md:bottom-80 max-md:-rotate-45"
                                        alt="triangulo"
                                        width={30}
                                        height={33}
                                    ></Image>
                                </motion.div>

                            </motion.div>
                        </motion.div>
                    )
                }
            </motion.div>
        </motion.div>
    )
}

export default HeroStartAnimation