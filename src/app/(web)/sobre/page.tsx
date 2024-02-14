import Team from '@/components/app/pages/section/team';
import AboutSectionPage from '@/components/app/pages/sobre/about';
import HeaderAnimationAbout from '@/components/app/pages/sobre/header';
import SocialSection from '@/components/app/pages/sobre/sociais';
import Values from '@/components/app/pages/sobre/values';
import { SideBarFundo } from '@/components/app/sidebar';
import ResultsTag from '@/components/resultsTag';
import ToTop from '@/components/toTop';

export const metadata = {
  title: 'Sobre | DevStyle',
};

const Sobre = () => {
  return (
    <>
      <SideBarFundo />
      <main className="w-full flex flex-col items-center">
        <ToTop />
        <HeaderAnimationAbout />
        <section className="w-full h-fit flex justify-center py-[4rem] max-md:py-[2rem] bg-secondary_black-950">
          <div className="w-[60%] h-full flex max-2xl:w-[70%] max-xl:w-[80%] max-lg:w-[90%]">
            <ResultsTag />
          </div>
        </section>
        <AboutSectionPage />
        <Values />
        <Team numSection="03" />
        <SocialSection />
      </main>
    </>
  );
};

export default Sobre;
