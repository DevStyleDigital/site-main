import { StaticImageData } from "next/image";
import React from "react";

export interface iProcessVisual {
    id: number;
    text: string;
    title: string;
    img: StaticImageData;
}