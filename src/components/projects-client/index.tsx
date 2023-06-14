'use client'
import Next from "@/assets/svg/next"
import Image, { StaticImageData } from "next/image"
import { useEffect, useState } from "react"
import Authentic from "@/assets/img/projects/authenticImg.png"
import { ProjectsArray } from "@/utils/projects"
import clsx from "clsx"
import { motion } from "framer-motion"

const ProjectCLient = () => {
    const [ImageAtual, setImageAtual] = useState<StaticImageData>(Authentic)
    
    const variants = {
        offscreen: {
            opacity: 0,
        },
        onscreen: {
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.5,
                duration: 2
            }
        }
    }

    useEffect(() => {
        const allBox = document.querySelectorAll('.box-content-projects')
        allBox.forEach((boxSelect) => {
            if(boxSelect.classList.contains('active')){
                console.log(boxSelect)
            }
        })
    }, [])

    function handleActive(identifier: any) {
        const allBox = document.querySelectorAll('.box-content-projects')
        const boxSelect = document.querySelector(`#box-${identifier}`)
        allBox.forEach((boxSelect) => {
            if(boxSelect.classList.contains('active')){
                boxSelect?.classList.remove('active')
            }
        })
        boxSelect?.classList.toggle('active')
    }

    return (
        <motion.div      
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }} 
            className="w-full h-full flex justify-between items-center gap-[2rem] max-md:flex-col-reverse"
        >
        <motion.div variants={variants} className="h-[30rem] w-[50%] overflow-y-scroll pr-[1rem] scroll-style max-md:w-[95%]">
            <div className="w-full flex flex-col gap-[1rem]">
                {ProjectsArray.map((project) => (
                    <div id={`box-${project.id}`} key={project.id} className={clsx(`w-full h-[5rem] bg-[#383840] rounded-md p-[2rem] box-content-projects border-[1px] border-[black]/10`, {'active': project.id === 1})}>
                        <div className="w-full h-full flex justify-between items-center">
                            <div className="w-[70%] flex flex-col gap-[.5rem]">
                                <span className="opacity-0 h-0 text-[#FFDC60] font-medium max-sm:text-[.8rem]">{project.type}</span>
                                <h1 className="text-white/50 font-semibold text-[1.2rem] max-sm:text-[1rem]">{project.title}</h1>
                                <span className="opacity-0 h-0 text-[white]/70 font-medium max-sm:text-[.9rem]">
                                    {project.comment}
                                </span>
                            </div>
                            <button type="button" onClick={() => {
                                handleActive(project.id)
                                setImageAtual(project.img)
                                }} className="w-[3rem] h-[3rem] bg-[#292930] rounded-full flex justify-center items-center button-drop">
                                <Next />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
        <motion.div variants={variants} className="h-[25rem] w-[50%] rounded-lg fundo-1 shadow-lg flex justify-center items-center max-md:w-[95%]">
            <div className="w-auto h-auto rounded-lg shadow-lg ">
                <Image src={ImageAtual} className="w-full h-full rounded-lg object-contain" alt="img-project" width={300} height={300}/>
            </div>
        </motion.div>
    </motion.div>
    )
}

export default ProjectCLient