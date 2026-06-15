import main from "../assets/an.jpg"
import main2 from "../assets/an2.jpg"
import main3 from "../assets/an3.jpg"
export default function GallerySection({containerRef,mainphoto , lefttop , leftbot , righttop , rightbot , text ,overlay , para}) {
  return (
    <section   className="lg:block hidden relative overflow-hidden min-h-screen min-w-full bg-black" id="gallery">
      <section className="pt-24 bg-black overflow-hidden" aria-label="testimonial quote">
        <div className="max-w-6xl mx-auto px-margin-mobile text-center">
          <span className="material-symbols-outlined text-primary text-6xl mb-8 opacity-50 scroll-reveal">
            98
          </span>
          <div className="relative overflow-hidden cursor-grab active:cursor-grabbing" id="testimonial-container">
            <div className="flex transition-transform duration-500" id="testimonial-track">
              <div className="min-w-full px-4 testimonial-slide">
                <p className="font-display-lg text-display-lg-mobile italic text-on-surface mb-8">
                  “From kitchen to table, perfection in every step
                  Real taste, real ingredients.”
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
        <div className="w-full max-h-screen overflow-hidden mt-5 relative flex justify-center bg-black" ref={containerRef}>
          <div className="max-h-full  min-w-full relative bg-black">
          <img src={main} alt="" className="max-h-full  w-full brightness-75 object-fill " ref={mainphoto}/>
          <div ref={text} className="text-7xl font-bold text-center font-display-lg text-display-lg-mobile italic z-40 absolute left-1/2 top-20 -translate-x-1/2">
          An Interior Worth  <br></br> Experiencing
          </div>
          </div>
          <img src={main2} alt=""className="absolute w-90 max-h-92 z-10 top-0 -left-1/2" ref={lefttop}  />
          <img src={main3} alt=""className="absolute w-90 max-h-92  z-10 top-0 -right-1/2" ref={righttop} />
          <img src={main3} alt=""className="absolute w-90 max-h-92  z-10 bottom-0 -left-1/2" ref={leftbot} />
          <img src={main2} alt=""className="absolute w-90 max-h-92 z-10 bottom-0 -right-1/2"  ref={rightbot}/>
          <div className="absolute pt-30 text-center text-primary px-40  left-0 -bottom-1/1 min-w-full max-h-full z-50  bg-background " ref={overlay} >
          <h1 className="text-7xl pb-5 font-[Ole]">Thank You for Dining With Us</h1>
          <p ref={para} className="text-3xl leading-relaxed font-display-lg text-display-lg-mobile italic">very meal we serve is prepared with fresh ingredients, attention to detail, and a passion for creating unforgettable moments. Whether you're here for a quick lunch, a family dinner, or a special celebration, our goal is always the same—to make you feel welcome from the moment you arrive until the last bite.Every pizza leaves the oven with care. Every ingredient is selected for its quality. Every guest is welcomed like family. Together, these simple moments create something extraordinary—an experience that stays with you long after the last slice.
        This isn't just a restaurant. It's a place where memories are made, friendships grow stronger, and every visit feels like coming home.</p>
        
          </div>
        </div>
      </section>
      </section>
  );
}
