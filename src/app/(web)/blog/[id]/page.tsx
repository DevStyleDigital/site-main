import HeaderBlog from '@/components/app/pages/blog/headerBlog';
import { SideBarFundo } from '@/components/app/sidebar';
import { getPostsById } from '@/utils/posts-func';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Blog | Nesxp',
};

const Post = async ({ params }: { params: { id: string } }) => {
  const post = await getPostsById(params.id);
  const colors = [
    'linear-gradient(111.23deg, #F9F6DA 9.95%, #E2D5FF 85.17%)',
    'linear-gradient(140deg, #CFD4FF 0%, #FFFFFD 100%)',
    'linear-gradient(111.23deg, #E9F7FF 9.95%, #FFDBD5 85.17%)',
    'linear-gradient(140deg, #CFD4FF 0%, #FFFFFD 100%)',
  ];
  const randomElement = colors[Math.floor(Math.random() * colors.length)];
  if (!post) notFound();
  return (
    <>
      <SideBarFundo />
      <section className="w-full min-h-[90vh] flex flex-col items-center">
        <HeaderBlog post={post} colors={randomElement} />
      </section>
    </>
  );
};

export default Post;
