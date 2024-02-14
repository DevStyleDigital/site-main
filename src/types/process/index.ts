import { StaticImageData } from 'next/image';

export interface iProcess {
  id: number;
  title: string;
  label: string;
  icon: StaticImageData;
}
