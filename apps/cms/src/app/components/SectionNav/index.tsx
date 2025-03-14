"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

type Section = {
  id: string;
  title: string;
};

// const sections: Section[] = [
//   { id: 'about', title: '私たちについて' },
//   { id: 'summary', title: 'プロジェクト概要' },
//   { id: 'story', title: 'ストーリー' },
//   { id: 'benefits', title: '投資特典' },
//   { id: 'roles', title: '参加者の役割' },
//   { id: 'roadmap', title: 'ロードマップ' },
//   { id: 'join-flow', title: '参加方法・流れ' },
//   { id: 'usage', title: '本募集の資金使途' },
//   { id: 'members', title: 'メンバー/サポート' },
//   { id: 'ratio', title: '参加者構成比' },
//   { id: 'faq', title: 'FAQ' },
//   { id: 'documents', title: '資料' },
// ];

const sections: Section[] = [
  { id: "about", title: "私たちについて" },
  { id: "summary", title: "プロジェクト概要" },
  { id: "story", title: "ストーリー" },
  { id: "benefits", title: "参加特典案" },
  { id: "roles", title: "参加者の役割" },
  { id: "roadmap", title: "ロードマップ" },
  { id: "members", title: "メンバー/サポート" },
  { id: "ratio", title: "参加者構成比" },
  { id: "faq", title: "FAQ" },
];

export const SectionNav = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [paddingSide, setPaddingSide] = useState(36); // デフォルト値
  const navRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const lastButtonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const updatePaddingSide = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        // PC
        setPaddingSide(36);
      } else if (width >= 768) {
        // TB
        setPaddingSide(28);
      } else {
        // SP
        setPaddingSide(28);
      }
    };

    updatePaddingSide();
    window.addEventListener("resize", updatePaddingSide);
    return () => window.removeEventListener("resize", updatePaddingSide);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            const activeButton = document.querySelector(
              `[data-section="${entry.target.id}"]`
            );
            if (activeButton && navRef.current && lastButtonRef.current) {
              const scrollPosition =
                (activeButton as HTMLElement).offsetLeft - paddingSide;

              navRef.current.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
              });
            }
          }
        });
      },
      {
        rootMargin: "-50% 0px",
        threshold: 0,
      }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [paddingSide]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 150;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="sticky top-[51px] z-40">
      <div className="mx-auto padding-top-4xs padding-bottom-xs bg-white">
        <div
          ref={navRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide padding-x-side"
        >
          <div ref={buttonsRef} className="flex gap-2">
            {sections.map(({ id, title }, index) => (
              <Link
                key={id}
                ref={index === sections.length - 1 ? lastButtonRef : null}
                href={`#${id}`}
                data-section={id}
                onClick={(e) => handleClick(e, id)}
                className={`
                  px-4 py-2 rounded-full subhead3 whitespace-nowrap
                  transition-all duration-300 ease-in-out
                  ${
                    activeSection === id
                      ? "bg-black text-white"
                      : "bg-[#E5E5E5] text-black hover:bg-gray-100"
                  }
                `}
              >
                {title}
              </Link>
            ))}
            {/* 右側の余白用の要素 - 動的に計算 */}
            <div
              aria-hidden="true"
              style={{
                width: lastButtonRef.current
                  ? `calc(100vw - ${paddingSide * 2}px - ${lastButtonRef.current.offsetWidth}px - 0.5rem)`
                  : `calc(100vw - ${paddingSide * 2}px - 0.5rem)`,
              }}
            />
          </div>
        </div>
      </div>

      {/* グラデーション部分 */}
      <div className="h-6 relative mt-[-1px]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, white 0%, rgba(255, 255, 255, 0) 100%)",
            maskImage: "linear-gradient(to bottom, white 0%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, white 0%, transparent 100%)",
          }}
        />
      </div>
    </nav>
  );
};
