import IconProx from '@/assets/svg/iconProx'
import ProjectsIcon from '@/assets/svg/projects'
import Button from '@/components/button'
import ProjectCLient from '@/components/projects-client'
import ResultsTag from '@/components/resultsTag'
import { HeaderSection } from '@/components/titleSection'

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full h-fit min-h-[80vh] flex justify-center py-[4rem] bg-secondary_black-950"
    >
      <div className="w-[60%] h-full flex flex-col gap-[3rem] relative max-2xl:w-[70%] max-xl:w-[80%] max-lg:w-[90%]">
        <HeaderSection.Root>
          <div className="flex items-center gap-[2rem] max-md:gap-[1rem]">
            <HeaderSection.Icon bgColor="#F96A4B">
              <ProjectsIcon />
            </HeaderSection.Icon>
            <div className="flex flex-col gap-[.5rem]">
              <HeaderSection.Path>
                <span className="font-extrabold text-[1rem] tracking-widest text-[#FEC90C]">
                  //
                </span>{' '}
                05 . Projetos
              </HeaderSection.Path>
              <HeaderSection.Title asChild>
                <h1 className="text-[1.4rem] font-semibold text-white leading-tight max-md:text-[1rem]">
                  Studio de projetos finalizados
                </h1>
              </HeaderSection.Title>
            </div>
          </div>
          <div className="max-sm:hidden">
            <Button href="https://wa.me/5515988045279?text=Ol%C3%A1%2C+vim+do+site+DevStyle." fill light>
              Veja mais <IconProx />
            </Button>
          </div>
        </HeaderSection.Root>
        <ProjectCLient />
        <div className="w-full h-[2px] bg-[#CFCFCF]/20"></div>
        <ResultsTag />
      </div>
    </section>
  )
}

export default Projects
