

'use client'

import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useLoading } from "../context/loadingcontext";

gsap.registerPlugin(useGSAP);



export const Loader = () => {


    const pathname = usePathname()

    const ref = useRef<HTMLDivElement | null>(null)

    const { loading, isLoading } = useLoading()


    useGSAP(() => {

        console.log("loading", loading)
        if (ref.current) {
          ref.current.style.zIndex = "5000";
        }
        if(loading){
            gsap.to(ref.current, {
              duration: 1,
              opacity: 1,
              onComplete: () => {
                isLoading(false)
              }
            });
        }else {
            gsap.to(ref.current, {
              duration: 1,
              opacity: 0,
              onComplete: () => {
                if(ref.current){
                    ref.current.style.zIndex = "-5000";
                }
              },
            });
        }
    },[loading])

    return (
        <div className="loader" ref={ref}>
            
        </div>
    )
}