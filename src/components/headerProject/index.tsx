'use client'
import { iProjects } from "@/types/projects"
import Image from "next/image"
import Button from "@/components/button"
import IconProx from "@/assets/svg/iconProx"
import { motion } from 'framer-motion' 

const HeaderProject = ({projeto}: { projeto : iProjects}) => {
    return (
        <motion.section className={`w-full h-fit flex py-[120px] pb-[60px] justify-center min-h-[25vh]  relative`} style={{background: projeto.bgColor}}>
            <motion.div className="w-[75%] grid grid-cols-2 max-[870px]:grid-cols-1 max-[870px]:auto-rows-min items-center gap-[3rem]  absolute max-[870px]:!relative top-[55%] max-[870px]:top-0 max-xl:w-[95%] max-[870px]:w-[60%] max-sm:w-[92%]">
                <motion.div     
                    initial={{  scale: 0, opacity: 0 }}
                    animate={{ scale: 1,  opacity: 1 }}
                    transition={{
                        type: 'spring',
                        stiffness: 50,
                        damping: 9,
                    }} 
                    className="w-full flex flex-col gap-[1rem]">
                    <div className="w-full flex flex-col items-center">
                        <Image src={projeto.img} alt={projeto.title} className="w-full mt-[.5rem] h-[30rem] shadow-lg rounded-2xl object-cover max-[870px]:h-[30rem]" />
                    </div>
                    <div className="w-full justify-between flex items-center max-sm:grid-cols-2 max-sm:!grid max-sm:grid-rows-auto justify-items-center max-sm:gap-[1rem] ">
                        <div className="flex flex-col gap-[.2rem] max-sm:items-center">
                            <h3 className="font-bold max-xl:text-[.9rem]">Cliente</h3>
                            <span className="text-secondary_black-950/70 max-xl:text-[.8rem]">{projeto.client}</span>
                        </div>
                        <div className="flex flex-col gap-[.2rem] max-sm:items-center">
                            <h3 className="font-bold max-xl:text-[.9rem]">Service</h3>
                            <span className="text-secondary_black-950/70 max-xl:text-[.8rem]">Desenvolvimento</span>
                        </div>
                        <div className="flex flex-col gap-[.2rem] max-sm:items-center">
                            <h3 className="font-bold max-xl:text-[.9rem]">Duração</h3>
                            <span className="text-secondary_black-950/70 max-xl:text-[.8rem]">{projeto.duration} horas</span>
                        </div>
                        <div className="flex flex-col gap-[.2rem] max-sm:items-center">
                            <h3 className="font-bold max-xl:text-[.9rem]">Commits</h3>
                            <span className="text-secondary_black-950/70 max-xl:text-[.8rem]">{projeto.commit} commits</span>
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                          type: 'spring',
                          stiffness: 30,
                          damping: 10,
                      }} 
                    className="flex flex-col pb-[2rem] gap-[1.5rem]  max-sm:items-center">
                    <div className="max-sm:text-center">
                        <span className="font-semibold">{projeto.type}</span>
                        <h1 className="font-extrabold text-[2rem]">{projeto.title}</h1>
                        <span className="text-secondary_black-950/70">
                            {projeto.comment}
                        </span>
                    </div>
                    <div className="flex gap-[2rem] max-sm:justify-center flex-wrap">
                        {projeto.stacks.map(stacks => (
                            <div key={stacks.id}  className="flex flex-col items-center gap-[.7rem] transition-all hover:scale-[1.1]">
                                <Image src={stacks.icon} alt={stacks.name} className="w-[2rem] h-[2rem] rounded-full" />
                                <span className="text-secondary_black-950/70 text-[.7rem]">{stacks.name}</span>
                            </div>
                        ))}
                    </div>
                    {projeto.link && (
                        <Button href={projeto.link} className="w-fit text-[.8rem]" fill>Acessar página <IconProx white/></Button>
                    )}
                </motion.div>
            </motion.div>
        </motion.section>
    )
}

export default HeaderProject