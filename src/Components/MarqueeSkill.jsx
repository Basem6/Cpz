import TextMarquee from "../components/TextMarquee";
export default function MarqueeSkill({ images}) {
  const repeated = images
    ? [...images, ...images, ...images].map((src, index) => (
        <img key={index} src={src} className="size-30 md:size-60 mx-4" alt="" />
      ))
    : null;
  return (
    <div className="-z-20" style={{ overflow: "hidden", minWidth: "100%" }}>
        <TextMarquee>
          {repeated}
        </TextMarquee>
    </div>
  );
}
