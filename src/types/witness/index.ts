import { StaticImageData } from "next/image";

export interface iWitness {
    id: number;
    companyName: string;
    authorName: string;
    autorImage?: string;
    companyImage: StaticImageData;
    authorcareer:  string;
    commented: string;
}