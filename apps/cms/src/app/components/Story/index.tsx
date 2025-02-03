"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSetAtom, useAtom } from "jotai";
import { currentSectionAtom, currentStoryAtom } from "@/app/store/navigation";
import { currentStoryIndexAtom } from "@/app/store/story";
import Image from "next/image";
import { StoryModal } from "../StoryModal";
import { Story } from "@/app/types/story";
import { stories } from "@/app/data/stories";

export const StorySection = () => {
  const setCurrentSection = useSetAtom(currentSectionAtom);
  const setCurrentStory = useSetAtom(currentStoryAtom);
  const [currentStoryIndex, setCurrentStoryIndex] = useAtom(
    currentStoryIndexAtom
  );
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (index: number) => {
    setCurrentStoryIndex(index);
    setIsModalOpen(true);
    setCurrentStory(stories[index].title);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setCurrentStory(null);
  };

  useEffect(() => {
    if (inView) {
      setCurrentSection("story");
      setCurrentStory(null);
    }
  }, [inView, setCurrentSection, setCurrentStory]);

  const handlePrev = () => {
    setCurrentStoryIndex(
      (prev) => (prev - 1 + stories.length) % stories.length
    );
  };

  const handleNext = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStory =
    currentStoryIndex > 0 ? stories[currentStoryIndex - 1] : undefined;

  const nextStory =
    currentStoryIndex < stories.length - 1
      ? stories[currentStoryIndex + 1]
      : undefined;

  return (
    <section ref={ref} className="py-32 sp:w-[100vw] sp:ml-[-28px]">
      <div className="w-fit mx-auto tb:px-8 sp:w-full sp:px-0">
        <div className="relative sp:overflow-hidden">
          <div className="grid grid-cols-3 sp:padding-x-l gap-space-l tb:grid-cols-2 sp:flex sp:overflow-x-auto sp:scrollbar-hide sp:gap-4 sp:w-full">
            {stories.map((story, index) => (
              <div
                key={index}
                className="relative w-[280px] h-[407px] rounded-[20px] overflow-hidden cursor-pointer group/card bg-black/5 sp:min-w-[280px] sp:w-[280px] shadow-lg sp:shadow-none"
                onClick={() => handleCardClick(index)}
              >
                <Image
                  src={story.image}
                  alt={story.alt}
                  fill
                  className="object-cover opacity-95 group-hover/card:blur-sm transition-all duration-300"
                  priority
                />
                <div className="absolute inset-0 bg-black/50 group-hover/card:bg-black/70 transition-all duration-300" />
                <div className="absolute inset-0 p-s flex flex-col">
                  <div className="flex flex-col gap-5">
                    <p className="text-white/70 text-xs tracking-wide">
                      {story.category}
                    </p>
                    <h4
                      className="text-white"
                      dangerouslySetInnerHTML={{ __html: story.title }}
                    />
                  </div>
                  <div className="flex flex-col mt-auto">
                    <div className="transition-all duration-300">
                      <p className="text-white/70 body5 line-clamp-2 group-hover/card:opacity-0">
                        {story.description}
                      </p>
                      <div className="absolute h-[180px] overflow-y-hidden inset-x-s bottom-[60px] opacity-0 group-hover/card:opacity-100 transition-all duration-300 transform translate-y-full group-hover/card:translate-y-0">
                        <p className="text-white/70 body5 line-clamp-8">
                          {story.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end mt-4">
                      <div className="relative transform group-hover/card:-translate-x-2 transition-transform duration-300">
                        <Image
                          src="/images/publications/right_arrow_white_50.svg"
                          alt="arrow_right_white"
                          width={22}
                          height={20}
                          priority={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <StoryModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        currentStory={stories[currentStoryIndex]}
        prevStory={prevStory}
        nextStory={nextStory}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
