'use client'
import IconProx from "@/assets/svg/iconProx"
import Button from "@/components/button"
import { ProjectsArray } from "@/utils/projects"
import Image from "next/image"
import { motion } from 'framer-motion' 

const AnimationCards = () => {
    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            className="w-full h-full grid grid-cols-2 max-[1150px]:grid-cols-1 grid-rows-auto gap-[2rem] content-center">
            {ProjectsArray.sort((a, b) => a.order - b.order).map(project => {
                const variants = {
                    offscreen: {
                        opacity: 0,
                        y: 200,
                    },
                    onscreen: {
                            y:0,
                            opacity: 1,
                            transition: {
                                type: 'spring',
                                duration: .5 * project.order,
                            },
                        },
                    }
                return (
                    <motion.div variants={variants} key={project.id} className='w-full h-full p-[1.5rem] grid grid-cols-2 grid-rows-1 max-sm:grid-cols-1 max-sm:grid-rows-2 rounded-2xl shadow-sm gap-[1rem]' style={{ background : `${project.color}`}}>
                        <Image src={project.img} className="rounded-lg w-full h-full shadow-lg" alt={project.title}></Image>
                        <div className="w-full h-full bg-white rounded-lg p-[1.5rem] max-xl:justify-between shadow-lg flex flex-col gap-[.8rem] max-sm:gap-[.5rem] max-2xl:gap-[.5rem]">
                                <h1 className="font-bold">
                                    {project.type}
                                </h1>
                                <span className="w-full h-[1px] bg-[#CFCFCF]/30" />
                                <h1 className="font-semibold mt-[.5rem] text-secondary_black-950">{project.title}</h1>
                                <span className="text-secondary_black-950/70 text-[.8rem] elipses3 max-h-[5rem]">
                                    {project.comment}
                                </span>
                                <Button href={`projects/${project.hash}`} className="w-fit !p-[.5rem] !text-[.8rem]" fill >Leia sobre <IconProx white /></Button>
                        </div>
                    </motion.div>
                )
            })}
         </motion.div>
    )
}

export default AnimationCards