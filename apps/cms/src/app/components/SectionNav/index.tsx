'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

type Section = {
  id: string;
  title: string;
};

const sections: Section[] = [
  { id: 'about', title: '私たちについて' },
  { id: 'summary', title: 'プロジェクト概要' },
  { id: 'story', title: 'ストーリー' },
  { id: 'benefits', title: '投資特典' },
  { id: 'roles', title: '参加者の役割' },
  { id: 'roadmap', title: 'ロードマップ' },
  { id: 'join-flow', title: '参加方法・流れ' },
  { id: 'usage', title: '本募集の資金使途' },
  { id: 'members', title: 'メンバー/サポート' },
  { id: 'ratio', title: '参加者構成比' },
  { id: 'faq', title: 'FAQ' },
  { id: 'documents', title: '資料' },
];

export const SectionNav = () => {
  const [activeSection, setActiveSection] = useState('about');
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            // アクティブなセクションが変更されたら、そのボタンまでスクロール
            const activeButton = document.querySelector(`[data-section="${entry.target.id}"]`);
            if (activeButton && navRef.current) {
              navRef.current.scrollTo({
                left: (activeButton as HTMLElement).offsetLeft - 36, // pl-9
                behavior: 'smooth'
              });
            }
          }
        });
      },
      {
        rootMargin: '-50% 0px',
        threshold: 0,
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 112;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="sticky top-[100px] z-40 tb:top-[89px] sp:top-[89px]">
      <div className="mx-auto py-4 bg-white/95 backdrop-blur-[10px]">
        <div ref={navRef} className="flex gap-2 overflow-x-auto scrollbar-hide px-9">
          {sections.map(({ id, title }) => (
            <Link
              key={id}
              href={`#${id}`}
              data-section={id}
              onClick={(e) => handleClick(e, id)}
              className={`
                px-4 py-2 rounded-full subhead3 whitespace-nowrap
                transition-all duration-300 ease-in-out
                ${activeSection === id 
                  ? 'bg-black text-white' 
                  : 'bg-[#E5E5E5] text-black hover:bg-gray-100'
                }
              `}
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
      
      {/* グラデーション部分 */}
      <div className="h-6 relative mt-[-1px]">
        <div 
          className="absolute inset-0"
          style={{ 
            background: 'linear-gradient(to bottom, white 0%, rgba(255, 255, 255, 0) 100%)',
            maskImage: 'linear-gradient(to bottom, white 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, white 0%, transparent 100%)'
          }} 
        />
      </div>
    </nav>
  );
}; 