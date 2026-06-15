import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/all";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Observer } from "gsap/Observer";
import { SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin, Observer,SplitText);
export { gsap, ScrollTrigger, ScrollSmoother, ScrollToPlugin, Observer,SplitText };
