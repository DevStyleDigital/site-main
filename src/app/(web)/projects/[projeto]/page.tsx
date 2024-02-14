import { SideBarFundo } from '@/components/app/sidebar';
import ToTop from '@/components/toTop';
import { ProjectsArray } from '@/utils/projects';
import { notFound, redirect } from 'next/navigation';
import { Metadata } from 'next';
import HeaderProject from '@/components/headerProject';

export async function generateMetadata({
  params,
}: {
  params: { projeto: string };
}): Promise<Metadata> {
  const validHash = ProjectsArray.find((project) => project.hash === params.projeto);
  return {
    title: `${validHash?.title} | DevStyle`,
  };
}

const AboutProject = ({ params }: { params: { projeto: string } }) => {
  const validHash = ProjectsArray.find((project) => project.hash === params.projeto);
  if (!validHash) notFound();
  return (
    <>
      <SideBarFundo />
      <main className="w-full flex flex-col items-center">
        <ToTop />
        <HeaderProject projeto={validHash} />
        <div className="w-full h-[60vh] max-[1100px]:h-0 bg-white" />
      </main>
    </>
  );
};

export default AboutProject;
