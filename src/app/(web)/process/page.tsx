import { SideBarFundo } from "@/components/app/sidebar"
import ToTop from "@/components/toTop"
import ServicesSection from "@/components/app/pages/section/services"
import HeroStart from "@/components/app/pages/service/heroStart"
import HeaderAnimationProcess from "@/components/app/pages/process"
import ProcessSection from "@/components/app/pages/process/processSection"
import ProcessSectionPage from "@/components/app/pages/process/aboutprocess"
import ProcessRevenue from "@/components/app/pages/process/receita"

export const metadata = {
  title: 'Processos | DevStyle',
}

const Process = () => {
  return (
      <>   
        <SideBarFundo />
        <main className="w-full flex flex-col items-center">
          <ToTop />
          <HeaderAnimationProcess />
          <ProcessSection />
          <ProcessSectionPage />
          <ProcessRevenue />
        </main>
      </>
  )
}

export default Process
