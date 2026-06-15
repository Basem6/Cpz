const TESTIMONIAL_DATA = {
  quote: "The best authentic pizza I've had outside of Naples. The truffle pizza is a spiritual experience.",
  author: "Marco Rossi",
  role: "Culinary Critic",
  image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5yRxqFDpRXdKTb-Hb-cGsCxductFMXKPaxmNGf4boCAsNnnB2H9n9-X7dQkH3QsuN-gooQYVjJtBmC4P_uqPDE0iEs_ZV6xJY6gnglyWf7tK8mkY_LAiRGAumURmuoUt7tTGDwTB0Lt6WfQWhea0dNbEINa5shTXwwPUHWrLDyCznrfw5R3IKY0o4R7FWhcU6LOww1LKcmI8bPDrkS9xJKaGMMgGk5IKNVpAWE9DOCzpVi4AuiSqQ4d7zNhBMgAnqS1gZpn3UNbg",
};
//e
export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-surface-container-lowest overflow-hidden" id="testimonials">
      <div className="max-w-6xl mx-auto px-margin-mobile text-center">
        <span className="material-symbols-outlined text-primary text-6xl mb-8 opacity-50 scroll-reveal">
          format_quote
        </span>
        <div className="relative overflow-hidden cursor-grab active:cursor-grabbing" id="testimonial-container">
          <div className="flex transition-transform duration-500" id="testimonial-track">
            <div className="min-w-full px-4 testimonial-slide">
              <p className="font-display-lg text-display-lg-mobile italic text-on-surface mb-8">
                "{TESTIMONIAL_DATA.quote}"
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-variant overflow-hidden border border-primary/20">
                  <img
                    alt={TESTIMONIAL_DATA.author}
                    src={TESTIMONIAL_DATA.image}
                  />
                </div>
                <div className="text-left">
                  <div className="font-label-md text-label-md text-primary">{TESTIMONIAL_DATA.author}</div>
                  <div className="text-caption text-on-surface-variant">{TESTIMONIAL_DATA.role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
