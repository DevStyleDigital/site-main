'use client'
import CheckBlack from "@/assets/svg/checkBlack"
import Image from "next/image"
import { ProcessVisualArray } from "@/utils/processVisual"
import clsx from "clsx"
import { motion } from 'framer-motion'

const AnimationRevenue = () => {
    const container = {
        offscreen: {
          opacity: 0,
        },
        onscreen: {
          opacity: 1,
          transition: {
            type: 'spring',
            duration: 1.2,
          },
        },
      }

    return (
        <motion.div 
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            style={{ perspective: 2000 }}
            className="w-[65%] bg-process rounded-2xl p-[3rem] max-sm:py-[2rem] max-sm:px-[1rem] h-fit items-center flex max-lg:gap-[1rem] max-lg:flex-col  max-xl:w-[95%] max-[1630px]:w-[85%]  ">
                <motion.div variants={container} className="flex flex-col gap-[1rem] max-lg:gap-[2rem] max-lg:text-center">
                    <h1 className="font-semibold text-[2rem] leading-tight max-xl:text-[1.8rem] max-sm:text-[1.5rem] max-w-[70%] max-xl:max-w-[80%] max-lg:max-w-[100%]">Nossa receita aprova de balas para um sistema elegante</h1>
                    <span className="w-[70%] max-lg:w-full h-[1px] bg-[#CFCFCF]"></span>
                    <span className="text-secondary_black-950/70 relative z-10 max-md:text-[.8rem] max-xl:text-[.9rem] max-w-[70%] max-xl:max-w-[80%] max-lg:max-w-[100%]">
                        Além da performance a elegância de um sistema tambem é muito importante afinal,
                        será sempre uma vitrine para a sua empresa sendo o primeiro contato do seu cliente.
                        Logo uma vitrine organizada e bem montada poderá trazer novos olhares para o seu negócio.
                    </span> 
                    <div className='w-full flex max-lg:justify-center'>
                        <div className="flex flex-col gap-[1rem]">
                            <span className='flex gap-[1rem] items-center transition-all cursor-pointer hover:scale-[1.1] hover:translate-x-[.5rem]'>
                                <CheckBlack />
                                <h1 className='font-semibold max-sm:text-[.8rem]'>Entender e atender as necessidades</h1>
                            </span>
                            <span className='flex gap-[1rem] items-center transition-all cursor-pointer hover:scale-[1.1] hover:translate-x-[.5rem]'>
                                <CheckBlack />
                                <h1 className='font-semibold max-sm:text-[.8rem]'>Elaborar uma Ui para a Ux necessaria</h1>
                            </span>
                            <span className='flex gap-[1rem] items-center transition-all cursor-pointer hover:scale-[1.1] hover:translate-x-[.5rem]'>
                                <CheckBlack />
                                <h1 className='font-semibold max-sm:text-[.8rem]'>Layout Clean e elegânte</h1>
                            </span>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="w-full h-[26rem] max-xl:h-[30rem] flex flex-col  max-lg:items-center max-sm:h-[30rem]">
                    {ProcessVisualArray.map(process => {
                        const variants = {
                            offscreen: {
                              y: -200,
                              opacity: 0,
                            },
                            onscreen: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                type: 'spring',
                                duration: .8 * process.id,
                              },
                            },
                          }
                        return (
                            <motion.div variants={variants} key={process.id} className="w-full max-lg:ml-auto flex max-lg:grid value-cols-process h-full items-center gap-[4rem] max-lg:gap-[1rem] max-sm:gap-0">
                                        <div className={clsx("w-full flex-col gap-[.5rem]  max-lg:items-end max-sm:items-start text-right max-sm:text-left invisible hidden max-lg:flex", {'max-lg:visible': process.id === 2})}>
                                            <h1 className="font-semibold text-[1.2rem] max-xl:text-[1rem] max-sm:text-[.8rem] max-[300px]:text-[.7rem]">{process.title}</h1>
                                            <span className="font-medium text-secondary_black-950/70 text-[.8rem] w-[80%] max-sm:text-[.6rem] max-[300px]:text-[.5rem]">{process.text}</span>
                                        </div>
                                        <div className={clsx(`:w-full h-full flex items-end justify-center relative`, {'!items-start': process.id === 3})}>
                                            <div className={clsx(`h-1/2 outline-dashed outline-1 outline-[#E38676]`, {'!h-full' : process.id === 2 })}></div>
                                            <div className="w-[5rem] h-[5rem] max-md:w-[5rem] max-md:h-[5rem] absolute top-[50%] translate-y-[-50%] bg-[#FFD1C8] flex justify-center items-center rounded-full">
                                                <div className="w-[80%] h-[80%] bg-white cursor-pointer rounded-full flex justify-center items-center transition-all hover:scale-[1.1]">
                                                    <Image src={process.img} className={clsx(`scale-[.5]`, {'!scale-[.8]': process.id === 2})} alt="logo1" width={141} height={194} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={clsx("w-full flex flex-col gap-[.5rem]  max-lg:items-start max-sm:items-end max-sm:text-right " , {'max-lg:invisible' : process.id === 2})}>
                                            <h1 className="font-semibold text-[1.2rem] max-xl:text-[1rem] max-sm:text-[.8rem] max-[300px]:text-[.7rem]">{process.title}</h1>
                                            <span className="font-medium text-secondary_black-950/70 text-[.8rem] w-[80%] max-sm:text-[.6rem] max-[300px]:text-[.5rem]">{process.text}</span>
                                        </div> 
                            </motion.div>
                        )
                    })}

                </motion.div>
            </motion.div>
    )
}

export default AnimationRevenue