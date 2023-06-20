import { StaticImageData } from "next/image"

export interface iFollows {
  id: number
  label: string
  link: string
  name:string
  logo: StaticImageData
  img: StaticImageData
}
