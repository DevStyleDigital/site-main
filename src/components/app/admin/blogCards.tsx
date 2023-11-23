'use client'
import { useFormateDate } from "@/hooks/formateDate";
import { deletePost } from "@/utils/posts-func";
import { Pencil2Icon, TrashIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const BlogCards = ({allPosts} : {allPosts : any}) => {
    const router = useRouter();
    const [client, setClient] = useState(true)

    useEffect(() => {
        setClient(false)
    }, [allPosts])


    if (client) return

    return(
        <div className="w-full grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10"> 
            {allPosts.map((blogPost: any) => {
                    return (
                        <div key={blogPost.id} className="w-full min-h-[460px] max-sm:min-h-0 max-sm:h-fit bg-white h-full border border-[#E8E8EA] p-4 rounded-xl flex flex-col gap-5 ">
                            <div className="w-full min-h-[250px] max-sm:h-[250px] overflow-hidden rounded-xl bg-black">
                                <Image src={`${blogPost.banner.url}?${Date.now()}`} alt="banner" width={2800} height={1200} className="w-full h-full object-cover"></Image>
                            </div>
                            <div className="w-full h-full justify-between flex flex-col px-2 gap-4 max-sm:gap-8">
                                <div className="flex flex-col gap-2">
                                    <span className="w-fit px-2 py-1 bg-[#4B6BFB]/5 rounded-sm text-[#4B6BFB] text-sm">{blogPost.type}</span>
                                    <h2 className="font-bold text-xl max-w-[90%] break-words text-secondary_black-950">{blogPost.title}</h2>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-full flex justify-between items-center">
                                        <div className="flex gap-2">
                                            <div className="w-10 h-10 max-sm:w-6 max-sm:h-6 bg-black rounded-full overflow-hidden">
                                                <Image src={`${blogPost.bannerAutor.url}?${Date.now()}`} width={200} height={200} alt="imageAutor" className="w-full h-full object-cover"></Image>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-medium text-sm text-black/60 max-sm:text-xs">{blogPost.autor}</span>
                                                <span className="font-medium text-black/40 text-xs">{useFormateDate(blogPost.created_at)}</span>
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <Link href={`blog/${blogPost.id}`}><Pencil2Icon className="w-5 h-5" /></Link>
                                            <button  onClick={() => {
                                                deletePost(blogPost.id)
                                                    .then(() => {
                                                        router.refresh();
                                                        toast.success('Post deletado com sucesso!');
                                                    })
                                                    .catch(() =>
                                                        toast.error(
                                                            'Ocorreu um erro ao deletar o Post! Tente novamente mais tarde.',
                                                        ),
                                                    );
                                            }}>
                                                
                                                <TrashIcon className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    )
            })}
        </div>
    )
}