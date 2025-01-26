'use client';

import Link from 'next/link';

export const Footer = () => {
  return (
    <div className="flex flex-col items-center pb-[71px] sp:pb-[365px]">
      <div className="padding-x-side padding-y-l flex flex-row sp:flex-col gap-space-xl items-center justify-center w-full">
        <span className="text-[12px] leading-[15px] font-en font-light">
          ©︎ 2025 Gunma Yamaiku DAO Inc.
        </span>
        <div className="w-px h-3 bg-black/20 sp:hidden" />
        <Link 
          href="/terms" 
          className="font-genei-gothic text-[11px] leading-[15px] hover:opacity-70"
        >
          利用規約
        </Link>
        <div className="w-px h-3 bg-black/20 sp:hidden" />
        <Link 
          href="/privacy" 
          className="font-genei-gothic text-[11px] leading-[15px] hover:opacity-70"
        >
          プライバシーポリシー
        </Link>
      </div>
    </div>
  );
}; 