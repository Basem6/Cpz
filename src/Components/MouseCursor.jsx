import Pizza from "../assets/pizza-svgrepo-com.svg?react";
const MouseCursor = (() => (
  <div
    id="mouse-cursor"
    className="hidden lg:flex  fixed w-8 h-8 bg-transparent z-50 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2  items-center justify-center overflow-hidden min-w-fit"
  >
    <Pizza className="w-full h-full" />
  </div>
));
export default MouseCursor;
