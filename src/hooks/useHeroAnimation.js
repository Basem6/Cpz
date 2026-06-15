import { useEffect } from "react";
import { gsap } from "../animations/gsapSetup";
import { SplitText } from "gsap/all";
export function useHeroAnimation({heroRef , titlemenu , paramenu}) {
  useEffect(() => {
    const splitpara = SplitText.create(titlemenu.current,{
          type: "lines",
          mask:"lines"
      })
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current.querySelector(".hero-overlay"),
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
          },
        }
      );
      const time=gsap.timeline({ 
        scrollTrigger:{
        trigger:heroRef.current,
        start:"center center"
        },
        defaults:{
          duration:1,
          ease:"power2.inOut"
        }
      }
      )
      time.from(splitpara.lines,{
      yPercent:100,
      },0)
      time.from(paramenu.current,{
        opacity:0
      },"-=0.6")
    }, [heroRef , titlemenu , paramenu]);

    return () => ctx.revert();
  }, [heroRef , titlemenu , paramenu]);
}
