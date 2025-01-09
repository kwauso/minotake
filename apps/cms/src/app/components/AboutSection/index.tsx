'use client';

import { useState } from 'react';
import Image from 'next/image';

type MediaItem = {
  type: 'image' | 'video';
  src: string;
  poster?: string; // 動画のサムネイル画像
};

const mediaItems: MediaItem[] = [
  {
    type: 'image',
    src: '/images/publications/kv.png'
  },
  {
    type: 'video',
    src: 'https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4', // 仮の動画URL
    poster: '/images/publications/kv.png'
  },
  {
    type: 'image',
    src: '/images/publications/kv.png'
  }
];

export const AboutSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mediaItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  const renderMediaItem = (item: MediaItem, index: number) => {
    if (item.type === 'video') {
      return (
        <div key={index} className="w-full flex-shrink-0 relative aspect-[16/9]">
          <video
            className="w-full h-full object-cover"
            poster={item.poster}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={item.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    }

    return (
      <div key={index} className="w-full flex-shrink-0 relative aspect-[16/9]">
        <Image
          src={item.src}
          alt={`Slide ${index + 1}`}
          fill
          className="object-cover"
          priority={index === 0}
        />
      </div>
    );
  };

  return (
    <div className="py-24 max-w-[1312px] mx-auto px-9">
      {/* スライダー */}
      <div className="relative mb-20 aspect-[16/9] overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 h-full" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {mediaItems.map((item, index) => renderMediaItem(item, index))}
        </div>
        
        {/* ナビゲーションボタン */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* スライドインジケーター */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {mediaItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
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
    </div>
  );
}; 