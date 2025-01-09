'use client';

import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg z-50">
      <div className="flex justify-between items-center max-w-[1312px] mx-auto px-9 h-16">
        <div className="flex items-center gap-4 flex-1">
          <Link href="/" className="flex-shrink-0">
            <Image 
              src="/images/common/logo.svg" 
              alt="DAO" 
              width={70} 
              height={28} 
              priority
            />
          </Link>
          <div className="flex-1 max-w-[600px]">
            <input
              type="text"
              placeholder="どんなプロジェクトに携わりたいですか？"
              className="w-full px-4 py-2.5 rounded-full bg-black/5 text-xs border-none outline-none placeholder:text-black/30"
            />
          </div>
        </div>
        <nav className="flex items-center gap-8">
          {[
            { href: '/', label: 'ホーム' },
            { href: '/about', label: '私たちについて' },
            { href: '/guide', label: 'サイトの使い方' },
            { href: '/about-dao', label: 'DAOについて' },
            { 
              href: '/login', 
              label: 'ログイン',
              icon: '/images/common/user_icon.svg'
            }
          ].map(({ href, label, icon }) => (
            <Link 
              key={href} 
              href={href} 
              className="text-xs text-black/50 hover:text-black transition-colors flex items-center gap-2"
            >
              {icon && <Image src={icon} alt="" width={16} height={16} />}
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}; 