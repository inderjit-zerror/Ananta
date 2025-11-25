import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);



export const HoverImageActivate = (img) =>{
    gsap.to(img,{
        scale:1.2,
        duration:0.3,
        ease:'linear'
    })
}

export const HoverImageDeActivate = (img) =>{
    gsap.to(img,{
        scale:1,
        duration:0.3,
        ease:'linear'
    })
}