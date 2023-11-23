'use client'
import { useFormateDate } from "@/hooks/formateDate"
import Image from "next/image"
import Link from "next/link"

const Posts = ({AllPosts}: {AllPosts : any}) => {
    return (
        <section className="w-full bg-[#FAFBFC] flex flex-col items-center py-10 gap-10"> 
            <div className="w-[70%] max-[1600px]:w-[80%] max-xl:w-[90%] max-sm:w-[95%] h-full gap-10 grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
                {AllPosts.map((blogPost: any) => {
                    return (
                        <Link href={`/blog/${blogPost.id}`} key={blogPost.id} className="w-full min-h-[460px] max-sm:min-h-0 max-sm:h-fit bg-white h-full border border-[#E8E8EA] p-4 rounded-xl flex flex-col gap-5">
                            <div className="w-full min-h-[250px] max-sm:h-[250px] overflow-hidden rounded-xl bg-black">
                                <Image src={blogPost.banner.url} alt="banner" width={2800} height={1200} className="w-full h-full object-cover"></Image>
                            </div>
                            <div className="w-full h-full justify-between flex flex-col px-2 gap-4 max-sm:gap-8">
                                <div className="flex flex-col gap-2">
                                    <span className="w-fit px-2 py-1 bg-[#4B6BFB]/5 rounded-sm text-[#4B6BFB] text-sm">{blogPost.type}</span>
                                    <h2 className="font-bold text-2xl max-w-[70%] break-words text-secondary_black-950 max-[1600px]:text-xl max-[1600px]:max-w-[90%]">{blogPost.title}</h2>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-2 items-center">
                                        <div className="w-10 h-10 max-sm:w-6 max-sm:h-6 bg-black rounded-full overflow-hidden">
                                            <Image src={blogPost.bannerAutor.url} width={200} height={200} alt="imageAutor" className="w-full h-full object-cover"></Image>
                                        </div>
                                        <span className="font-medium text-sm text-black/60 max-sm:text-xs">{blogPost.autor}</span>
                                    </div>
                                    <span className="font-medium text-sm text-black/60 ml-10 max-sm:text-xs">{useFormateDate(blogPost.created_at)}</span>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Posts