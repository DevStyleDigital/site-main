import HeaderAnimationService from '@/components/app/pages/service/header';
import { SideBarFundo } from '@/components/app/sidebar';
import ToTop from '@/components/toTop';
import ServicesSection from '@/components/app/pages/section/services';
import HeroStart from '@/components/app/pages/service/heroStart';

export const metadata = {
  title: 'Serviços | DevStyle',
};

const Servicos = () => {
  return (
    <>
      <SideBarFundo />
      <main className="w-full flex flex-col items-center">
        <ToTop />
        <HeaderAnimationService />
        <ServicesSection isPage={true} />
        <HeroStart />
      </main>
    </>
  );
};

export default Servicos;
