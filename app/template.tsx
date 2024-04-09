"use client";

import { useState, useEffect, useRef } from "react";
import { useLoading } from "./context/loadingcontext";
import { Loader } from "./components/loader";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function Template({ children }: { children: React.ReactNode }) {
  const [tLoading, TisLoading] = useState<boolean>(true);
  const { loading, isLoading } = useLoading()

  

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(( ) => {
    if(loading) isLoading(false) 
  },[])

  useGSAP(() => {
    if (ref.current) {
      ref.current.style.zIndex = "5000";
    }
    if (tLoading) {
      gsap.from(ref.current, {
        duration: 1,
        opacity: 1,
        onComplete: () => {
          if (ref.current) {
            ref.current.style.zIndex = "5000";
          }
        },
      });

      gsap.to(ref.current, {
        duration: 1,
        opacity: 0,
        onComplete: () => {
          if (ref.current) {
            ref.current.style.zIndex = "-5000";
          }
          TisLoading(false)
        },
      });
    }
  }, []);
  
  return (
    <>
      <div className="loader" ref={ref}></div>
      {children}
    </>
  );
}
