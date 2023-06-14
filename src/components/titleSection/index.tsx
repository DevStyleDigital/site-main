import { ReactNode } from "react"
import { Slot } from '@radix-ui/react-slot';
import clsx from "clsx";

const Root = ({children, divider, ...props}: {children: ReactNode, divider?: boolean, className?:string}) => {
    return (
        <div className={clsx(`flex justify-between items-center ${props.className}`, {
            'border-b-[1px] border-[#CFCFCF]/80' : divider
        })}>{children}</div>
    )
}

const Title = ({ children, asChild, ...props }:  {children:ReactNode, asChild: any}) => {
    const TitleHeader = asChild ? Slot : 'h1';
    return (
        <TitleHeader {...props}>{children}</TitleHeader>
    )
}

const PathName = ({children, dark }: {children: ReactNode, dark?: boolean}) => {
    return(
        <span className={clsx('font-medium uppercase text-[.8rem] tracking-[0.135em] text-white/80 max-lg:text-[.6rem]', 
        {
            '!text-secondary_black-950' : dark
        })}>{children}</span> 
    )
} 

const Icon = ({children, bgColor}: {children : ReactNode, bgColor: string}) => {
    return (
        <div className="p-[1.3rem] rounded-full flex justify-center items-center text-white max-lg:p-[1rem] max-md:p-[.8rem]" style={{backgroundColor: `${bgColor}`}}>{children}</div>
    )
}

export const HeaderSection = {
    Root,
    Title,
    Path: PathName,
    Icon,    
}
