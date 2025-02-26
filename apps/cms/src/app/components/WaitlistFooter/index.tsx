"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShareModal } from "../ShareModal";

const LINE_OPENCHAT_URL =
  "https://line.me/ti/g2/UELskVwp_yNNxCpC7Tv1KK30Lt5nb341cUaIZQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"; // 実際のLINE OpenChatのURL

export const WaitlistFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isGuidelineModalOpen, setIsGuidelineModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.2;
      const shouldShow = window.scrollY > threshold;
      setIsVisible(shouldShow);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <footer
        className={`
          fixed bottom-0 left-0 right-0 z-50
          h-[40vh]
          pointer-events-none
          transition-transform duration-500 ease-in-out
          ${isVisible ? "translate-y-0" : "translate-y-full"}
          w-full
        `}
      >
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent"
          aria-hidden="true"
        />

        <div className="absolute bottom-0 left-0 right-0">
          <div className="flex items-center justify-center padding-x-side py-6 sp:p-4 gap-space-s pointer-events-auto">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsShareModalOpen(true)}
                className="w-[32px] h-[43px] flex items-center justify-center bg-black/50 backdrop-blur-[10px] rounded-[5px]"
              >
                <Image
                  src="/images/publications/share_button.svg"
                  alt="シェア"
                  width={15}
                  height={15}
                />
              </button>
              <Link
                href={LINE_OPENCHAT_URL}
                className="h-[44px] px-[18px] bg-white rounded-[5px] flex items-center justify-center gap-1.5"
              >
                <span className="text-[14px] sp:text-[12px] leading-[19px] text-black whitespace-nowrap">
                  今後の情報を受け取る（DAOへの参加はこちら）
                </span>
                <Image
                  src="/images/publications/right_arrow_black.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="sp:w-[11px] sp:h-[11px]"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        onGuidelineOpen={() => setIsGuidelineModalOpen(true)}
      />
    </>
  );
};
