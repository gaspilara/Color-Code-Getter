import { ColorModel } from "./color.model";

export const COLORS: ColorModel[] = [
    {
        hex: Math.floor(Math.random()*16777215).toString(16),
        rgb: { 
            r: Math.floor(Math.random() * 255) + 1, 
            g: Math.floor(Math.random() * 255) + 1, 
            b: Math.floor(Math.random() * 255) + 1
        }
    },
];
