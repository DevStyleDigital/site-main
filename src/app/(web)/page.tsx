import HeaderAnimation from '@/components/app/HeaderAnimation'
import Footer from '@/components/app/footer'
import AboutSection from '@/components/app/pages/section/about'
import Beneficios from '@/components/app/pages/section/beneficio'
import Process from '@/components/app/pages/section/process'
import Projects from '@/components/app/pages/section/projects'
import ServicesSection from '@/components/app/pages/section/services'
import Team from '@/components/app/pages/section/team'
import Witness from '@/components/app/pages/section/witness'
import { SideBarFundo } from '@/components/app/sidebar'
import ToTop from '@/components/toTop'

export const metadata = {
  title: 'Início | DevStyle',
}

export default function Home() {
  return (
    <>
      <SideBarFundo />
      <main className="w-full flex flex-col items-center">
        <ToTop />
        <HeaderAnimation />
        <ServicesSection />
        <AboutSection />
        <Process />
        <Witness />
        <Projects />
        <Team numSection="06"/>
        <Beneficios />
      </main>
    </>
  )
}
