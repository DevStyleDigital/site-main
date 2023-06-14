'use client'
import Star from '@/assets/svg/star'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'

interface CardWitnessProps {
  companyName: string
  imgCompany: StaticImageData
  name: string
  commented: string
  cargo: string
  imgAuthor?: string
  variants?: any
}

const CardWitness = ({
  cargo,
  commented,
  companyName,
  imgCompany,
  name,
  variants,
}: CardWitnessProps) => {
  return (
    <motion.div
      variants={variants}
      className="w-full flex flex-col justify-between p-[2rem] h-full card-witness rounded-lg shadow-sm transition-all hover:scale-[1.02]"
    >
      <div className="w-full h-[80%] p-[2rem] bg-white rounded-md shadow-md flex flex-col gap-[2rem]">
        <div className="w-full h-[30%] flex justify-between items-center border-b-[1px] border-[#CFCFCF]/40 max-sm:pb-[1rem] ">
          <div className="flex items-center gap-4">
            <div className="w-[2.5rem] h-[2.5rem] rounded-full">
              <Image
                src={imgCompany}
                className="rounded-full"
                alt="img-company"
                width={100}
                height={100}
              />
            </div>
            <h1 className="font-extrabold text-[1.2rem] max-sm:text-[1rem]">
              {companyName}
            </h1>
          </div>
          <div className="flex items-center gap-1 max-sm:hidden">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
        <span className="font-medium text-[#555555]/80  max-sm:text-[.8rem]">
          {commented}
        </span>
      </div>
      <div className="flex w-full max-sm:justify-between">
        <div className="flex w-full gap-[.8rem] items-center">
          <div className="w-[3rem] h-[3rem] rounded-full bg-white max-sm:w-[2rem] max-sm:h-[2rem]" />
          <div className="flex flex-col">
            <h1 className="font-bold text-[1.1rem] text-[#292930] max-sm:text-[.8rem]">
              {name}
            </h1>
            <span className="font-semibold text-[.9rem] text-[#292930]/70 max-sm:text-[.6rem]">
              {cargo}
            </span>
          </div>
        </div>
        <div className=" items-center hidden gap-1 max-sm:flex ">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      </div>
    </motion.div>
  )
}

export default CardWitness
