'use client';

import Follows from '@/assets/svg/follow';
import { FollowsArray } from '@/utils/follows';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const CardSocial = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full flex gap-[2rem] justify-center max-md:grid max-md:grid-cols-2 max-sm:grid-cols-1"
    >
      {FollowsArray.map((social) => {
        const variants = {
          offscreen: {
            opacity: 0,
          },
          onscreen: {
            opacity: 1,
            transition: {
              type: 'spring',
              bounce: 0.2,
              duration: 0.8 * social.id,
            },
          },
        };
        return (
          <motion.div
            variants={variants}
            key={social.id}
            className={clsx(
              'w-[100%] h-fit flex bg-white flex-col gap-[.6rem] p-[2rem] rounded-lg relative shadow-md',
            )}
          >
            <div className="absolute w-full h-[5rem] top-0 left-0 rounded-t-lg">
              <Image
                className="w-full h-full object-cover rounded-t-lg"
                src={social.img}
                alt="LogoDev"
                width={1176}
                height={827}
              />
            </div>
            <div className="flex justify-between relative z-2">
              <div className="w-[5rem] h-[5rem] bg-blac  rounded-full shadow-md">
                <Image
                  className="w-full h-full rounded-full object-cover"
                  src={social.logo}
                  alt="LogoDev"
                  width={1176}
                  height={827}
                />
              </div>
            </div>
            <h1 className="font-bold text-[1.1rem]">{social.label}</h1>
            <span className="font-medium text-[.8rem] text-[#7f7f7f]/80">
              {social.name}
            </span>
            <Link
              target="_blank"
              href={social.link}
              className="w-fit mt-[.5rem] flex items-center gap-[.5rem] py-[.5rem] px-[1.5rem] border follow-button font-semibold border-[#5956E8]/70 text-[#5956E8] hover:bg-[#5956E8] hover:text-white transition-all rounded-lg text-[.9rem]"
            >
              <Follows /> Follow
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default CardSocial;
