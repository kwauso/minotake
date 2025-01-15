'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-[10px] z-50">
      {/* PC版 */}
      <div className="flex items-center gap-10 max-w-[1312px] mx-auto px-9 h-[100px]">
        <div className="flex items-center gap-5 flex-1">
          <Link href="/" className="flex items-center gap-1 flex-shrink-0 gap-x-5">
            <Image 
              src="/images/common/logo.svg" 
              alt="DAOX" 
              width={70} 
              height={28} 
              priority
            />
            <Image 
              src="/images/common/beta_badge.svg" 
              alt="Beta Ver" 
              width={63} 
              height={21} 
              priority
            />
          </Link>
          {/* <div className="flex-1">
            <div className="flex items-center gap-2 h-12 px-5 rounded-max bg-black/5">
              <Image 
                src="/images/common/search_icon.svg" 
                alt=""
                width={15}
                height={15}
              />
              <input
                type="text"
                placeholder="どんなプロジェクトに携わりたいですか？"
                className="w-full bg-transparent border-none outline-none text-[13px] leading-[17px] placeholder:text-black/50 font-jp"
              />
            </div>
          </div> */}
        </div>
        <nav className="flex items-center gap-6">
          {/* {[
            { href: '/', label: 'ホーム' },
            { href: '/about', label: '私たちについて' },
            { href: '/guide', label: 'サイトの使い方' },
            { href: '/about-dao', label: 'DAOについて' },
          ].map(({ href, label }) => (
            <Link 
              key={href} 
              href={href} 
              className="text-xs leading-[14px] text-black/50 hover:text-black transition-colors font-jp"
            >
              {label}
            </Link>
          ))} */}
          <Link 
            href="/login" 
            className="flex items-center gap-1 text-black"
          >
            <Image 
              src="/images/common/user_icon.svg" 
              alt=""
              width={14}
              height={14}
            />
            <span className="text-xs leading-[14px] font-jp">ログイン</span>
          </Link>
        </nav>
      </div>

      {/* SP版 */}
      <div className="hidden flex items-center justify-between px-7 h-[90px] w-full">
        <Link href="/" className="flex-shrink-0">
          <Image 
            src="/images/common/logo.svg" 
            alt="DAOX" 
            width={70} 
            height={28} 
            priority
          />
        </Link>
        
        <div className="flex-1 mx-4">
          <div className="flex items-center gap-2 h-12 px-6 rounded-max bg-black/5">
            <Image 
              src="/images/common/search_icon.svg" 
              alt=""
              width={18}
              height={18}
            />
            <span className="text-xs leading-[13px] text-black/50 font-jp">検索する</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center">
            <Image 
              src="/images/common/user_icon.svg" 
              alt=""
              width={18}
              height={18}
            />
          </button>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center"
          >
            <Image 
              src="/images/common/menu.svg" 
              alt="メニュー"
              width={18}
              height={12}
            />
          </button>
        </div>
      </div>
    </header>
  );
}; 