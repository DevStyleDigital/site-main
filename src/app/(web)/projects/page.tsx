import HeaderAnimationProjects from '@/components/app/pages/projects/header';
import ProjectsSection from '@/components/app/pages/projects/projetosSection';
import { SideBarFundo } from '@/components/app/sidebar';
import ResultsTag from '@/components/resultsTag';
import ToTop from '@/components/toTop';

export const metadata = {
  title: 'Projetos | DevStyle',
};

const Projects = () => {
  return (
    <>
      <SideBarFundo />
      <main className="w-full flex flex-col items-center">
        <ToTop />
        <HeaderAnimationProjects />
        <section className="w-full h-fit flex justify-center py-[4rem] max-md:py-[2rem] bg-secondary_black-950">
          <div className="w-[60%] h-full flex max-2xl:w-[70%] max-xl:w-[80%] max-lg:w-[90%]">
            <ResultsTag project />
          </div>
        </section>
        <ProjectsSection />
      </main>
    </>
  );
};

export default Projects;
