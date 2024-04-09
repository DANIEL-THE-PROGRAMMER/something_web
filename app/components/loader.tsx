"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useLoading } from "../context/loadingcontext";

gsap.registerPlugin(useGSAP);

export const Loader = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { loading, isLoading } = useLoading();


  useGSAP(() => {
    if (ref.current) {
      ref.current.style.zIndex = "5000";
    }
    if (loading) {
      gsap.from(ref.current, {
        duration: 1,
        opacity: 0,
        onComplete: () => {
          if (ref.current) {
            ref.current.style.zIndex = "-5000";
          }
        },
      });

      gsap.to(ref.current, {
        duration: 1,
        opacity: 1,
        onComplete: () => {
          if (ref.current) {
            ref.current.style.zIndex = "5000";
          }
        },
      });
    }else {
        gsap.to(ref.current, {
          duration: 1,
          opacity: 0,
          onComplete: () => {
            if (ref.current) {
              ref.current.style.zIndex = "-5000";
            }
          },
        });
    }
  }, [loading]);

  return <div className="loader" ref={ref}></div>;
};
