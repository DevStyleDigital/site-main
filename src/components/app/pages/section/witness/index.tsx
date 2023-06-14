import ComentarioIcon from "@/assets/svg/comentario"
import CarouselWitness from "@/components/ carouselWitness"
import ButtonSlide from "@/components/buttonSlide"
import { HeaderSection } from "@/components/titleSection"

const Witness = () => {
    return (
        <section className="w-full h-fit flex justify-center py-[4rem] max-md:pt-[1rem]">
            <div className="w-[60%] h-full flex flex-col gap-[3rem] relative max-2xl:w-[70%] max-xl:w-[80%] max-lg:w-[90%]">
                <HeaderSection.Root>
                    <div className="flex items-center gap-[2rem]  max-md:gap-[1rem]">
                        <HeaderSection.Icon bgColor="#F5B7FF">
                            <ComentarioIcon />
                        </HeaderSection.Icon>
                        <div className="flex flex-col gap-[.5rem]">
                            <HeaderSection.Path dark>
                                <span className="font-extrabold text-[1rem] tracking-widest text-[#FEC90C]">//</span> 04 . Testemunhas
                            </HeaderSection.Path>
                            <HeaderSection.Title asChild>
                                <h1 className="text-[1.4rem] font-semibold text-secondary_black-950 leading-tight max-md:text-[1rem]">
                                    Nós trabalhamos sempre com o cliente garantindo  a melhor entrega.
                                </h1>
                            </HeaderSection.Title>
                        </div>
                    </div>
                    <ButtonSlide/>
                </HeaderSection.Root>
                <CarouselWitness />
            </div>
        </section>
    )
}

export default Witness