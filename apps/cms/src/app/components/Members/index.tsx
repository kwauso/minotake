'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

type Member = {
  role: string;
  name: string;
  description: string;
  image: string;
};

const members: Member[] = [
  {
    role: '醸造家',
    name: '大岡弘武',
    description: '明治大学理工学部を卒業後、ボルドーの養成学校でワインづくりを学ぶ。\n2002年、農業法人を設立しワインの醸造を開始。\n2013年、ニューヨークタイムズ世界版に紹介される。\n2016年に帰国し岡山市に移住。ワイン醸造に取り組む。\n世界に通用する日本ワインを造るヴァンナチュールの先駆者。',
    image: '/images/publications/_sample_profile.png'
  },
  {
    role: '醸造家',
    name: '大岡弘武',
    description: '明治大学理工学部を卒業後、ボルドーの養成学校でワインづくりを学ぶ。\n2002年、農業法人を設立しワインの醸造を開始。\n2013年、ニューヨークタイムズ世界版に紹介される。\n2016年に帰国し岡山市に移住。ワイン醸造に取り組む。\n世界に通用する日本ワインを造るヴァンナチュールの先駆者。',
    image: '/images/publications/_sample_profile.png'
  },
  {
    role: '醸造家',
    name: '大岡弘武',
    description: '明治大学理工学部を卒業後、ボルドーの養成学校でワインづくりを学ぶ。\n2002年、農業法人を設立しワインの醸造を開始。\n2013年、ニューヨークタイムズ世界版に紹介される。\n2016年に帰国し岡山市に移住。ワイン醸造に取り組む。\n世界に通用する日本ワインを造るヴァンナチュールの先駆者。',
    image: '/images/publications/_sample_profile.png'
  },
  {
    role: '醸造家',
    name: '大岡弘武',
    description: '明治大学理工学部を卒業後、ボルドーの養成学校でワインづくりを学ぶ。\n2002年、農業法人を設立しワインの醸造を開始。\n2013年、ニューヨークタイムズ世界版に紹介される。\n2016年に帰国し岡山市に移住。ワイン醸造に取り組む。\n世界に通用する日本ワインを造るヴァンナチュールの先駆者。',
    image: '/images/publications/_sample_profile.png'
  },
  {
    role: '醸造家',
    name: '大岡弘武',
    description: '明治大学理工学部を卒業後、ボルドーの養成学校でワインづくりを学ぶ。\n2002年、農業法人を設立しワインの醸造を開始。\n2013年、ニューヨークタイムズ世界版に紹介される。\n2016年に帰国し岡山市に移住。ワイン醸造に取り組む。\n世界に通用する日本ワインを造るヴァンナチュールの先駆者。',
    image: '/images/publications/_sample_profile.png'
  },
];

export const Members = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [containerHeight, setContainerHeight] = useState(280);
  const [isSP, setIsSP] = useState(false);

  // 現在のスライドの高さを監視・更新する関数
  const updateHeight = (position: string, node: HTMLElement) => {
    if (position === 'current') {
      const height = node.offsetHeight;
      setContainerHeight(height);
    }
  };

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
    setCurrentSlide((prev) => (prev + 1) % members.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + members.length) % members.length);
  };

  return (
    <section className="">
      <div className="flex flex-col items-center gap-space-l">
        <div 
          className="relative w-[1080px] tb:w-full flex items-center justify-center"
          style={{ height: `${containerHeight}px` }}
        >
          {/* @ts-ignore */}
          <AnimatePresence initial={false}>
            {[-2, -1, 0, 1, 2].map((offset) => {
              const index = (currentSlide + offset + members.length) % members.length;
              const position = 
                offset === -2 ? 'farPrev' :
                offset === -1 ? 'prev' :
                offset === 0 ? 'current' :
                offset === 1 ? 'next' : 'farNext';
              
              const xPosition = 
                offset === -2 ? (isSP ? -320 : -520) :
                offset === -1 ? (isSP ? -200 : -280) :
                offset === 0 ? 0 :
                offset === 1 ? (isSP ? 200 : 280) :
                (isSP ? 320 : 520);
              
              return (
                <motion.div
                  key={index}
                  ref={(node) => {
                    if (node) updateHeight(position, node);
                  }}
                  initial={{ 
                    x: direction > 0 ? 520 : -520,
                    scale: position === 'current' ? 1 : 0.8
                  }}
                  animate={{ 
                    x: xPosition,
                    scale: position === 'current' ? 1 : 0.8,
                    opacity: position === 'current' ? 1 : 0.8,
                    zIndex: position === 'current' ? 1 : 0
                  }}
                  exit={{ 
                    x: direction > 0 ? -520 : 520,
                    scale: position === 'current' ? 1 : 0.8
                  }}
                  transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                    scale: {
                      duration: 0.7,
                      ease: "easeInOut"
                    }
                  }}
                  className={`absolute flex flex-col gap-space-xs items-center ${
                    position === 'current' ? 'w-[280px] sp:w-[248px]' : 'w-[200px] sp:w-[112px] cursor-pointer'
                  }`}
                  onClick={() => {
                    if (position === 'prev' || position === 'farPrev') prevSlide();
                    if (position === 'next' || position === 'farNext') nextSlide();
                  }}
                >
                  <div className={`relative ${
                    position === 'current' ? 'w-[200px] h-[200px]' : 'w-[150px] h-[150px] sp:w-[100px] sp:h-[100px]'
                  }`}>
                    <Image
                      src={members[index].image}
                      alt={members[index].name}
                      fill
                      className="rounded-[999px] object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-space-2xs items-center">
                    <p className={`font-auto opacity-70 ${
                      position === 'current' ? 'subhead2' : 'subhead4'
                    }`}>
                      {members[index].role}
                    </p>
                    <h5 className={`font-auto ${
                      position === 'current' ? 'h5' : 'subhead3'
                    }`}>
                      {members[index].name}
                    </h5>
                    <p className={`font-auto body5 opacity-50 text-center whitespace-pre-line ${
                      position === 'current' ? '' : 'line-clamp-3'
                    }`}>
                      {members[index].description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-[30px]">
          <button onClick={prevSlide} className="hover:opacity-70 transition-opacity">
            <Image src="/images/publications/prev.svg" alt="前へ" width={8.98} height={18.5} />
          </button>
          <div className="font-en font-light text-[15px] leading-[18px]">
            <span>{String(currentSlide + 1).padStart(2, '0')}</span>
            <span className="text-black/30"> / {String(members.length).padStart(2, '0')}</span>
          </div>
          <button onClick={nextSlide} className="hover:opacity-70 transition-opacity">
            <Image src="/images/publications/next.svg" alt="次へ" width={8.98} height={18.5} />
          </button>
        </div>
      </div>
    </section>
  );
}; 