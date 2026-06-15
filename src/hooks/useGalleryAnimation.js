import { useEffect } from "react";
import { gsap } from "../animations/gsapSetup";
import {  SplitText } from "../animations/gsapSetup";
export function useGalleryAnimation({ containerRef , mainphoto ,lefttop , leftbot ,righttop , rightbot , text , overlay , para} ) {
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
        const split = SplitText.create(text.current,{
          type: "words",
          autoSplit:true
      })
      const splitpara = SplitText.create(para.current,{
          type: "words",
          autoSplit:true
      })
      const timeline =gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          start: "top top",
          end: "5000px",
          scrub: true,
          pinSpacing: true,
        },
        defaults: {
          duration: 0.8,
          ease: "none",
          borderRadius:"19px",
          scaleY:0.97,
          scaleX:1.02,
        },
      });
      gsap.to(split.words,{
        scrollTrigger:{
          trigger: containerRef.current,
          toggleActions:"reverse play play reverse"
        },
        delay:0.4,
        opacity:0,
        stagger:0.2,
        ease:-1,
        duration:0.3
      })
      timeline.to(mainphoto.current,{
        scaleX:0.5,
        filter: "brightness(1)",
      },0)
      timeline.to(leftbot.current,{
        left:10
      },"-=0.8")
      timeline.to(lefttop.current,{
        left:10
        
      },"<")
      timeline.to(righttop.current,{
        right:10
      },"<")
      timeline.to(rightbot.current,{
        right:10
      },"<")
      timeline.to(overlay.current,{
        top:0,
        borderRadius:"0px",
          scaleY:1,
          scaleX:1,
      })
    }, containerRef.current);
    return () => ctx.revert();
    })
    return () => {
      mm.revert();
    };
  }, [containerRef,mainphoto,lefttop , leftbot ,righttop , rightbot ,overlay , para] );
}
