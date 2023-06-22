import { SideBarFundo } from "@/components/app/sidebar"
import ToTop from "@/components/toTop"
import ServicesSection from "@/components/app/pages/section/services"
import HeroStart from "@/components/app/pages/service/heroStart"
import HeaderAnimationProcess from "@/components/app/pages/process"
import ProcessSection from "@/components/app/pages/process/processSection"

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
          <HeroStart />
        </main>
      </>
  )
}

export default Process
