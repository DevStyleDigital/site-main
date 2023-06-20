import Time from '@/assets/svg/time'
import Cards from '@/components/cardTeam'
import { HeaderSection } from '@/components/titleSection'

const Team = ({numSection}: {numSection: string}) => {
  return (
    <div className="w-full h-fit flex justify-center pt-[5rem] pb-[4rem] max-lg:pb-[6rem] max-md:pt-[3rem] max-sm:pb-[3rem]">
      <div className="w-[60%] flex flex-col gap-[2.5rem] items-center max-2xl:w-[70%] max-xl:w-[80%] max-lg:w-[90%]">
        <HeaderSection.Root>
          <div className="flex flex-col items-center gap-[1rem]">
            <HeaderSection.Icon bgColor="#CA87FF">
              <Time />
            </HeaderSection.Icon>
            <HeaderSection.Path dark>
              <span className="font-extrabold text-[1rem] tracking-widest text-[#5956E8]">
                //
              </span>{' '}
              {numSection} . Nosso Time
            </HeaderSection.Path>
            <HeaderSection.Title asChild>
              <h1 className="text-[1.4rem] text-[#292930] font-medium leading-tight">
                Nosso time de experts
              </h1>
            </HeaderSection.Title>
          </div>
        </HeaderSection.Root>
        <Cards />
      </div>
    </div>
  )
}

export default Team
