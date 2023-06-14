import EngrenagemIcon from '@/assets/svg/EngrenagemIcon'
import IconProx from '@/assets/svg/iconProx'
import ServiceAnimation from '@/components/app/ServiceAnimation'
import Button from '@/components/button'
import { HeaderSection } from '@/components/titleSection'

const ServicesSection = () => {
  return (
    <section
      id="service"
      className="w-full h-fit flex justify-center py-[4rem] px-[3rem] bg-secondary_black-950 max-md:px-[1rem] z-50"
    >
      <div className="w-[80%] h-full flex flex-col gap-[4rem] max-2xl:w-full">
        <HeaderSection.Root>
          <div className="flex items-center gap-[2rem] max-md:gap-[1rem]">
            <HeaderSection.Icon bgColor="#5956E8">
              <EngrenagemIcon />
            </HeaderSection.Icon>
            <div className="flex flex-col gap-[.5rem]">
              <HeaderSection.Path>
                <span className="font-extrabold text-[1rem] tracking-widest text-[#FEC90C] max-lg:text-[.8rem]">
                  //
                </span>{' '}
                01 . Serviços
              </HeaderSection.Path>
              <HeaderSection.Title asChild>
                <h1 className="text-[1.4rem] text-white/90 font-medium leading-tight max-lg:max-w-[80%] max-lg:text-[1rem] max-md:w-full max-sm:text-[.9rem]">
                  Serviços de alto impacto para levar sua empresa ao próximo
                  nível
                </h1>
              </HeaderSection.Title>
            </div>
          </div>
          <div className="max-sm:hidden">
            <Button fill light>
              Nossos Serviços <IconProx />
            </Button>
          </div>
        </HeaderSection.Root>
        <ServiceAnimation />
      </div>
    </section>
  )
}

export default ServicesSection
