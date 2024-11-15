'use client';
import IconProx from '@/assets/svg/iconProx';
import { Card } from '@/components/service/cardService';
import { ServicesUtils } from '@/utils/services';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ServiceAnimation = () => {
  return (
    <motion.div className="w-full flex justify-center">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        className="w-[80%] h-full grid grid-cols-3 gap-[2rem] max-xl:w-[80%] max-lg:w-[90%] max-xl:grid-cols-2 max-md:grid-cols-1 max-md:w-[80%] max-sm:w-[90%]"
        style={{ perspective: 2000 }}
      >
        {ServicesUtils.map((item) => {
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
          };
          return (
            <motion.div variants={variants} key={item.id}>
              <Card.Root
                key={item.id}
                className="w-full h-fit min-h-[500px] max-sm:min-h-[400px] flex flex-col justify-between gap-[2rem] p-[2rem] rounded-3xl card-color-gradient-service border-[1px] border-[#424245]"
              >
                <Card.Image className="w-[8rem] h-[8rem] max-sm:w-[6rem]  max-sm:h-[6rem] rounded-full flex justify-center items-center bg-[#292930] shadow-md">
                  <Image
                    src={item.image}
                    className={`iconService-${item.id}`}
                    alt={item.label}
                    width={173}
                    height={138}
                  />
                </Card.Image>
                <div className="flex flex-col gap-[1rem]">
                  <Card.Title className="text-[1.4rem] text-white max-sm:text-[1rem]">
                    {item.label}
                  </Card.Title>
                  <Card.Text className="text-white/70 text-[1rem] max-lg:text-[.9rem] max-md:text-[1.1rem] max-sm:text-[.8rem] elipses max-h-[6.5rem]">
                    {item.text}
                  </Card.Text>
                </div>
                <Card.Button
                  href="https://wa.me/5515988045279?text=Ol%C3%A1%2C+vim+do+site+Nesxp."
                  className="w-full rounded-lg card-button p-[1rem] border-[1px] transition-color duration-500 border-[#6d6d6f] text-[#6d6d6f] flex items-center justify-center gap-[.7rem] hover:font-bold hover:text-black"
                >
                  Veja Mais
                  <IconProx />
                </Card.Button>
              </Card.Root>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default ServiceAnimation;
