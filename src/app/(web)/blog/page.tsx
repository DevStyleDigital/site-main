import HeroBlog from '@/components/app/pages/blog/Hero';
import Posts from '@/components/app/pages/blog/posts';
import Image from 'next/image';
import { SideBarFundo } from '@/components/app/sidebar';
import { getPartialOfPosts } from '@/utils/posts-func';
import { formateDate } from '@/hooks/formateDate';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | DevStyle',
};

const Blog = async () => {
  const AllPosts = await getPartialOfPosts();

  return (
    <>
      <SideBarFundo />
      <section className="bg-[#FAFBFC] flex-col flex gap-2">
        <HeroBlog />
        <div className="w-full h-[500px] -mt-36 relative max-sm:-mt-32 z-20 flex justify-center bg-transparent">
          <div className="w-[70%] max-[1600px]:w-[80%] max-xl:w-[90%] h-full bg-black rounded-2xl shadow-xl relative overflow-hidden">
            <Image
              src={AllPosts[AllPosts.length - 1]?.banner.url}
              alt="cover"
              width={2880}
              height={1109}
              className="w-full h-full absolute top-0 left-0 object-cover object-top"
            />
            <Link
              href={`blog/${AllPosts[AllPosts.length - 1]?.id}`}
              target="_blank"
              className="w-full h-full relative z-10 bg-[#141624]/50 flex flex-col justify-end gap-6 p-10 max-sm:p-4 cursor-pointer transition-all duration-500 hover:bg-[#141624]/80"
            >
              <span className="px-3 py-1 bg-blue-500 text-white rounded-lg w-fit">
                {AllPosts[AllPosts.length - 1]?.type}
              </span>
              <h2 className="w-[60%] font-bold text-[2rem] leading-tight text-white max-sm:w-[90%] max-sm:text-[1.2rem]">
                {AllPosts[AllPosts.length - 1]?.title}
              </h2>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 max-sm:w-6 max-sm:h-6 bg-white rounded-full overflow-hidden">
                  <Image
                    src={AllPosts[AllPosts.length - 1]?.bannerAutor.url}
                    width={200}
                    height={200}
                    alt="imageAutor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium text-white/60 max-sm:text-sm">
                  {AllPosts[AllPosts.length - 1]?.autor}
                </span>
                <span className="font-medium text-white/60 ml-10 max-sm:text-sm">
                  {formateDate(AllPosts[AllPosts.length - 1]?.created_at)}
                </span>
              </div>
            </Link>
          </div>
        </div>
        <Posts AllPosts={AllPosts} />
      </section>
    </>
  );
};

export default Blog;
