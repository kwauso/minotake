'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type MediaItem = {
  type: 'image' | 'video';
  src: string;
  poster?: string;
};

const mediaItems: MediaItem[] = [
  {
    type: 'image',
    src: '/images/publications/photo/2.about/img_about_01@2x.jpg'
  },
  {
    type: 'image',
    src: '/images/publications/photo/2.about/img_about_02@2x.jpg',
  },  
  {
    type: 'image',
    src: '/images/publications/photo/2.about/img_about_03@2x.jpg',
  }
];

export const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isSP, setIsSP] = useState(false);

  useEffect(() => {
    const checkViewport = () => {
      setIsSP(window.innerWidth <= 767);
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);
    
    return () => {
      window.removeEventListener('resize', checkViewport);
    };
  }, []);

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

  const getSlideSize = (position: string) => {
    if (position === 'current') {
      return {
        width: isSP ? 384 : 600,
        height: isSP ? 216 : 338 
      };
    }
    return {
      width: isSP ? 316 : 440,
      height: isSP ? 178 : 247.5
    };
  };

  const getSlidePosition = (position: string) => {
    const xOffset = isSP ? {
      prev: -370,
      current: 0,
      next: 370
    } : {
      prev: -560,
      current: 0,
      next: 560
    };

    // z-indexを動的に設定
    // direction > 0 の場合（右から左への移動）: 右のスライドが奥を通る
    // direction < 0 の場合（左から右への移動）: 左のスライドが奥を通る
    const getZIndex = () => {
      if (direction > 0) {
        // 右から左への移動時
        return position === 'current' ? 2 : position === 'prev' ? 1 : 0;
      } else if (direction < 0) {
        // 左から右への移動時
        return position === 'current' ? 2 : position === 'next' ? 1 : 0;
      } else {
        // 初期状態
        return position === 'current' ? 2 : 1;
      }
    };

    return {
      x: xOffset[position as keyof typeof xOffset],
      opacity: position === 'current' ? 1 : 1,
      zIndex: getZIndex()
    };
  };

  const getSlideStyle = (position: string) => {
    const size = getSlideSize(position);
    const slidePosition = getSlidePosition(position);

    return {
      width: size.width,
      height: size.height,
      x: slidePosition.x,
      opacity: slidePosition.opacity,
      zIndex: slidePosition.zIndex
    };
  };

  const getButtonPosition = () => {
    return {
      prev: {
        x: isSP ? -180 : -340,
      },
      next: {
        x: isSP ? 180 : 300,
      }
    };
  };

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50; // スワイプを検知する閾値
    const { offset } = info;

    if (Math.abs(offset.x) > swipeThreshold) {
      if (offset.x > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }
  };

  return (
    <section className="pt-[300px] sp:pt-[300px]">
      <div className="relative max-w-[1312px] mx-auto px-9 mb-[120px]">
        <div className="flex items-center justify-center h-[338px] sp:h-[216px]">
          {/* @ts-ignore */}
          <AnimatePresence initial={false} mode="wait">
            {[-1, 0, 1].map((offset) => {
              const index = (currentSlide + offset + mediaItems.length) % mediaItems.length;
              const position = offset === -1 ? 'prev' : offset === 0 ? 'current' : 'next';
              const size = getSlideSize(position);
              const slidePosition = getSlidePosition(position);
              
              return (
                <motion.div
                  key={index}
                  initial={{ 
                    ...getSlideStyle(direction > 0 ? 'next' : 'prev'),
                    x: direction > 0 ? slidePosition.x + 600 : slidePosition.x - 600
                  }}
                  animate={getSlideStyle(position)}
                  exit={{ 
                    ...getSlideStyle(direction > 0 ? 'prev' : 'next'),
                    x: direction > 0 ? slidePosition.x - 600 : slidePosition.x + 600
                  }}
                  transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                    width: {
                      duration: 0.7,
                      ease: "easeInOut"
                    },
                    height: {
                      duration: 0.7,
                      ease: "easeInOut"
                    }
                  }}
                  className="absolute overflow-hidden rounded-[20px]"
                  onClick={() => {
                    if (position === 'prev') prevSlide();
                    if (position === 'next') nextSlide();
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.7}
                  onDragEnd={handleDragEnd}
                  dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                >
                  {renderMedia(mediaItems[index], 'w-full h-full object-cover')}
                </motion.div>
              );
            })}
          </AnimatePresence>

          <div 
            className="absolute sp:hidden top-1/2 -translate-y-1/2 z-10"
            style={{ 
              left: '50%',
              transform: `translateX(${getButtonPosition().prev.x}px) translateY(-50%)`
            }}
          >
            <button 
              onClick={prevSlide} 
              className="p-4 hover:opacity-70 transition-opacity"
              aria-label="前の画像へ"
            >
              <Image 
                src="/images/publications/prev.svg" 
                alt="" 
                width={isSP ? 16 : 12} 
                height={isSP ? 16 : 19} 
              />
            </button>
          </div>

          <div 
            className="absolute sp:hidden top-1/2 -translate-y-1/2 z-10"
            style={{ 
              left: '50%',
              transform: `translateX(${getButtonPosition().next.x}px) translateY(-50%)`
            }}
          >
            <button 
              onClick={nextSlide} 
              className="p-4 hover:opacity-70 transition-opacity"
              aria-label="次の画像へ"
            >
              <Image 
                src="/images/publications/next.svg" 
                alt="" 
                width={isSP ? 16 : 12} 
                height={isSP ? 16 : 19} 
              />
            </button>
          </div>
        </div>
      </div>

      <div className="text-center max-w-3xl mx-auto">
        <h2 className="font-jp mb-12">群馬の山地を産地に。</h2>
        <div className="gap-space-xl body1">
          <p className="font-jp body1">
            私たちは、前橋の豊かな山々を舞台に、<br />
            リジェネラティブ（再生型）の農業と<br />
            ワイン醸造を実践しながら、<br />
            ソーシャルグッドな価値を生み出す<br />
            新たな挑戦を始めます。<br />
            <br />
            このプロジェクトは､<br />
            単なるワインづくりにとどまらず、<br />
            「経世済民」の精神を現代のかたちで体現し､<br />
            共助を育む幸せの経済循環を<br />
            創り出す試みでもあります｡            <br />
            <br />
            山の恵みと知恵を活かし、次世代が<br />
            「もっと先を描きたい」と思えるような､<br />
            自然や社会との再生可能な関係を育む<br />
            ビジネスモデルを皆さんと一緒に<br />
            築いていきたいと考えています｡          </p>
          <p className="subhead4 text-black/50 font-jp mt-12">
            ぐんま山育<span className="font-en">DAO</span> 一同
          </p>
        </div>
      </div>
    </section>
  );
}; 