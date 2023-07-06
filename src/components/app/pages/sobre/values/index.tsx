import CheckIcon from "@/assets/svg/check"
import { HeaderSection } from "@/components/titleSection"
import CarrosselValues from "../carrosselValues"

const Values = () => {
    return (
        <section className="w-full h-fit flex justify-center pt-[4rem] pb-[6rem] px-[3rem] bg-secondary_black-950 max-md:px-[1rem] z-50">
            <div className="w-[72%] flex flex-col gap-[2.5rem] items-center max-2xl:w-[70%] max-xl:w-[80%] max-lg:w-[90%] max-md:w-[95%]">
                <HeaderSection.Root>
                <div className="flex flex-col items-center gap-[1rem]">
                    <HeaderSection.Icon bgColor="#F96A4B">
                        <CheckIcon />
                    </HeaderSection.Icon>
                        <HeaderSection.Path>
                        <span className="font-extrabold text-[1rem] tracking-widest text-[#FFDC60]">
                            //
                        </span>{' '}
                        02 . Nossos valores
                    </HeaderSection.Path>
                    <HeaderSection.Title asChild>
                        <h1 className="text-[1.4rem] text-white font-medium leading-tight">
                            Os valores fundamentais por trás do nosso trabalho
                        </h1>
                    </HeaderSection.Title>
                </div>
                </HeaderSection.Root>
                <CarrosselValues />
            </div>
        </section>
    )
}

export default Values