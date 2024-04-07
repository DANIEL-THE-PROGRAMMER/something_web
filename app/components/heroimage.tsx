
"use client"

import gsap from "gsap"
import Image from "next/image"
import { useEffect, useRef } from "react"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

export const HeroImage = ({ image } : { image: string }) => {

    
    const imageRef = useRef<HTMLImageElement | null>(null);

    useEffect(( ) => {
        const image = imageRef?.current
        const parent = imageRef?.current?.parentElement

        if(image){
            gsap.to(image, {
              yPercent: 25,
              ease: "none",
              scrollTrigger: {
                trigger: parent,
                start: "top top",
                end: "bottom top",
                scrub: !0,
              },
            });
        }
    },[])


    return (
        <Image
          src={image}
          width={0}
          height={0}
          alt="hero"
          style={{
            objectFit: "cover",
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
          }}
          sizes="100vw"
          ref={imageRef}
        />
    );
}