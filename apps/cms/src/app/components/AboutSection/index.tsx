'use client';

import { useState } from 'react';
import Image from 'next/image';

type MediaItem = {
  type: 'image' | 'video';
  src: string;
  poster?: string;
};

const mediaItems: MediaItem[] = [
  {
    type: 'image',
    src: '/images/publications/kv.png'
  },
  {
    type: 'video',
    src: 'https://example.com/video.mp4',
    poster: '/images/publications/kv.png'
  },
  {
    type: 'image',
    src: '/images/publications/kv.png'
  }
];

export const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mediaItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  const getPrevIndex = () => (currentSlide - 1 + mediaItems.length) % mediaItems.length;
  const getNextIndex = () => (currentSlide + 1) % mediaItems.length;

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

  return (
    <section className="py-32">
      <div className="relative max-w-[1312px] mx-auto px-9 mb-32">
        <div className="flex items-center justify-center gap-4">
          {/* 左のスライド */}
          <div 
            className="relative w-[30%] aspect-[16/9] rounded-[20px] overflow-hidden cursor-pointer opacity-50 hover:opacity-70 transition-opacity"
            onClick={prevSlide}
          >
            <div className="absolute inset-0">
              {renderMedia(mediaItems[getPrevIndex()], 'w-full h-full object-cover')}
            </div>
          </div>

          {/* 左矢印 */}
          <button
            onClick={prevSlide}
            className="p-4 hover:opacity-70 transition-opacity z-10"
            className="p-4 hover:opacity-70 transition-opacity"
            aria-label="前の画像へ"
          >
            <Image src="/images/publications/prev.svg" alt="" width={24} height={24} />
          </button>

          {/* メインスライド */}
          <div className="relative w-[50%] aspect-[16/9] rounded-[20px] overflow-hidden">
            {renderMedia(mediaItems[currentSlide], 'object-cover')}
          </div>

          {/* 右矢印 */}
          <button
            onClick={nextSlide}
            className="p-4 hover:opacity-70 transition-opacity"
            aria-label="次の画像へ"
          >
            <Image src="/images/publications/next.svg" alt="" width={24} height={24} />
          </button>

          {/* 右のスライド */}
          <div 
            className="relative w-[30%] aspect-[16/9] rounded-[20px] overflow-hidden cursor-pointer opacity-50 hover:opacity-70 transition-opacity"
            onClick={nextSlide}
          >
            {renderMedia(mediaItems[getNextIndex()], 'object-cover')}
          </div>
        </div>
      </div>

      {/* テキストコンテンツ */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl mb-12">群馬の山地を産地に。</h2>
        <div className="space-y-8 text-sm leading-relaxed">
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