import ProjectsIcon from '@/assets/svg/projects';
import { HeaderSection } from '@/components/titleSection';
import AnimationCards from '../animation';

const ProjectsSection = () => {
  return (
    <section className="w-full h-fit flex justify-center py-[4rem] max-sm:py-[2rem] px-[3rem]  max-md:px-[1rem] z-50">
      <div className="w-[80%] flex flex-col gap-[2.5rem] overflow-hidden min-[2000px]:w-[60%] items-center max-2xl:w-[95%] max-[1150px]:w-[70%] max-[850px]:w-[80%] max-sm:w-[90%]">
        <HeaderSection.Root>
          <div className="flex flex-col items-center gap-[1rem]">
            <HeaderSection.Icon bgColor="#F96A4B">
              <ProjectsIcon />
            </HeaderSection.Icon>
            <HeaderSection.Path dark>
              <span className="font-extrabold text-[1rem] tracking-widest text-[#5956E8]">
                {'//'}
              </span>{' '}
              01 . Case Studies
            </HeaderSection.Path>
            <HeaderSection.Title asChild>
              <h1 className="text-[1.4rem] text-black font-medium leading-tight">
                Nosso studio de projetos
              </h1>
            </HeaderSection.Title>
          </div>
        </HeaderSection.Root>
        <AnimationCards />
      </div>
    </section>
  );
};

export default ProjectsSection;
