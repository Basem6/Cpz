import "./App.css";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import MouseCursor from "./components/MouseCursor";
import HeroSection from "./sections/HeroSection";
import MenuSection from "./sections/MenuSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import ImageSlidesSection from "./sections/ImageSlidesSection";
import GallerySection from "./sections/GallerySection";
import { useScrollSmoother } from "./hooks/useScrollSmoother";
import { useScrollToSection } from "./hooks/useScrollToSection";
import { useImageSlidesAnimation } from "./hooks/useImageSlidesAnimation";
import { useFinalAnimation } from "./hooks/useFinalAnimation";
import { useHeroAnimation } from "./hooks/useHeroAnimation";
import { useGalleryAnimation } from "./hooks/useGalleryAnimation";

export default function App() {
  const smootherRef = useScrollSmoother();
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const mainphoto= useRef(null);
  const lefttop= useRef(null);
  const leftbot= useRef(null);
  const righttop= useRef(null);
  const rightbot= useRef(null);
  const finalRef = useRef(null);
  const heroRef = useRef(null);
  const text = useRef(null);
  const paramenu = useRef(null);
  const titlemenu= useRef(null);
  const overlay = useRef(null);
  const para = useRef(null);


  const scrollToSection = useScrollToSection(smootherRef);

  useHeroAnimation({heroRef , titlemenu , paramenu});
  useImageSlidesAnimation(sectionRef);
  useFinalAnimation(finalRef);
  useGalleryAnimation({containerRef , mainphoto , lefttop , leftbot ,righttop , rightbot , text, overlay , para})

  return (
    <>
    <MouseCursor />
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="App relative">
          <div id="particle-container"></div>
          <Navbar onSectionClick={scrollToSection} />
          <HeroSection heroRef={heroRef} />
          <MenuSection titlemenu={titlemenu} paramenu={paramenu} />
          <TestimonialsSection />
          <ImageSlidesSection sectionRef={sectionRef} />
          <GallerySection
            containerRef={containerRef}
            mainphoto={mainphoto}
            lefttop={lefttop}
            leftbot={leftbot}
            righttop={righttop}
            rightbot={rightbot}
            text={text}
            overlay={overlay}
            para={para}
          />
        </div>
      </div>
    </div>
    </>
  );
}


