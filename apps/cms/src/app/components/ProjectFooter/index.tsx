'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ScheduleModal } from '../ScheduleModal';
import { ShareModal } from '../ShareModal';

export const ProjectFooter = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isDetailsVisible, setIsDetailsVisible] = useState(true);

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
        `}
      >
        <div className="max-w-[1312px] mx-auto">
          {/* 1段目: スクロール可能な情報エリア */}
          {isDetailsVisible && (
            <div className="flex flex-col md:flex-row md:items-center border-b border-white/10">
              <div className="relative overflow-x-auto md:overflow-x-visible border-b md:border-b-0 border-white/10">
                <div className="flex items-center gap-8 px-9 py-4 min-w-max md:min-w-0">
                  <div>
                    <p className="text-xs opacity-70">累計調達額 / 目標金額</p>
                    <p className="text-sm font-en">¥4,620,000 / ¥50,000,000</p>
                  </div>
                  <div>
                    <p className="text-xs opacity-70">1口当たり金額</p>
                    <p className="text-sm font-en">個人 ¥10,000 / 法人 ¥1,000,000</p>
                  </div>
                  <div>
                    <p className="text-xs opacity-70">参加者数</p>
                    <p className="text-sm font-en">8</p>
                  </div>
                </div>
                <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-r from-transparent to-black pointer-events-none md:hidden" />
              </div>

              {/* 募集期限 */}
              <div className="flex justify-between items-center px-9 py-3 md:py-4 border-b md:border-b-0 md:border-l border-white/10">
                <p className="text-sm font-en">
                  <span className="opacity-70">募集期限</span>
                  <span className="ml-2 font-en">2025.01.31</span>
                </p>
                <button 
                  className="text-xs opacity-70 md:hidden"
                  onClick={() => setIsDetailsVisible(!isDetailsVisible)}
                >
                  {isDetailsVisible ? '上記表示を隠す' : '詳細を表示する'}
                </button>
              </div>

              {/* アクションボタン群 */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-6 px-9 py-4 md:ml-auto">
                <button 
                  className="w-full md:w-auto p-2 rounded-[5px] bg-[#1A1A1A] border border-white/20 hover:bg-[#2A2A2A] transition-colors"
                  onClick={() => setIsShareModalOpen(true)}
                >
                  <div className="w-4 h-4 relative">
                    <Image 
                      src="/images/publications/share_button.svg" 
                      alt="シェア"
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </button>
                <button 
                  onClick={() => setIsScheduleModalOpen(true)}
                  className="w-full md:w-auto min-h-[44px] px-[18px] py-3 text-[14px] border border-white/20 rounded-[5px] hover:bg-white/10 transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <span>説明会日程へ</span>
                  <Image 
                    src="/images/common/project_footer_right_arrow_white.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                </button>
                <Link 
                  href="/details"
                  className="w-full md:w-auto min-h-[44px] px-[18px] py-3 text-[14px] border border-white/20 rounded-[5px] bg-[#1A1A1A] hover:bg-[#2A2A2A] transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <span>企業詳細へ</span>
                  <Image 
                    src="/images/common/project_footer_right_arrow_white.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                </Link>
                <Link 
                  href="/join"
                  className="w-full md:w-auto min-h-[44px] px-[18px] py-3 text-[14px] bg-white text-black rounded-[5px] hover:bg-gray-100 transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <span>参加する</span>
                  <Image 
                    src="/images/common/project_footer_right_arrow_black.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                </Link>
              </div>
            </div>
          )}
        </div>
      </footer>

      <ScheduleModal isOpen={isScheduleModalOpen} onClose={() => setIsScheduleModalOpen(false)} />
      <ShareModal isOpen={isShareModalOpen} onClose={() => setIsShareModalOpen(false)} />
    </>
  );
}; 