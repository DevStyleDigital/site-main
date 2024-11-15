import IconProx from '@/assets/svg/iconProx';
import SocialSvg from '@/assets/svg/social';
import Button from '@/components/button';
import CardSocial from '@/components/cardSocial';
import { HeaderSection } from '@/components/titleSection';

const SocialSection = () => {
  return (
    <section className="w-full flex justify-center h-fit bg-process ">
      <div className="w-[60%] h-full flex flex-col py-[6rem] gap-[4rem] max-lg:w-[90%] max-2xl:w-[70%] ">
        <HeaderSection.Root>
          <div className="flex items-center gap-[2rem] max-md:gap-[1rem]">
            <HeaderSection.Icon bgColor="#292930">
              <SocialSvg />
            </HeaderSection.Icon>
            <div className="flex flex-col gap-[.5rem]">
              <HeaderSection.Path dark>
                <span className="font-extrabold text-[1rem] tracking-widest text-[#5956E8]">
                  {'//'}
                </span>{' '}
                04 . Redes Sociais
              </HeaderSection.Path>
              <HeaderSection.Title asChild>
                <h1 className="text-[1.4rem] font-semibold text-[#292930] leading-tight max-md:text-[1rem]">
                  Siga a Nesxp e não perca nenhuma novidade
                </h1>
              </HeaderSection.Title>
            </div>
          </div>
          <div className="max-sm:hidden">
            <Button
              href="https://wa.me/5515988045279?text=Ol%C3%A1%2C+vim+do+site+Nesxp."
              fill
            >
              Veja mais <IconProx />
            </Button>
          </div>
        </HeaderSection.Root>
        <CardSocial />
      </div>
    </section>
  );
};

export default SocialSection;
