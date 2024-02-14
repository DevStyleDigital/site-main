import { StaticImageData } from 'next/image';

export interface iTeams {
  id: number;
  name: string;
  carer: string;
  img: StaticImageData;
  instagram?: string;
  github?: string;
  linkedin?: string;
}
