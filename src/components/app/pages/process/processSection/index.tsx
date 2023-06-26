import ProcessIcon from '@/assets/svg/process'
import { HeaderSection } from '@/components/titleSection'
import clsx from 'clsx'
import ProcessAnimation from '../ProcessAnimation'
import Button from '@/components/button'
import IconProx from '@/assets/svg/iconProx'

const ProcessSection = () => {
  return (
    <section
      id="service"
      className="w-full h-fit flex justify-center py-[4rem] px-[3rem] bg-secondary_black-950 max-md:px-[1rem] z-50"
    >
      <div className={clsx(`w-[80%] h-full flex flex-col gap-[4rem] max-2xl:w-full items-center`)}>
        <HeaderSection.Root>
          <div className={clsx("flex items-center gap-[2rem] max-md:gap-[1rem] flex-col text-center")}>
            <HeaderSection.Icon bgColor="#343437">
              <ProcessIcon />
            </HeaderSection.Icon>
            <div className={clsx("flex flex-col gap-[.5rem] items-center")}>
              <HeaderSection.Path>
                <span className="font-extrabold text-[1rem] tracking-widest text-[#5956E8] max-lg:text-[.8rem]">
                  //
                </span>{' '}
                01 . Processos
              </HeaderSection.Path>
              <HeaderSection.Title asChild>
                <h1 className="text-[1.4rem] text-white/90 font-medium leading-tight max-lg:max-w-[80%] max-lg:text-[1rem] max-md:w-full max-sm:text-[.9rem]">
                  Processos executados para máxima Eficiência e entrega
                </h1>
              </HeaderSection.Title>
            </div>
          </div>
        </HeaderSection.Root>
        <ProcessAnimation />
        <Button  href='https://api.whatsapp.com/send/?phone=5515988045279&text=Ol%C3%A1%2C+vim+do+site+DevStyle.&type=phone_number&app_absent=0' fill light>Começar agora <IconProx /></Button>
      </div>
    </section>
  )
}

export default ProcessSection
