import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSetAtom } from "jotai";
import { currentSectionAtom } from "@/app/store/navigation";
import { ContentSection } from "./ContentSection";
import { overviewData } from "./data";

export const Overview = () => {
  const setCurrentSection = useSetAtom(currentSectionAtom);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setCurrentSection("overview");
    }
  }, [inView, setCurrentSection]);

  return (
    <section ref={ref} id="summary">
      <div className="flex flex-col tb:padding-x-s sp:px-0 w-full max-w-[1080px] max-w-[1080px] items-center gap-space-xl mx-auto">
        <div className="relative w-full tb:w-[100vw] h-[540px] rounded-[40px] tb:rounded-none tb:max-h-[560px] sp:max-h-[352px] overflow-hidden">
          <Image
            src={overviewData.mainImage.src}
            alt={overviewData.mainImage.alt}
            fill
            className="object-cover"
            priority
          />
        </div>

        {overviewData.sections.map((section, index) => (
          <div key={section.label}>
            <ContentSection {...section} />
            {index < overviewData.sections.length - 1 && (
              <div className="w-full h-px bg-black/10" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
