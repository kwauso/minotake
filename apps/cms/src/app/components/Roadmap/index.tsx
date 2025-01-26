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
    date: '2025 / 1Q',
    title: '立ち上げ準備・資金調達・メンバー募集開始',
    description: 'ぐんま山育DAOを設立し、参加メンバーを募集します。',
    image: '/images/publications/photo/7.roadmap/img_roadmap_01@2x.jpg'
  },
  {
    date: '2025 / 2Q',
    title: '事業開始',
    description: '1.醸造所が付設した食文化の発信拠点の創出をいたします(施設の立ち上げを自治体へ声かけ）。\n2.酒類販売ライセンスの取得を目指します。\n3.産地化体験を行います。\n・ワイナリー整備体験\n・醸造家大岡氏のレクチャーワークショップ\n・苗植え体験',
    image: '/images/publications/photo/7.roadmap/img_roadmap_02@2x.jpg'
  },
  {
    date: '2025 / 3Q - 4Q',
    title: '商品制作開始',
    description: '産地化体験を行います。\n・自然派ワインに合う食のマリアージュ体験',
    image: '/images/publications/photo/7.roadmap/img_roadmap_03@2x.jpg'
  },
  {
    date: '2026',
    title: 'テスト製造・初回収穫',
    description: '1.栽培管理を行います。\n2.醸造設備の整備を行います。\n3.テストヴィンテージを製造いたします。\n4.初回の収穫・醸造を行います。',
    image: '/images/publications/photo/7.roadmap/img_roadmap_04@2x.jpg'
  },
  {
    date: '2027',
    title: '醸造・販売',
    description: '1.ふるさと納税返礼品の登録をします。\n2.第一回目の自然派ワインを販売開始します。',
    image: '/images/publications/photo/7.roadmap/img_roadmap_05@2x.jpg'
  }
];

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
        <div className="relative w-[1080px] h-[400px] flex items-center justify-center gap-space-l">
          {/* @ts-ignore */}
          <AnimatePresence initial={false}>
            {[-2, -1, 0, 1, 2].map((offset) => {
              const index = (currentSlide + offset + roadmapItems.length) % roadmapItems.length;
              const position = 
                offset === -2 ? 'farPrev' :
                offset === -1 ? 'prev' :
                offset === 0 ? 'current' :
                offset === 1 ? 'next' : 'farNext';
              
              const xPosition = 
                offset === -2 ? -600 :
                offset === -1 ? -360 :
                offset === 0 ? 0 :
                offset === 1 ? 360 :
                600;
              
              return (
                <motion.div
                  key={index}
                  initial={{ x: direction > 0 ? 520 : -520 }}
                  animate={{ 
                    x: xPosition,
                    scale: position === 'current' ? 1 : 1,
                    opacity: position === 'current' ? 1 : 0.5,
                    zIndex: position === 'current' ? 1 : 0
                  }}
                  exit={{ x: direction > 0 ? -520 : 520 }}
                  transition={{
                    duration: 0.7,
                    ease: "easeInOut"
                  }}
                  className={`absolute flex flex-col gap-4 ${
                    position === 'current' ? 'w-[440px] sp:w-[316px]' : 'w-[200px] cursor-pointer'
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
                      position === 'current' ? 'subhead1' : 'subhead3'
                    }`}>
                      {roadmapItems[index].date}
                    </p>
                    {/* 下記は、currentの場合は、h5、それ以外の場合はh6タグを使用 */}
                    {position === 'current' ? (
                      <h5 className={`font-jp`}>
                        {roadmapItems[index].title}
                      </h5>
                    ) : (
                      <h6 className={`font-jp`}>
                        {roadmapItems[index].title}
                      </h6>
                    )}
                    {/* 下記は、currentの場合は、line-clampなし、それ以外の場合はline-clamp-1タグを使用 */}
                      <p className="font-jp body6 line-clamp-1">
                        {roadmapItems[index].description}
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
            <span className="text-black/30"> / {String(roadmapItems.length).padStart(2, '0')}</span>
          </div>
          <button onClick={nextSlide} className="hover:opacity-70 transition-opacity">
            <Image src="/images/publications/next.svg" alt="次へ" width={8.98} height={18.5} />
          </button>
        </div>
      </div>
    </section>
  );
}; 