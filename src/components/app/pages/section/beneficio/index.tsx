import StarBene from '@/assets/svg/star-bene';
import { HeaderSection } from '@/components/titleSection';
import Painel from '@/assets/img/painel.png';
import ImagesAnimate from '@/components/imagesAnimate';
import PageRaking from '@/assets/svg/page';
import EngrenagemBene from '@/assets/svg/enge';
import Pizza from '@/assets/svg/pizza';

const Beneficios = () => {
  return (
    <div className="w-full h-fit pb-[6rem] pt-[4rem] flex justify-center max-xl:pt-[0rem]">
      <div className="w-[60%] h-full flex items-start max-2xl:w-[70%] max-xl:w-[80%] max-lg:w-[90%] max-md:flex-col max-md:w-[90%]">
        <div className="w-full h-full flex flex-col gap-[2rem]">
          <HeaderSection.Root className="max-md:justify-center">
            <div className="flex items-center gap-[2rem] py-[2rem]  max-md:gap-[1rem]">
              <HeaderSection.Icon bgColor="#93E1A4">
                <StarBene />
              </HeaderSection.Icon>
              <div className="flex flex-col gap-[.5rem]">
                <HeaderSection.Path dark>
                  <span className="font-extrabold text-[1rem] tracking-widest text-[#FEC90C]">
                    {'//'}
                  </span>{' '}
                  07 . Benefício
                </HeaderSection.Path>
                <HeaderSection.Title asChild>
                  <h1 className="text-[1.4rem] text-secondary_black-950 font-medium leading-tight max-md:text-[1rem] max-md:w-[90%]">
                    Benefícios de trabalhar com a DevStyle
                  </h1>
                </HeaderSection.Title>
              </div>
            </div>
          </HeaderSection.Root>
          <div className="w-full h-full relative">
            <ImagesAnimate
              min={5950}
              max={8000}
              src={Painel}
              alt="img-about"
              className="w-[90%]"
              width={1280}
              height={1704}
            />
            <div className="absolute left-[20%] top-[25%] painel-bg max-md:top-[0%] " />
          </div>
        </div>
        <div className="w-full h-full flex flex-col gap-[3rem] items-end mt-[1.5rem] max-md:items-center max-sm:mt-[2.5rem]">
          <div className="w-[90%] flex flex-col items-start content">
            <div className="w-full border-b-[1px] border-[#CFCFCF]/80 relative">
              <h1 className="font-bold text-[1.3rem] ml-[6rem] max-sm:text-[1rem]">
                Page Ranking
              </h1>
              <div className="absolute w-[80px] h-[80px] max-sm:w-[60px] max-sm:h-[60px] flex justify-center items-center border-[1px] border-[#CFCFCF]/80 bg-white bottom-0 translate-y-2/4 rounded-full">
                <PageRaking />
              </div>
            </div>
            <span className="ml-[6rem] mt-[1rem] text-[1rem] text-secondary_black-950/60 max-sm:text-[.8rem]">
              Rankeamento do site no google deixando assim o seu site em evidência nas
              pesquisas.
            </span>
          </div>
          <div className="w-[90%] flex flex-col items-start content">
            <div className="w-full border-b-[1px] border-[#CFCFCF]/80 relative">
              <h1 className="font-bold text-[1.3rem] ml-[6rem] max-sm:text-[1rem]">
                Site Optimization
              </h1>
              <div className="absolute w-[80px] h-[80px] max-sm:w-[60px] max-sm:h-[60px] flex justify-center items-center border-[1px] border-[#CFCFCF]/80 bg-white bottom-0 translate-y-2/4 rounded-full">
                <EngrenagemBene />
              </div>
            </div>
            <span className="ml-[6rem] mt-[1rem] text-[1rem] text-secondary_black-950/60 max-sm:text-[.8rem]">
              Otimização da página deixando-a mais rápida e navegável ao usuário.
            </span>
          </div>
          <div className="w-[90%] flex flex-col items-start content">
            <div className="w-full border-b-[1px] border-[#CFCFCF]/80 relative">
              <h1 className="font-bold text-[1.3rem] ml-[6rem] max-sm:text-[1rem]">
                Reporting & Analysis
              </h1>
              <div className="absolute w-[80px] h-[80px] max-sm:w-[60px] max-sm:h-[60px] flex justify-center items-center border-[1px] border-[#CFCFCF]/80 bg-white bottom-0 translate-y-2/4 rounded-full">
                <Pizza />
              </div>
            </div>
            <span className="ml-[6rem] mt-[1rem] text-[1rem] text-secondary_black-950/60 max-sm:text-[.8rem]">
              Melhores análises e resultados de quem esta acessando a sua página através
              da gestão de trafego.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beneficios;
