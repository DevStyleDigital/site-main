import { StaticImageData } from 'next/image'
import { Stacks } from './stacks'

export interface iProjects {
  id: number
  title: string
  type: string
  comment: string
  img: StaticImageData
  color: string
  order: number
  hash: string
  client: string
  duration: number
  commit: number
  bgColor: string
  link?: string
  stacks : Stacks[]
}
