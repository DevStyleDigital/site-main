'use client'
import { Card } from '@/components/service/cardService'
import { ProcessArray } from '@/utils/process'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ProcessAnimation = () => {
  return (
    <motion.div className="w-full flex justify-center">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        className="w-[80%] h-full grid grid-cols-3 gap-[2rem] max-xl:w-[80%] max-lg:w-[90%] max-xl:grid-cols-2 max-md:grid-cols-1 max-md:w-[80%] max-sm:w-[90%]"
        style={{ perspective: 2000 }}
      >
        {ProcessArray.map((item) => {
          const variants = {
            offscreen: {
              y: 80,
              opacity: 0,
            },
            onscreen: {
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                bounce: 0.5,
                duration: 0.7 * item.id,
              },
            },
          }
          return (
            <motion.div variants={variants} key={item.id}>
              <Card.Root
                className="w-full h-fit min-h-[450px] max-md:min-h-[0] items-center max-sm:h-[350px] flex flex-col justify-center gap-[2rem] p-[1rem] max-md:p-[.8rem] rounded-3xl card-color-gradient-service border-[1px] border-[#424245]"
              >
                <Card.Image className="w-[8rem] h-[8rem] max-sm:w-[6rem]  max-sm:h-[6rem] rounded-full flex justify-center items-center bg-[#292930] shadow-md">
                  <Image
                    src={item.icon}
                    className="scale-[0.6]"
                    alt={item.label}
                    width={173}
                    height={138}
                  ></Image>
                </Card.Image>
                <div className="flex flex-col gap-[1rem] items-center">
                  <Card.Title className="text-[1.4rem] text-white max-sm:text-[1rem]">
                    {item.title}
                  </Card.Title>
                  <Card.Text className="text-white/70 text-[1rem] text-center max-lg:text-[.9rem] max-md:text-[1.1rem] max-sm:text-[.8rem]">
                    {item.label}
                  </Card.Text>
                </div>
                <span className='w-[4rem] h-[2px] bg-white'></span>
              </Card.Root>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}

export default ProcessAnimation
