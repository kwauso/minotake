"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export const ScrollHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOverKeyVisual, setIsOverKeyVisual] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // 表示・非表示の制御
      setIsVisible(scrollY > 30);
      // KeyVisual上かどうかの判定
      const keyVisualHeight = 680;
      setIsOverKeyVisual(scrollY < keyVisualHeight);
    };

    handleScroll(); // 初期状態を設定
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        isOverKeyVisual ? "bg-white/80 backdrop-blur-[10px]" : "bg-white"
      }`}
    >
      <div className="flex items-center gap-10 w-full h-[52px] mx-auto padding-x-side py-3">
        <div className="flex tems-center gap-4 flex-1">
          <Link
            href="/"
            className="flex items-center gap-1 flex-shrink-0 gap-space-xs"
          >
            <Image
              src="/images/common/gunma_yamaiku_dao_logo.svg"
              alt="ぐんま山育DAO"
              width={106}
              height={15}
              priority
            />
            <Image
              src="/images/common/powered_by_daox.svg"
              alt="Powered by DAOX"
              width={117}
              height={20}
              priority
            />
          </Link>
        </div>
      </div>
    </header>
  );
};
