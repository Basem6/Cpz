import { NAV_LINKS } from "../utils/sectionIds";
export default function Navbar({ onSectionClick }) {
  const handleClick = (event, id) => {
    event.preventDefault();
    onSectionClick(id);
  };

  return (
    <nav
      className="absolute top-0 w-full z-50 pt-4 transition-all duration-500 ease-in-out flex justify-between items-center px-margin-desktop"
      id="main-nav"
    >
      <div className="font-headline-md text-headline-sm text-gray-300/90 tracking-tighter">CPz</div>
      <div className="hidden md:flex gap-6 items-center">
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            className="text-gray-300/90 hover:text-primary/65 transition-colors font-body-sm text-sm uppercase"
            href={`#${link.id}`}
            onClick={(event) => handleClick(event, link.id)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
