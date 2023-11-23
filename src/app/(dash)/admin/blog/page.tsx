import { BlogCards } from "@/components/app/admin/blogCards"
import { getPartialOfPosts } from "@/utils/posts-func"
import Link from "next/link"

export const metadata = {
    title: 'Blog | Admin',
}


const BlogAdmin = async () => {
    const AllPosts = await getPartialOfPosts()

    return (
            <section className="w-full min-h-[100vh] bg-[#FAFBFC] p-10 max-sm:p-4 max-lg:mt-10 max-sm:mt-16 flex flex-col gap-10">
                <div className="flex justify-between items-center">
                    <h1 className="w-full h-full font-bold text-lg text-[#141624]">
                        Blog Posts
                    </h1>
                    <Link href={'blog/create'} className="w-fit bg-[#141624] text-white px-5 py-2 font-bold rounded-md transition-all  hover:bg-[#141624]/80">Cadastrar</Link>
                </div>
                <BlogCards allPosts={AllPosts} />
            </section>

    )
}

export default BlogAdmin