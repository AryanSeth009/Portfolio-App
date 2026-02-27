"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function StackProvider({ children }) {
  const mainRef = useRef(null);

  useEffect(() => {
    if (!mainRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    let mm = gsap.matchMedia();

    // Only apply pinning on desktop (min-width: 768px)
    mm.add("(min-width: 768px)", () => {
      const sections = gsap.utils.toArray(".stack-section");

      sections.forEach((section, index) => {
        gsap.set(section, {
          zIndex: index + 1,
          opacity: 1,
          scale: 1,
        });
      });

      const pinnableSections = sections.filter(
        (section) => section.dataset.stackPin !== "false"
      );

      pinnableSections.forEach((section, index) => {
        if (index === pinnableSections.length - 1) return;

        gsap
          .timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${window.innerHeight}`,
              scrub: true,
              pin: true,
              pinSpacing: false,
              invalidateOnRefresh: true,
            },
          })
          .to(section, {
            scale: 0.92,
            opacity: 0.6,
            ease: "none",
          });
      });

      ScrollTrigger.refresh();
      
      return () => {
        // clean up happens automatically by matchMedia
      };
    });

    return () => {
      mm.revert(); // revert all animations and ScrollTriggers created in the matchMedia within this component
    };
  }, []);

  return <main ref={mainRef}>{children}</main>;
}
