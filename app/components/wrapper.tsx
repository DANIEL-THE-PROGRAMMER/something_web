"use client";

import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const StaggeredWrapper = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLSpanElement | null>(null);


  useGSAP(() => {
    gsap.set(ref.current?.children as any, {
      opacity: 0,
      y: 40,
    });


    ScrollTrigger.batch(ref.current?.children as any, {
      start: "33% bottom",
      onEnter: function (e) {
        gsap.to(e, {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.inOut",
        });
      },
      once: !0,
    });
  });

  

  return (
    <span style={{ display: "inline-block" }} ref={ref}>
      {children}
    </span>
  );
};



