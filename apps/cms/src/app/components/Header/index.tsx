"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative bg-white/90 backdrop-blur-[10px] z-50">
      {/* PC版 */}
      <div className="flex items-center gap-10 w-full mx-auto px-9 h-[100px]">
        <div className="flex items-center gap-5 flex-1">
          <Link
            href="/"
            className="flex items-center gap-1 flex-shrink-0 gap-x-5"
          >
            <Image
              src="/images/common/gunma_yamaiku_dao_logo.svg"
              alt="ぐんま山育DAO"
              width={120}
              height={15}
              priority
            />
            <Image
              src="/images/common/powered_by_daox.svg"
              alt="Powered by DAOX"
              width={140}
              height={28}
              priority
            />
          </Link>
        </div>
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
              priority
            />
            <span className="text-xs leading-[13px] text-black/50 ">
              検索する
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
