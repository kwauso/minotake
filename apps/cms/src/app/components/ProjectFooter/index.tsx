'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ScheduleModal } from '../ScheduleModal';
import { ShareModal } from '../ShareModal';
import { StatusItem } from '../StatusItem';

export const ProjectFooter = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDetailsVisible, setIsDetailsVisible] = useState(true);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.5;
      const shouldShow = window.scrollY > threshold;
      setIsVisible(shouldShow);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <footer 
        className={`
          fixed bottom-0 left-0 right-0 bg-black text-white z-50
          transition-transform duration-500 ease-in-out
          ${isVisible ? 'translate-y-0' : 'translate-y-full'}
          w-full
        `}
      >
        {/* PC版で、幅が足りなくなったら、募集期限〜、シェアボタン〜のところで折り返す */}
        <div className="flex flex-wrap items-center justify-between px-9 py-3 gap-y-4 sp:flex-col sp:px-4 sp:gap-y-4 sp:w-full">
          <div className="relative sp:w-full">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex items-center gap-x-10 sp:gap-x-3 min-w-max">
                <StatusItem
                  label="累計調達額 / 目標金額"
                  value="¥4,620,000"
                  subValue="¥50,000,000"
                  valueClassName="sp:text-base"
                  subValueClassName="sp:text-xs sp:opacity-70"
                />
                <div className="w-px h-8 bg-white/20" />
                <StatusItem
                  label="1口当たり金額"
                  customValue={
                    <div className="flex items-center gap-2 sp:gap-2">
                      <span className="text-[11px] leading-[15px] font-jp">個人</span>
                      <span className="text-base leading-5 font-en font-light">¥10,000</span>
                      <span className="text-xs opacity-70">/</span>
                      <span className="text-[11px] leading-[15px] font-jp">法人</span>
                      <span className="text-base leading-5 font-en font-light">¥1,000,000</span>
                    </div>
                  }
                />
                <div className="w-px h-8 bg-white/20" />
                <StatusItem
                  label="参加者数"
                  value="8"
                  valueClassName="sp:text-base"
                />
              </div>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-[140px] bg-gradient-to-l from-black to-transparent pointer-events-none sp:block hidden" />
          </div>

          <div className="flex items-center gap-6 sp:flex-col sp:w-full sp:gap-3">
            <div className="sp:w-full sp:flex sp:justify-between sp:items-center">
              <div>
                <p className="text-[11px] leading-[14px] opacity-50">募集期限</p>
                <p className="text-[21px] sp:text-lg leading-8 sp:leading-5 font-en font-light">2025.01.31</p>
              </div>
              <span className="text-[10px] leading-[14px] opacity-50 hidden sp:block">上記表示を隠す</span>
            </div>
            <div className="flex items-center gap-2 sp:w-full sp:flex-wrap">
              <button 
                onClick={() => setIsShareModalOpen(true)}
                className="w-[32px] h-[44px] flex items-center justify-center bg-white/10 rounded-[5px]"
              >
                <Image 
                  src="/images/publications/share_button.svg" 
                  alt="シェア"
                  width={15}
                  height={15}
                />
              </button>
              <button 
                onClick={() => setIsScheduleModalOpen(true)}
                className="h-[44px] px-[18px] border border-white/50 rounded-[5px] backdrop-blur-[10px] flex items-center gap-1.5"
              >
                <span className="text-sm sp:text-xs sp:font-en">説明会日程へ</span>
                <Image 
                  src="/images/publications/right_arrow_white.svg" 
                  alt=""
                  width={16}
                  height={16}
                  className="sp:w-[11px] sp:h-[11px]"
                />
              </button>
              <Link 
                href="/details"
                className="h-[44px] px-[18px] bg-white/30 rounded-[5px] backdrop-blur-[10px] flex items-center gap-1.5"
              >
                <span className="text-sm sp:text-xs sp:font-en">企業詳細へ</span>
                {/* SP版のwidthは11px */}
                <Image 
                  src="/images/publications/right_arrow_white.svg" 
                  alt=""
                  width={16}
                  height={16}
                  className="sp:w-[11px] sp:h-[11px]"
                />

              </Link>
              <Link 
                href="https://daox-app.vercel.app"
                className="h-[44px] px-[18px] bg-white text-black rounded-[5px] backdrop-blur-[10px] flex items-center gap-1.5"
              >
                <span className="text-sm sp:text-xs sp:font-en">参加する</span>
                <Image 
                  src="/images/publications/right_arrow_black.svg" 
                  alt=""
                  width={16}
                  height={16}
                  className="sp:w-[11px] sp:h-[11px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <ShareModal 
        isOpen={isShareModalOpen} 
        onClose={() => setIsShareModalOpen(false)} 
      />
      
      <ScheduleModal 
        isOpen={isScheduleModalOpen} 
        onClose={() => setIsScheduleModalOpen(false)} 
      />
    </>
  );
};
