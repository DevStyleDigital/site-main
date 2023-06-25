import HeaderAnimationProjects from "@/components/app/pages/projects/header"
import ProjectsSection from "@/components/app/pages/projects/projetosSection"
import { SideBarFundo } from "@/components/app/sidebar"
import ToTop from "@/components/toTop"

export const metadata = {
  title: 'Projetos | DevStyle',
}

const Projects = () => {
  return (
    <>   
      <SideBarFundo />
      <main className="w-full flex flex-col items-center">
        <ToTop />
        <HeaderAnimationProjects />
        <ProjectsSection />
      </main>
    </>
  )
}

export default Projects
