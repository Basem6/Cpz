import { useEffect, useRef } from "react";
import { gsap, ScrollSmoother, ScrollTrigger, Observer } from "../animations/gsapSetup";

export function useScrollSmoother() {
  const smootherRef = useRef(null);
  const xToRef = useRef(null);
  const yToRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      if (smootherRef.current) {
        return () => {};
      }

      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2,
        effects: true,
      });

      smootherRef.current = smoother;

      const cursor = document.getElementById("mouse-cursor");
      if (cursor) {
        xToRef.current = gsap.quickTo(cursor, "x", { duration: 0.3 });
        yToRef.current = gsap.quickTo(cursor, "y", { duration: 0.3 });
      }

      const observer = Observer.create({
        target: window,
        type: "pointer",
        onMove: (self) => {
          xToRef.current?.(self.x);
          yToRef.current?.(self.y);
        },
      });
      const refreshScrollTrigger = () => ScrollTrigger.refresh();
      const imageLoadPromises = Array.from(document.images).map((image) =>
        image.complete
          ? Promise.resolve()
          : new Promise((resolve) => image.addEventListener("load", resolve, { once: true }))
      );

      Promise.all(imageLoadPromises).then(refreshScrollTrigger).catch(() => {});
      window.addEventListener("load", refreshScrollTrigger);

      return () => {
        observer.kill();
        window.removeEventListener("load", refreshScrollTrigger);
        if (smootherRef.current) {
          smootherRef.current.kill();
          smootherRef.current = null;
        }
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return smootherRef;
}
