import PC from '@/assets/img/process/PC2.png'
import { HeaderSection } from '@/components/titleSection'
import Icon from '@/assets/svg/Icon'
import ImagesAnimate from '@/components/imagesAnimate'
import CheckBlack from '@/assets/svg/checkBlack'

const ProcessSectionPage = () => {
  return (
    <section
      id="process"
      className="w-full h-fit flex justify-center bg-white py-[5rem]"
    >
      <div className="w-[70%] flex h-full relative max-2xl:w-[80%] max-xl:flex-col max-xl:items-center max-md:justify-center max-md:text-center">
        <ImagesAnimate
          min={200}
          src={PC}
          alt="img-PC"
          className="w-[95%] max-lg:w-[60%] max-md:w-[80%] max-sm:w-[100%] max-xl:w-[50%]"
          width={1280}
          height={1704}
        />
        <div className="absolute left-[20%] top-[25%] sombra-about max-md:top-[0%] " />
        <div className="w-full h-full flex flex-col gap-[1.5rem] relative z-40 max-md:items-center">
          <HeaderSection.Root divider>
            <div className="flex items-center gap-[2rem] py-[2rem]  max-md:gap-[1rem">
              <HeaderSection.Icon bgColor="#FFDC60">
                <Icon />
              </HeaderSection.Icon>
              <div className="flex flex-col gap-[.5rem]">
                <HeaderSection.Path dark>
                  <span className="font-extrabold text-[1rem] tracking-widest text-[#FEC90C]">
                    //
                  </span>{' '}
                  02 . Importância de processos
                </HeaderSection.Path>
                <HeaderSection.Title asChild>
                  <h1 className="text-[1.4rem] text-secondary_black-950 font-medium leading-tight max-md:text-[1rem]">
                    Processos ! Uma medologia para o sucesso
                  </h1>
                </HeaderSection.Title>
              </div>
            </div>
          </HeaderSection.Root>
          <span className="text-secondary_black-950/70 relative z-10 max-md:text-[.8rem]">
              Com o avanço da tecnologia a metodologia de processos ficou cada vez mais importante para que possamos entregar os projetos em um 
              período reduzido e mantendo a qualidade do produto, quando passamos por partes podemos bater com o cliente todas as suas ideias e então inserindo como solução de seus problemas.
          </span>
          <div className='flex flex-col gap-[1rem]'>
            <span className='flex gap-[1rem] max-sm:gap-[.5rem]  items-center transition-all cursor-pointer hover:scale-[1.1] hover:translate-x-[3rem]'>
              <CheckBlack /> 
              <h1 className='font-semibold max-sm:text-[.7rem]'>Manter dialogo com o cliente em todos os processos</h1>     
            </span>
            <span className='flex gap-[1rem] max-sm:gap-[.5rem] items-center  transition-all cursor-pointer hover:scale-[1.1] hover:translate-x-[3rem]'>
              <CheckBlack /> 
              <h1 className='font-semibold max-sm:text-[.7rem]'>Trabalhar com metodologias ágeis</h1>     
            </span>
            <span className='flex gap-[1rem] max-sm:gap-[.5rem] items-center transition-all cursor-pointer hover:scale-[1.1] hover:translate-x-[3rem]'>
              <CheckBlack /> 
              <h1 className='font-semibold max-sm:text-[.7rem]'>Máxima eficiência e entrega</h1>     
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSectionPage
