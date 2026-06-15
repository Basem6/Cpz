import MarqueeImport from "react-fast-marquee";

const Marquee = MarqueeImport?.default?.default ?? MarqueeImport?.default ?? MarqueeImport;

export default function TextMarquee({ children }) {
    return (
        <Marquee
            speed={50}
            pauseOnHover
            loop={0}
            autoFill
            gradient
            gradientColor={["#000000f4", 0, "#000000f4"]}
            gradientWidth={10}
            
        >
            {children}
        </Marquee>
    );
}
