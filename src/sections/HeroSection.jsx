export default function HeroSection({ heroRef }) {
  return (
    <section ref={heroRef} className="relative min-h-50 lg:min-h-screen flex items-center justify-center overflow-hidden" id="hero">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10 flex justify-center items-center flex-col hero-overlay">
          <h1 className="text-[40px] md:text-[140px] font-[Ole] text-gray-200/40">Pizzio</h1>
          <p className="font-[Ole] text-gray-200/30 text-md pt-5 md:pt-0 md:text-4xl relative bottom-5">
            Taste the Real Pizza Experience
          </p>
        </div>
        <video width="100%" height="100%" autoPlay muted loop>
          <source src="../public/viedos/pizze=a.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
