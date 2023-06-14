import Image from "next/image"
import About from '../../../../../assets/img/about.png'
import { HeaderSection } from "@/components/titleSection"
import Icon from "@/assets/svg/Icon"
import ResultsIcon from "@/assets/svg/results"
import Time from "@/assets/svg/team"
import ImagesAnimate from "@/components/imagesAnimate"

const AboutSection = () => {
    return (
        <section  id="about" className="w-full h-fit flex justify-center bg-white py-[4rem]">
            <div className="w-[70%] flex h-full relative max-xl:w-[80%] max-lg:flex-col max-lg:items-center">
                    <ImagesAnimate min={1320} max={3000} src={About} alt="img-about" className="w-[100%] max-lg:w-[60%]"  width={1280} height={1704}/>
                    <div className="absolute left-[20%] top-[25%] sombra max-md:top-[0%] " />
                <div className="w-full h-full flex flex-col gap-[1.5rem]">
                    <HeaderSection.Root divider>
                        <div className="flex items-center gap-[2rem] py-[2rem]  max-md:gap-[1rem]">
                            <HeaderSection.Icon bgColor="#FFDC60">
                                <Icon />
                            </HeaderSection.Icon>
                            <div className="flex flex-col gap-[.5rem]">
                                <HeaderSection.Path dark>
                                    <span className="font-extrabold text-[1rem] tracking-widest text-[#FEC90C]">//</span> 02 . Sobre nós
                                </HeaderSection.Path>
                                <HeaderSection.Title asChild>
                                    <h1 className="text-[1.4rem] text-secondary_black-950 font-medium leading-tight max-md:text-[1rem]">
                                        A empresa número 1 em serviços para desenvolvimento de software
                                    </h1>
                                </HeaderSection.Title>
                            </div>
                        </div>
                    </HeaderSection.Root>
                    <span className="text-secondary_black-950/70 relative z-10 max-md:text-[.8rem]">Somos uma empresa de desenvolvimento de software focando em linguagens atuais do mercado trazendo máxima performance e um design único em suas páginas e sistemas.</span>
                    <div className="w-full h-full flex flex-col gap-[3rem] items-end mt-[1.5rem] max-md:items-center">
                        <div className="w-[90%] flex flex-col items-start content">
                            <div className="w-full border-b-[1px] border-[#CFCFCF]/80 relative">
                                <h1 className="font-bold text-[1.3rem] ml-[6rem] max-md:text-[1rem]">Resultados Garantidos</h1>
                                <div className="absolute w-[80px] h-[80px] max-sm:w-[60px] max-sm:h-[60px] flex justify-center items-center border-[1px] border-[#CFCFCF]/80 bg-white bottom-0 translate-y-2/4 rounded-full">
                                    <ResultsIcon />
                                </div>
                            </div>
                            <span className="ml-[6rem] mt-[1rem] text-[1rem] text-secondary_black-950/60 max-md:text-[.8rem]">
                                Resultados garantidos com as tecnologías mais atuais do mercado trazendo maior perfomance.
                            </span>
                        </div>
                        <div className="w-[90%] flex flex-col items-start content">
                            <div className="w-full border-b-[1px] border-[#CFCFCF]/80 relative">
                                <h1 className="font-bold text-[1.3rem] ml-[6rem] max-md:text-[1rem]">Time de experts</h1>
                                <div className="absolute w-[80px] h-[80px] max-sm:w-[60px] max-sm:h-[60px] flex justify-center items-center border-[1px] border-[#CFCFCF]/80 bg-white bottom-0 translate-y-2/4 rounded-full">
                                    <Time />
                                </div>
                            </div>
                            <span className="ml-[6rem] mt-[1rem] text-[1rem] text-secondary_black-950/60 max-md:text-[.8rem]">
                               Profissionais experts em cada área para que você tenha o máximo de resultados em menos tempo.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection