'use client';
import InstagramIcon from '@/assets/svg/Instagram';
import GitHubIcon from '@/assets/svg/github';
import { TeamArray } from '@/utils/team';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import LinkedinIcon from '@/assets/svg/Linkedin';

const Cards = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full gap-[2rem] justify-center grid grid-cols-3 max-md:gris-cols-2 max-sm:grid-cols-1 max-sm:w-[90%]"
    >
      {TeamArray.map((team) => {
        const variants = {
          offscreen: {
            opacity: 0,
          },
          onscreen: {
            opacity: 1,
            transition: {
              type: 'spring',
              bounce: 0.2,
              duration: 0.8 * team.id,
            },
          },
        };
        return (
          <motion.div
            variants={variants}
            key={team.id}
            className={clsx(
              'w-[100%] h-full flex flex-col items-center gap-[.8rem] p-[1rem] rounded-2xl card-co',
            )}
          >
            <div className="w-full max-h-[330px] h-full overflow-hidden rounded-t-xl">
              <Image
                src={team.img}
                alt="img-person"
                className="w-full h-full rounded-t-xl object-cover object-top"
                width={1920}
                height={1080}
                priority
              />
            </div>
            <div className="w-[4rem] h-[2px] bg-[#5956E8] mt-[.5rem]" />
            <div className="flex flex-col items-center gap-[.3rem]">
              <h1 className="font-bold text-[1rem]">{team.name}</h1>
              <span className="font-semibold text-[.8rem] text-secondary_black-950/80 text-center">
                {team.carer}
              </span>
              <div className="flex gap-[1rem] mt-[.5rem]">
                {team.linkedin && (
                  <Link
                    aria-label="linkedin"
                    href={team.linkedin}
                    target="_blank"
                    className="transition-all hover:scale-[1.2]"
                  >
                    <LinkedinIcon />
                  </Link>
                )}
                {team.instagram && (
                  <Link
                    aria-label="instagram"
                    href={team.instagram}
                    target="_blank"
                    className="transition-all hover:scale-[1.2]"
                  >
                    <InstagramIcon />
                  </Link>
                )}
                {team.github && (
                  <Link
                    aria-label="github"
                    href={team.github}
                    target="_blank"
                    className="transition-all hover:scale-[1.2]"
                  >
                    <GitHubIcon />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Cards;
