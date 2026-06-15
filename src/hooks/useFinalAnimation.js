import { useEffect } from "react";
import { gsap } from "../animations/gsapSetup";

export function useFinalAnimation(finalRef) {
  useEffect(() => {
    if (!finalRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(finalRef.current, {
        opacity: 0,
        y: 40,
        scale: 0.9,
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: finalRef.current,
          start: "top bottom",
        },
      });
    }, finalRef);

    return () => ctx.revert();
  }, [finalRef]);
}
