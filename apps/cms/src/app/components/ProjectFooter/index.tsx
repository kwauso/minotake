'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export const ProjectFooter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // ヘッダー(64px) + セクションナビ(48px)の高さを考慮
      const threshold = 112;
      const shouldShow = window.scrollY > threshold;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer 
      className={`
        fixed bottom-0 left-0 right-0 bg-black text-white z-50
        transition-all duration-500 ease-in-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
      `}
    >
      <div className="max-w-[1312px] mx-auto px-9 py-4">
        <div className="flex items-center justify-between">
          {/* 左側の情報 */}
          <div className="flex gap-8">
            <div>
              <p className="text-xs opacity-70">累計調達額 / 目標金額</p>
              <p className="text-sm">¥4,620,000 / ¥50,000,000</p>
            </div>
            <div>
              <p className="text-xs opacity-70">1口当たり金額</p>
              <p className="text-sm">個人 ¥10,000 / 法人 ¥1,000,000</p>
            </div>
            <div>
              <p className="text-xs opacity-70">参加者数</p>
              <p className="text-sm">8</p>
            </div>
          </div>

          {/* 右側のボタン群 */}
          <div className="flex items-center gap-4">
            <p className="text-sm">
              <span className="opacity-70">募集期限</span>
              <span className="ml-2">2025.01.31</span>
            </p>
            <button className="p-2 rounded-full bg-black border border-white/20 hover:bg-white/10 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16 3H8C7.45 3 7 3.45 7 4V20C7 20.55 7.45 21 8 21H16C16.55 21 17 20.55 17 20V4C17 3.45 16.55 3 16 3ZM15 19H9V5H15V19Z"/>
              </svg>
            </button>
            <Link 
              href="/schedule"
              className="px-4 py-2 text-xs border border-white/20 rounded-md hover:bg-white/10 transition-colors"
            >
              説明会日程へ →
            </Link>
            <Link 
              href="/details"
              className="px-4 py-2 text-xs border border-white/20 rounded-md hover:bg-white/10 transition-colors"
            >
              企業詳細へ →
            </Link>
            <Link 
              href="/join"
              className="px-4 py-2 text-xs bg-white text-black rounded-md hover:bg-gray-100 transition-colors"
            >
              参加する →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}; 