'use client';

import { useState, useEffect } from 'react';
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
  { id: 'process', title: '参加方法・流れ' },
  { id: 'usage', title: '本募集の資金使途' },
  { id: 'members', title: 'メンバー/サポート' },
  { id: 'ratio', title: '参加者構成比' },
  { id: 'faq', title: 'FAQ' },
];

export const SectionNav = () => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
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

  return (
    <nav className="sticky top-[64px] z-40 bg-white border-b border-gray-200">
      <div className="max-w-[1312px] mx-auto px-9">
        <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
          {sections.map(({ id, title }) => (
            <Link
              key={id}
              href={`#${id}`}
              className={`
                px-4 py-2 rounded-full text-xs whitespace-nowrap
                transition-all duration-300 ease-in-out
                ${activeSection === id 
                  ? 'bg-black text-white' 
                  : 'bg-transparent text-black hover:bg-gray-100'
                }
              `}
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}; 