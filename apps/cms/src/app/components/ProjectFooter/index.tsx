'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ScheduleModal } from '../ScheduleModal';
import { ShareModal } from '../ShareModal';

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
          md:w-full w-[440px]
        `}
      >
        <div className="md:flex hidden items-center justify-between px-9 py-3">
          {/* PC版のステータス情報 */}
          <div className="flex items-center gap-10">
            <StatusItem
              label="累計調達額 / 目標金額"
              value="¥4,620,000"
              subValue="¥50,000,000"
            />
            <div className="w-px h-8 bg-white/20" />
            <StatusItem
              label="1口当たり金額"
              customValue={
                <div className="flex items-center gap-2">
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
            />
          </div>

          {/* PC版のアクション */}
          <div className="flex items-center gap-6 ml-auto">
            <div>
              <p className="text-[11px] leading-[14px] opacity-50">募集期限</p>
              <p className="text-[21px] leading-8 font-en font-light">2025.01.31</p>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsShareModalOpen(true)}
                className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-[5px]"
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
                className="px-[18px] py-3 border border-white/50 rounded-[5px] backdrop-blur-[10px] flex items-center gap-1.5"
              >
                <span className="text-sm">説明会日程へ</span>
                <span className="text-base">→</span>
              </button>
              <Link 
                href="/details"
                className="px-[18px] py-3 bg-white/30 rounded-[5px] backdrop-blur-[10px] flex items-center gap-1.5"
              >
                <span className="text-sm">企業詳細へ</span>
                <span className="text-base">→</span>
              </Link>
              <Link 
                href="/join"
                className="px-[18px] py-3 bg-white text-black rounded-[5px] backdrop-blur-[10px] flex items-center gap-1.5"
              >
                <span className="text-sm">参加する</span>
                <span className="text-base">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* モバイル版のレイアウトは既存のまま */}
        <div className="md:hidden flex flex-col gap-3">
          {/* 既存のモバイルレイアウトコード */}
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

const StatusItem = ({ label, value, subValue, customValue }) => (
  <div className="flex flex-col">
    <span className="text-[11px] leading-[15px] opacity-50 font-jp">{label}</span>
    {customValue || (
      <div className="flex items-center gap-2">
        <span className="text-base leading-5 font-en font-light">{value}</span>
        {subValue && (
          <>
            <span className="text-xs opacity-70">/</span>
            <span className="text-xs opacity-70">{subValue}</span>
          </>
        )}
      </div>
    )}
  </div>
); 