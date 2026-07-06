import MarqueeSkill from "../Components/MarqueeSkill";
import image1 from "../assets/img1.jpg";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img3.jpg";
import image4 from "../assets/img4.jpg";
import image5 from "../assets/img5.jpg";
const MENU_CONFIG = {
  title: "A unique experience",
  description: "we craft experiences. Using fresh ingredients, rich sauces, and authentic recipes. From oven to table in minutes, always fresh, always hot. Quality you can taste in every bite.",
  marqueeSpeed: 50,
  images: [image1, image2, image3, image4, image5],
  reverseImages: [image5, image3, image1, image2, image4],
  buttonText: "EXPLORE MENU",
};

export default function MenuSection({titlemenu,paramenu}) {
  return (
    <section className="py-stack-lg bg-black relative z-10" id="menu">
      <div className="text-center">
        <div className="font-Cause font-thin text-2xl md:text-6xl text-gray-200/90 uppercase tracking-widest" ref={titlemenu}>
          {MENU_CONFIG.title}
        </div>
        <p className="font-body-md text-gray-300/50 max-w-2xl mx-auto pt-4 text-xs md:text-sm" ref={paramenu}>
          {MENU_CONFIG.description}
        </p>
      </div>
      <div className="mt-12 text-gray-100 flex flex-col gap-3 relative">
        <MarqueeSkill images={MENU_CONFIG.images} speed={MENU_CONFIG.marqueeSpeed} />
        <MarqueeSkill images={MENU_CONFIG.reverseImages} speed={MENU_CONFIG.marqueeSpeed} reverse />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 btn">
          <div className="overlay absolute left-0 top-0 w-full h-full bg-white -z-10 transform duration-500 origin-center"></div>
          <button className="relative text-sm z-100  border-1 py-2 px-5.5 border-gray-100/60 bg-black/30 hover:bg-transparent tracking-widest transition-all duration-300 hover:text-black">
            {MENU_CONFIG.buttonText}
          </button>
        </div>
      </div>
    </section>
  );
}
