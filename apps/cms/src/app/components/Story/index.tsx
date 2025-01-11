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
      title: '日本文化と自然派ワイン',
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
    <section ref={ref} className="py-32">
      <div className="max-w-[1080px] mx-auto">
        <div className="grid grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <div 
              key={index} 
              className="relative aspect-[3/4] rounded-[20px] overflow-hidden cursor-pointer group bg-black/5"
              onClick={() => handleCardClick(index)}
            >
              <Image
                src={story.image}
                alt={story.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105 opacity-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <p className="text-white/70 font-genei-gothic text-xs tracking-wide">
                  {story.category}
                </p>
                <div className="flex justify-between items-end">
                  <h3 className="text-white font-genei-gothic text-xl leading-relaxed">
                    {story.title}
                  </h3>
                  <p className="text-white/70 font-genei-gothic text-xs tracking-wide">
                    詳細を見る
                  </p>
                </div>
              </div>
            </div>
          ))}
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