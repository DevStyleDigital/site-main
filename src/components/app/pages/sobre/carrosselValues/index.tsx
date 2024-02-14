'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { Navigation } from 'swiper';
import { ValuesArray } from '@/utils/values';
import { Card } from '@/components/service/cardService';
import Image from 'next/image';

const CarrosselValues = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full h-full"
    >
      <Swiper
        grabCursor={true}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper aboutSwiper"
        breakpoints={{
          1500: {
            slidesPerView: 3.5,
          },
          1024: {
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 1.5,
          },
          320: {
            slidesPerView: 1.25,
          },
        }}
      >
        {ValuesArray.map((values) => {
          const variants = {
            offscreen: {
              opacity: 0,
              x: 200,
            },
            onscreen: {
              x: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                duration: 1.5 * values.id,
              },
            },
          };
          return (
            <SwiperSlide key={values.id}>
              <motion.div variants={variants}>
                <Card.Root className="w-full h-fit min-h-[450px] max-md:min-h-[0] items-center max-sm:h-[350px] flex flex-col justify-center gap-[2rem] p-[1rem] max-md:p-[.8rem] rounded-3xl card-color-gradient-service border-[1px] border-[#424245]">
                  <Card.Image className="w-[8rem] h-[8rem] max-sm:w-[6rem]  max-sm:h-[6rem] rounded-full flex justify-center items-center bg-[#292930] shadow-md">
                    <Image
                      src={values.icon}
                      className="scale-[0.7]"
                      alt={values.label}
                      width={173}
                      height={138}
                    />
                  </Card.Image>
                  <div className="flex flex-col gap-[1rem] items-center">
                    <Card.Title className="text-[1.4rem] text-white max-sm:text-[1rem]">
                      {values.title}
                    </Card.Title>
                    <Card.Text className="text-white/70 text-[1rem] text-center max-lg:text-[.9rem] max-md:text-[1.1rem] max-sm:text-[.8rem]">
                      {values.label}
                    </Card.Text>
                  </div>
                  <span className="w-[4rem] h-[2px] bg-white" />
                  {/* <Card.Button className="w-full rounded-lg card-button p-[1rem] border-[1px] transition-color duration-500 border-[#6d6d6f] text-[#6d6d6f] flex items-center justify-center gap-[.7rem] hover:font-bold hover:text-black">
                                        Veja Mais
                                        <IconProx />
                                    </Card.Button> */}
                </Card.Root>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default CarrosselValues;
