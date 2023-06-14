import ProcessIcon from '@/assets/svg/process'
import ProcessAnimation from '@/components/app/ProcessAnimation'
import { HeaderSection } from '@/components/titleSection'

const Process = () => {
  return (
    <section
      id="process"
      className="w-full h-fit flex justify-center pb-[4rem] bg-background_process  max-lg:min-h-[110vh]"
    >
      <div className="w-[60%] h-auto bg-process flex flex-col items-center p-[4rem] rounded-md  max-2xl:w-[70%] max-xl:w-[80%] max-lg:w-[90%] max-sm:w-[95%] max-sm:p-[1rem]">
        <HeaderSection.Root>
          <div className="flex flex-col items-center gap-[1rem] py-[2rem]">
            <HeaderSection.Icon bgColor="#292930">
              <ProcessIcon />
            </HeaderSection.Icon>
            <HeaderSection.Path dark>
              <span className="font-extrabold text-[1rem] tracking-widest text-[#5956E8]">
                //
              </span>
              03 . Processos
            </HeaderSection.Path>
            <HeaderSection.Title asChild>
              <h1 className="text-[1.4rem] font-semibold text-center text-secondary_black-950 leading-tight max-sm:text-[1.2rem]">
                Um processo simples, poderoso e eficiente
              </h1>
            </HeaderSection.Title>
          </div>
        </HeaderSection.Root>
        <ProcessAnimation />
      </div>
    </section>
  )
}

export default Process
