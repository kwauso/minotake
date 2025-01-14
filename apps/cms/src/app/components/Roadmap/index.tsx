'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type RoadmapItem = {
  date: string;
  title: string;
  description: string;
  image: string;
};

const roadmapItems: RoadmapItem[] = [
  {
    date: '2024.04~06',
    title: '土地購入・整備開始',
    description: 'あああああああああ',
    image: '/images/publications/kv.png'
  },
  {
    date: '2024.07~09',
    title: 'ぶどう苗木植付け',
    description: 'あああああああああ',
    image: '/images/publications/kv.png'
  },
  {
    date: '2024.10~12',
    title: '初期施設整備完了',
    description: 'あああああああああ',
    image: '/images/publications/kv.png'
  },
  {
    date: '04',
    title: '醸造開始',
    description: 'ああああああああ',
    image: '/images/publications/kv.png'
  },
  {
    date: '2026',
    title: 'ふるさと納税返礼品登録',
    description: 'あああああああああ',
    image: '/images/publications/kv.png'
  }
];

const slideVariants = {
  farPrev: {
    x: '-200%',
    scale: 0.6,
    opacity: 0.5,
    zIndex: 0,
  },
  prev: {
    x: '-100%',
    scale: 0.6,
    opacity: 0.5,
    zIndex: 0,
  },
  current: {
    x: 0,
    scale: 1,
    opacity: 1,
    zIndex: 1,
  },
  next: {
    x: '100%',
    scale: 0.6,
    opacity: 0.5,
    zIndex: 0,
  },
  farNext: {
    x: '200%',
    scale: 0.6,
    opacity: 0.5,
    zIndex: 0,
  }
};

export const Roadmap = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % roadmapItems.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + roadmapItems.length) % roadmapItems.length);
  };

  return (
    <section className="py-32">
      <div className="flex flex-col items-center gap-10">
        <div className="relative w-[1080px] h-[400px] flex items-center justify-center">
          <AnimatePresence initial={false}>
            {[-2, -1, 0, 1, 2].map((offset) => {
              const index = (currentSlide + offset + roadmapItems.length) % roadmapItems.length;
              const position = 
                offset === -2 ? 'farPrev' :
                offset === -1 ? 'prev' :
                offset === 0 ? 'current' :
                offset === 1 ? 'next' : 'farNext';
              
              const xPosition = 
                offset === -2 ? -520 :
                offset === -1 ? -320 :
                offset === 0 ? 0 :
                offset === 1 ? 320 : 520;
              
              return (
                <motion.div
                  key={index}
                  initial={{ x: direction > 0 ? 520 : -520 }}
                  animate={{ 
                    x: xPosition,
                    scale: position === 'current' ? 1 : 0.6,
                    opacity: position === 'current' ? 1 : 0.5,
                    zIndex: position === 'current' ? 1 : 0
                  }}
                  exit={{ x: direction > 0 ? -520 : 520 }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut"
                  }}
                  className={`absolute flex flex-col gap-4 ${
                    position === 'current' ? 'w-[440px]' : 'w-[200px] cursor-pointer'
                  }`}
                  onClick={() => {
                    if (position === 'prev' || position === 'farPrev') prevSlide();
                    if (position === 'next' || position === 'farNext') nextSlide();
                  }}
                >
                  <div className={`relative overflow-hidden ${
                    position === 'current' ? 'h-[248px] rounded-[20px]' : 'h-[186px] rounded-[15px]'
                  }`}>
                    <Image
                      src={roadmapItems[index].image}
                      alt={roadmapItems[index].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="px-2 flex flex-col gap-2">
                    <p className={`font-en font-light ${
                      position === 'current' ? 'text-[19px] leading-6' : 'text-sm leading-[17px]'
                    }`}>
                      {roadmapItems[index].date}
                    </p>
                    <p className={`font-jp ${
                      position === 'current' ? 'text-xl leading-8' : 'text-sm leading-[18px]'
                    }`}>
                      {roadmapItems[index].title}
                    </p>
                    <p className="font-jp text-[11px] leading-[22px]">
                      {roadmapItems[index].description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-[30px]">
          <button onClick={prevSlide} className="opacity-50 hover:opacity-70 transition-opacity">
            <Image src="/images/publications/prev.svg" alt="前へ" width={18.5} height={8.98} />
          </button>
          <div className="font-en font-light text-[15px] leading-[18px]">
            <span>{String(currentSlide + 1).padStart(2, '0')}</span>
            <span className="text-black/30">/ {String(roadmapItems.length).padStart(2, '0')}</span>
          </div>
          <button onClick={nextSlide} className="opacity-50 hover:opacity-70 transition-opacity">
            <Image src="/images/publications/next.svg" alt="次へ" width={18.5} height={8.98} />
          </button>
        </div>
      </div>
    </section>
  );
}; 