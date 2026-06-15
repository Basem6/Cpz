import { useCallback } from "react";
import { gsap, ScrollToPlugin } from "../animations/gsapSetup";

export function useScrollToSection(getSmoother) {
  return useCallback(
    (sectionId) => {
      const smoother = getSmoother?.current;
      if (!smoother) {
        gsap.to(window, {
          scrollTo: `#${sectionId}`,
          duration: 1.2,
          ease: "power3.inOut",
        });
        return;
      }

      smoother.scrollTo(`#${sectionId}`, true, "top top");
    },
    [getSmoother]
  );
}
