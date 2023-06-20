import About from '@/assets/img/about/about-2.png'
import Phone from '@/assets/img/about/megaphone.png'
import { HeaderSection } from '@/components/titleSection'
import Icon from '@/assets/svg/Icon'
import ImagesAnimate from '@/components/imagesAnimate'
import Button from '@/components/button'
import Mira from '@/assets/img/mira.png'
import Image from 'next/image'

const AboutSectionPage = () => {
  return (
    <section
      id="about"
      className="w-full h-fit flex justify-center bg-white py-[5rem]"
    >
      <div className="w-[60%] flex h-full relative max-xl:w-[80%] max-lg:flex-col max-lg:items-center max-md:justify-center max-md:text-center">
        <ImagesAnimate
          min={200}
          max={2000}
          src={About}
          alt="img-about"
          className="w-[100%] max-lg:w-[60%] max-md:w-[80%] max-sm:w-[100%]"
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
                  01 . Sobre nós
                </HeaderSection.Path>
                <HeaderSection.Title asChild>
                  <h1 className="text-[1.4rem] text-secondary_black-950 font-medium leading-tight max-md:text-[1rem]">
                    A empresa número 1 em serviços para desenvolvimento de
                    software
                  </h1>
                </HeaderSection.Title>
              </div>
            </div>
          </HeaderSection.Root>
          <div className='w-full flex gap-[2rem] max-md:justify-center max-md:gap-[1rem] max-sm:flex-wrap'>
            <Button className='py-[2rem]' fill href="https://wa.me/5515988045279?text=Ol%C3%A1%2C+vim+do+site+DevStyle.">
              <Image className='mira-img-button' src={Mira} alt="Mira" width={138} height={190}></Image>
              Desenvolvimento em escala
            </Button>
            <Button className='py-[2rem]' fill href="https://wa.me/5515988045279?text=Ol%C3%A1%2C+vim+do+site+DevStyle.">
              <Image className='phone-img-button' src={Phone} alt="Mira" width={138} height={190}></Image>
              Estratégia & Resultados
            </Button>
          </div>
          <span className="text-secondary_black-950/70 relative z-10 max-md:text-[.8rem]">
            Uma empresa de desenvolvimento de aplicações web e mobile trazendo soluções para sua empresa, trazendo maior visibilidade para sua 
            marca e com isso melhores resultados para que consiga atingir um maior número de clientes. DevStyle foi criada em 2021 e desde então focamos 
            em deixar nossos clientes satisfeitos com o nosso trabalho.
          </span>
          <Button className='w-fit' href="https://wa.me/5515988045279?text=Ol%C3%A1%2C+vim+do+site+DevStyle.">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}

export default AboutSectionPage
