'use client'
import InstagramIcon from '@/assets/svg/Instagram'
import LinkedinIcon from '@/assets/svg/Linkedin'
import GitHubIcon from '@/assets/svg/github'
import { useFormateDate } from '@/hooks/formateDate'
import { TeamArray } from '@/utils/team'
import { motion } from 'framer-motion' 
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const HeaderBlog = ({post, colors} : {post: any, colors:string}) => {
    const [person, setPerson] = useState<any>([])

    useEffect(() =>{
        getCarrer(post.autor)
    }, [post])

    function getCarrer(name: string){
      const carrer =  TeamArray.filter((team:any) => team.name === name)
      return setPerson(carrer[0])
    }
    return (
        <motion.section className={`w-full h-fit flex pt-[120px] pb-[60px] justify-center min-h-[90vh]  relative px-5`}>
            <div className={'w-full h-1/3 absolute max-sm:h-1/5 top-0 left-0'} style={{background: colors}}></div>
            <div className='w-full relative z-[1] flex py-10 justify-center'>
                <div className='max-w-[1400px] w-full flex flex-col gap-6'>
                    <div className='w-full flex gap-10 items-center'>
                        <div className='border border-secondary_black-950 rounded-full font-medium px-3 py-1 text-secondary_black-950'>{post.type}</div>
                        <span className='text-secondary_black-950 font-medium'>{useFormateDate(post.created_at)}</span>
                    </div>
                    <h1 className='font-bold text-4xl'>{post.title}</h1>
                    <div className='w-full h-[600px] rounded-lg overflow-hidden'>
                        <Image src={post.banner.url} alt="banner" width={2800} height={1200} className="w-full h-full object-cover" />
                    </div>
                    <div className='w-full flex justify-between items-center max-md:flex-col max-md:gap-5'>
                        <div className='flex gap-5 items-center'>
                            <div className="w-14 h-14 max-sm:w-6 max-sm:h-6 bg-black rounded-full overflow-hidden">
                                <Image src={post.bannerAutor.url} width={200} height={200} alt="imageAutor" className="w-full h-full object-cover"></Image>
                            </div>
                            <div className='flex flex-col'>
                                <span className="font-medium text-lg text-black/90 max-sm:text-sm">{post.autor}</span>
                                <span className="font-medium text-sm text-[#555555]/70 max-sm:text-sm">{person.carer}</span>
                            </div>
                        </div>
                        <div className="flex gap-[1rem] mt-[.5rem]">
                            {person.linkedin && (
                            <Link
                                aria-label='linkedin'
                                href={person.linkedin}
                                target='_blank'
                                className="transition-all hover:scale-[1.2]"
                            >
                                <LinkedinIcon />
                            </Link>
                            )}
                            {person.instagram && (
                            <Link
                                aria-label='instagram'
                                href={person.instagram}
                                target='_blank'
                                className="transition-all hover:scale-[1.2]"
                            >
                                <InstagramIcon />
                            </Link>
                            )}
                            {person.github && (
                            <Link
                                aria-label='github'
                                href={person.github}
                                target='_blank'
                                className="transition-all hover:scale-[1.2]"
                            >
                                <GitHubIcon />
                            </Link>
                            )}
                        </div>
                    </div>
                    <span className='w-full h-[2px] bg-[#555555]/20 rounded-full'></span>
                    <div className='w-full' dangerouslySetInnerHTML={{ __html: post.content }}>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default HeaderBlog