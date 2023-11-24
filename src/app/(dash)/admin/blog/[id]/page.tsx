import { getPostsById } from "@/utils/posts-func";
import { supabase } from "@/services/supabase";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PostsForm } from "./posts-form";

export const dynamicParams = false;

export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Create Post | Admin',
}


export async function generateStaticParams() {
  const posts = await supabase.from('blog').select('id');
  return [{ id: 'create' }, ...(posts.data || [])];
}

const CreatePost: BTypes.NPage<{ params: { id: string } }, true> = async ({ params }) => {
    let posts = undefined;
  
    if (params.id !== 'create') posts = await getPostsById(params.id);
    if (params.id !== 'create' && !posts) return notFound();
  
  
    return (
      <>
        <section className="w-full min-h-[100vh] bg-[#FAFBFC] p-10 max-sm:p-4 max-lg:mt-10 max-sm:mt-16 flex flex-col gap-10">
          <Link
            href="/admin/blog"
            className="flex items-center hover:underline underline-offset-2"
          >
            Voltar
          </Link>
          <PostsForm  id={params.id} posts={posts as any} />
        </section>
      </>
    );
  };
  
  export default CreatePost;