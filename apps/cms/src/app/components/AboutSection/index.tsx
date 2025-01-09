'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type MediaItem = {
  type: 'image' | 'video';
  src: string;
  poster?: string;
};

const mediaItems: MediaItem[] = [
  {
    type: 'video',
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    poster: 'https://picsum.photos/id/237/1920/1080'
  },
  {
    type: 'image',
    src: 'https://picsum.photos/id/1018/1920/1080',
  },
  {
    type: 'image',
    src: 'https://picsum.photos/id/1015/1920/1080',
  }
];

export const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % mediaItems.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  const renderMedia = (item: MediaItem, className: string) => {
    if (item.type === 'video') {
      return (
        <video
          src={item.src}
          poster={item.poster}
          className={className}
          autoPlay
          muted
          loop
          playsInline
        />
      );
    }
    return (
      <Image
        src={item.src}
        alt="ワイン畑の風景"
        fill
        className={className}
      />
    );
  };

  const slideVariants = {
    prev: {
      x: '-85%',
      scale: 0.6,
      opacity: 0.7,
      zIndex: 0,
    },
    current: {
      x: 0,
      scale: 0.7,
      opacity: 1,
      zIndex: 1,
    },
    next: {
      x: '85%',
      scale: 0.6,
      opacity: 0.7,
      zIndex: 0,
    }
  };

  return (
    <section className="py-32">
      <div className="relative max-w-[1312px] mx-auto px-9 mb-[120px]">
        <div className="flex items-center justify-center h-[540px]">
          <AnimatePresence initial={false} custom={direction}>
            {[-1, 0, 1].map((offset) => {
              const index = (currentSlide + offset + mediaItems.length) % mediaItems.length;
              const position = offset === -1 ? 'prev' : offset === 0 ? 'current' : 'next';
              
              return (
                <motion.div
                  key={index}
                  custom={direction}
                  variants={slideVariants}
                  initial={direction > 0 ? 'next' : 'prev'}
                  animate={position}
                  exit={direction > 0 ? 'prev' : 'next'}
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    scale: { duration: 0.4 },
                    opacity: { duration: 0.3 }
                  }}
                  className={`absolute w-[55%] aspect-[16/9] rounded-[20px] overflow-hidden
                    ${position === 'current' ? 'cursor-default' : 'cursor-pointer hover:opacity-90'}
                  `}
                  onClick={() => position === 'prev' ? prevSlide() : position === 'next' ? nextSlide() : null}
                >
                  {renderMedia(mediaItems[index], 'w-full h-full object-cover')}
                </motion.div>
              );
            })}
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-[25%] top-1/2 -translate-y-1/2 p-4 hover:opacity-70 transition-opacity z-10"
            aria-label="前の画像へ"
          >
            <Image src="/images/publications/prev.svg" alt="" width={24} height={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-[25%] top-1/2 -translate-y-1/2 p-4 hover:opacity-70 transition-opacity z-10"
            aria-label="次の画像へ"
          >
            <Image src="/images/publications/next.svg" alt="" width={24} height={24} />
          </button>
        </div>
      </div>

      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl mb-12">群馬の山地を産地に。</h2>
        <div className="space-y-8 text-sm leading-[48px]">
          <p>
            私たちは、前橋の豊かな山々を舞台に、<br />
            リジェネラティブ（再生型）の農業と<br />
            ワイン醸造を実践しながら、<br />
            ソーシャルグッドな価値を生み出す新たな挑戦を始めます。
          </p>
          <p>
            このプロジェクトは、単なるワインづくりにとどまらず、<br />
            「経世済民」の精神を現代のかたちで体現し、<br />
            共助を育む場の経済循環を創り出すものでもあります。
          </p>
          <p>
            山の恵みと知恵を活かし、<br />
            次世代が「もっと先を描きたい」と思えるような、<br />
            自然や社会との再生可能な関係を育むビジネスモデルを、<br />
            皆さんと一緒に築いていきたいと考えています。
          </p>
          <p className="text-xs mt-12">群馬ピークスプロジェクト 一同</p>
        </div>
      </div>
    </section>
  );
}; 