'use client';
import { WitnessArray } from '@/utils/witness';
import { Swiper, SwiperSlide } from 'swiper/react';
import CardWitness from '../Card-witness';
import { motion } from 'framer-motion';
import { Navigation } from 'swiper';
const CarouselWitness = () => {
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
        className="mySwiper"
        breakpoints={{
          1300: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1.5,
          },
          320: {
            slidesPerView: 1,
          },
        }}
      >
        {WitnessArray.map((witness) => {
          const variants = {
            offscreen: {
              opacity: 0,
            },
            onscreen: {
              opacity: 1,
              transition: {
                type: 'spring',
                duration: 1.5 * witness.id,
              },
            },
          };
          return (
            <SwiperSlide key={witness.id}>
              <CardWitness
                variants={variants}
                cargo={witness.authorcareer}
                commented={witness.commented}
                name={witness.authorName}
                companyName={witness.companyName}
                imgCompany={witness.companyImage}
                imgAuthor={witness.autorImage}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default CarouselWitness;
