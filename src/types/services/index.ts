import { StaticImageData } from "next/image";

export interface iService {
    id: number;
    label: string;
    text: string;
    image: StaticImageData;
}