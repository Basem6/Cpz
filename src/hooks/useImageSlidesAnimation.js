import { useEffect } from "react";
import { gsap } from "../animations/gsapSetup";

export function useImageSlidesAnimation(sectionRef) {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".slide");
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${1000 * slides.length}px`,
          pin: true,
          scrub: true,
          pinSpacing: true,
        },
        ease: "none",
      });

      slides.forEach((slide, index) => {
        if (index === slides.length - 1) return;
        timeline.to(slide, {
          clipPath: "inset(0% 0% 100% 0%)",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
    })
    return () => {
      mm.revert();
    };
  }, [sectionRef]);
}
