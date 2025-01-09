'use client';

import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50">
      <div className="flex justify-between items-center max-w-[1312px] mx-auto px-9 py-3">
        <div className="flex items-center gap-4 flex-1">
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/images/common/logo.svg" 
              alt="DAO" 
              width={115} 
              height={40} 
              priority
            />
          </Link>
          <div className="flex-1 max-w-[600px]">
            <input
              type="text"
              placeholder="どんなプロジェクトに携わりたいですか？"
              className="w-full px-4 py-2 rounded-full bg-black/5 text-xs border-none outline-none"
            />
          </div>
        </div>
        <nav className="flex items-center gap-6">
          <Link href="/" className="text-xs text-black/50 hover:text-black/100 transition-opacity">
            ホーム
          </Link>
          <Link href="/about" className="text-xs text-black/50 hover:text-black/100 transition-opacity">
            私たちについて
          </Link>
          <Link href="/guide" className="text-xs text-black/50 hover:text-black/100 transition-opacity">
            サイトの使い方
          </Link>
          <Link href="/about-dao" className="text-xs text-black/50 hover:text-black/100 transition-opacity">
            DAOについて
          </Link>
          <Link href="/login" className="text-xs text-black flex items-center gap-1">
            ログイン
          </Link>
        </nav>
      </div>
    </header>
  );
}; 