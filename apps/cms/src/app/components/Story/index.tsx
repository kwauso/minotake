'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSetAtom, useAtom } from 'jotai';
import { currentSectionAtom, currentStoryAtom } from '@/app/store/navigation';
import { currentStoryIndexAtom } from '@/app/store/story';
import Image from 'next/image';
import { StoryModal } from '../StoryModal';

export const Story = () => {
  const setCurrentSection = useSetAtom(currentSectionAtom);
  const setCurrentStory = useSetAtom(currentStoryAtom);
  const [currentStoryIndex, setCurrentStoryIndex] = useAtom(currentStoryIndexAtom);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stories = [
    {
      category: '01 - ワインについて',
      title: '今回創るぶどう品種',
      image: '/images/publications/kv.png',
      description: '文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章。',
      alt: 'ワイン畑の風景',
      content: '文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章。'
    },
    {
      category: '02 - ワインについて',
      title: '終わりなき探求家',
      image: '/images/publications/kv.png',
      alt: 'ワイン畑の風景'
    },
    {
      category: '03 - ワインについて',
      title: '大岡という醸造家',
      image: '/images/publications/kv.png',
      alt: 'ワイン畑の風景'
    },
    {
      category: '04 - ワインについて',
      title: '日本食と自然派ワインの相性',
      image: '/images/publications/kv.png',
      alt: 'ワイン畑の風景'
    },
    {
      category: '05 - ワインについて',
      title: '日本文化と<br />自然派ワイン',
      image: '/images/publications/kv.png',
      alt: 'ワイン畑の風景'
    },
    {
      category: '06 - ワインについて',
      title: 'ゆかりあるシェフたちとの共創',
      image: '/images/publications/kv.png',
      alt: 'ワイン畑の風景'
    },
    {
      category: '07 - ワインについて',
      title: '馬車史の生産',
      image: '/images/publications/kv.png',
      alt: 'ワイン畑の風景'
    },
    {
      category: '08 - ワイナリー',
      title: '自然と調和するワイナリー',
      image: '/images/publications/kv.png',
      alt: 'ワイン畑の風景'
    },
    {
      category: '09 - チャレンジ',
      title: '世界への挑戦',
      image: '/images/publications/kv.png',
      alt: 'ワイン畑の風景'
    },
    {
      category: '10 - チャレンジ',
      title: '山を育むことで日本の過疎化を防ぐ',
      image: '/images/publications/kv.png',
      alt: 'ワイン畑の風景'
    },
    {
      category: '11 - チャレンジ',
      title: '群馬の風景を価値あるものに変えていく',
      image: '/images/publications/kv.png',
      alt: 'ワイン畑の風景'
    }
  ];

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
      setCurrentSection('story');
      setCurrentStory(null);
    }
  }, [inView, setCurrentSection, setCurrentStory]);

  const handlePrev = () => {
    setCurrentStoryIndex((prev) => 
      (prev - 1 + stories.length) % stories.length
    );
  };

  const handleNext = () => {
    setCurrentStoryIndex((prev) => 
      (prev + 1) % stories.length
    );
  };

  return (
    <section ref={ref} className="py-32 sp:w-[100vw] sp:ml-[-28px]">
      <div className="w-fit mx-auto tb:px-8 sp:w-full sp:px-0">
        <div className="relative sp:overflow-hidden">
          <div className="grid grid-cols-3 sp:padding-x-l gap-space-l tb:grid-cols-2 sp:flex sp:overflow-x-auto sp:scrollbar-hide sp:gap-4 sp:w-full">
            {stories.map((story, index) => (
              <div 
                key={index} 
                className="relative w-[280px] h-[407px] rounded-[20px] overflow-hidden cursor-pointer group bg-black/5 sp:min-w-[280px] sp:w-[280px] shadow-lg sp:shadow-none"
                onClick={() => handleCardClick(index)}
              >
                <Image
                  src={story.image}
                  alt={story.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105 opacity-95"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 p-s flex flex-col justify-between">
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-col gap-5">
                      <p className="text-white/70 font-genei-gothic text-xs tracking-wide">
                        {story.category}
                      </p>
                      <h4 
                        className="text-white font-jp leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: story.title }}
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-white/70 font-jp body3">
                        {story.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <p className="text-white/70 font-genei-gothic text-xs tracking-wide">
                      詳細を見る
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* <div className="absolute right-0 top-0 bottom-0 w-[40px] bg-gradient-to-l from-white/5 to-transparent pointer-events-none sp:block hidden" /> */}
        </div>
      </div>
      <StoryModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        currentStory={stories[currentStoryIndex]}
        prevStory={stories[(currentStoryIndex - 1 + stories.length) % stories.length]}
        nextStory={stories[(currentStoryIndex + 1) % stories.length]}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
}; 