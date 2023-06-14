import { StaticImageData } from "next/image";

export interface iProjects {
    id: number;
    title: string;
    type: string;
    comment: string;
    img: StaticImageData
}