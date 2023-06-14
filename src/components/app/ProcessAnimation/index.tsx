"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import Step1 from "../../../assets/img/Graphics.png"
import Step2 from "../../../assets/img/step2.png"
import Step3 from "../../../assets/img/step3.png"

const ProcessAnimation = () => {

    function setTimes(next: number) {
        const newDuration = 0.7 * next;
        return {
            offscreen: {
                y: -80,
                opacity: 0,
            },
            onscreen: {
                opacity: 1,
                y: 0,
                transition: {
                    type: "spring",
                    bounce: 0,
                    duration: newDuration
                },
            },
        };
    }

    return (
            <motion.div   
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.2 }}    
                style={{perspective: 2000}} className="w-full h-full flex flex-col items-center justify-evenly"
            >
                <motion.div variants={setTimes(1.5)} className="grid h-full value-cols justify-items-center items-center gap-[1rem] w-full">
                    <div className="w-full">
                        <Image src={Step1} className="drop-shadow-md"  alt="img-design" width={1248} height={852} />
                    </div>
                    <div className="w-full h-full flex items-end justify-center relative">
                        <div className="h-[50%] outline-dashed outline-[1.5px] outline-[#E38676]"></div>
                        <div className="w-[5rem] h-[5rem] max-sm:w-[3rem] max-sm:h-[3rem] absolute top-[50%] translate-y-[-50%] bg-[#FFD1C8] flex justify-center items-center rounded-full">
                                <div className="w-[80%] h-[80%] bg-white rounded-full flex justify-center items-center">
                                    <h1 className="font-bold text-[1.5rem] max-md:text-[1rem]">1</h1>
                                </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[.2rem]">
                        <h1 className="font-bold text-[1.5rem] max-md:text-[1rem] max-sm:text-[.8rem]">
                            Criação do Design
                        </h1>
                        <span className="text-[.9rem] max-md:text-[.7rem] max-sm:text-[.55rem]">
                            Criação da estrutura em design para uma visualização da página passando pela aprovacao do Cliente.
                        </span>
                    </div>
                </motion.div>
                <motion.div variants={setTimes(3)} className="grid h-full value-cols justify-items-center items-center gap-[1rem]">
                    <div className="flex flex-col gap-[.2rem] text-right">
                        <h1 className="font-bold text-[1.5rem] max-md:text-[1rem]  max-sm:text-[.8rem]">
                            Execução do desenvolvimento
                        </h1>
                        <span className="text-[.9rem] max-md:text-[.7rem] max-sm:text-[.55rem]">
                            Execução do trabalho seguindo o layout proposto na etapa anterior aprovado pelo Cliente.
                        </span>
                    </div>
                    <div className="w-full h-full flex items-end justify-center relative">
                        <div className="h-[100%] outline-dashed outline-[1.5px] outline-[#E38676]"></div>
                        <div className="w-[5rem] h-[5rem] max-sm:w-[3rem] max-sm:h-[3rem] absolute top-[50%] translate-y-[-50%] bg-[#FFD1C8] flex justify-center items-center rounded-full">
                                <div className="w-[80%] h-[80%] bg-white rounded-full flex justify-center items-center">
                                    <h1 className="font-bold text-[1.5rem] max-md:text-[1rem]">2</h1>
                                </div>
                        </div>
                    </div>
                    <div className="w-[80%] h-[80%]">
                        <Image src={Step2} className="drop-shadow-sm"  alt="img-design" width={1148} height={852} />
                    </div>
                </motion.div>
                <motion.div variants={setTimes(4.5)} className="grid h-full value-cols justify-items-center items-center gap-[1rem]">
                    <div className="w-full">
                        <Image src={Step3} className="drop-shadow-sm"  alt="img-design" width={1618} height={1192} />
                    </div>
                    <div className="w-full h-full flex items-start justify-center relative">
                        <div className="h-[50%] outline-dashed outline-[1.5px] outline-[#E38676]"></div>
                        <div className="w-[5rem] h-[5rem] max-sm:w-[3rem] max-sm:h-[3rem] absolute top-[50%] translate-y-[-50%] bg-[#FFD1C8] flex justify-center items-center rounded-full">
                                <div className="w-[80%] h-[80%] bg-white rounded-full flex justify-center items-center">
                                    <h1 className="font-bold text-[1.5rem] max-md:text-[1rem]">3</h1>
                                </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[.2rem]">
                        <h1 className="font-bold text-[1.5rem] max-md:text-[1rem]  max-sm:text-[.8rem]">
                            Resultados
                        </h1>
                        <span className="text-[.9rem] max-md:text-[.7rem] max-sm:text-[.5rem] ">
                            Após a entrega passaremos a fazer a gestão do trafego da página para que consiga altos resultados
                        </span>
                    </div>
                </motion.div>
            </motion.div>
    )
}

export default ProcessAnimation