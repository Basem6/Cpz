import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
export default function ImageSlidesSection({ sectionRef }) {
  return (
    <div>
    <section ref={sectionRef} className="relative min-h-screen hidden lg:block overflow-hidden" id="showcase">
      <div className="relative min-h-screen min-w-full overflow-hidden">
        <div className="absolute inset-0">
          <div className="min-h-screen min-w-full absolute top-0 left-0 slide z-3">
            <img src={slide1} alt="Slide 1" />
          </div>
          <div className="min-h-screen min-w-full absolute top-0 left-0 slide z-2">
            <img src={slide2} alt="Slide 2" />
          </div>
          <div className="min-h-screen min-w-full absolute top-0 left-0 slide z-1">
            <img src={slide3} alt="Slide 3" />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
