"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ScheduleModal } from "../ScheduleModal";
import { ShareModal } from "../ShareModal";
import { StatusItem } from "../StatusItem";
import { ShareGuidelineModal } from "../ShareGuidelineModal";
import { projectData, statusItems } from "@/app/data/projectData";

export const ProjectFooter = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDetailsVisible, setIsDetailsVisible] = useState(false); // Changed to false
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isGuidelineOpen, setIsGuidelineOpen] = useState(false);
  const [showGradient, setShowGradient] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.5;
      const shouldShow = window.scrollY > threshold;
      setIsVisible(shouldShow);
    };

    const checkScrollable = () => {
      if (!scrollContainerRef.current) return;

      const { scrollWidth, clientWidth } = scrollContainerRef.current;
      const isScrollable = scrollWidth > clientWidth;
      setShowGradient(isScrollable);
    };

    const handleHorizontalScroll = () => {
      if (!scrollContainerRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      const isAtEnd = Math.ceil(scrollLeft + clientWidth) >= scrollWidth;
      const isScrollable = scrollWidth > clientWidth;
      setShowGradient(isScrollable && !isAtEnd);
    };

    handleScroll();
    checkScrollable();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkScrollable);
    scrollContainerRef.current?.addEventListener(
      "scroll",
      handleHorizontalScroll
    );

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScrollable);
      scrollContainerRef.current?.removeEventListener(
        "scroll",
        handleHorizontalScroll
      );
    };
  }, []);

  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  const LINE_OPENCHAT_URL =
    "https://line.me/ti/g2/UELskVwp_yNNxCpC7Tv1KK30Lt5nb341cUaIZQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"; // 実際のLINE OpenChatのURL

  return (
    <>
      <footer
        className={`
          fixed bottom-0 left-0 right-0 bg-black text-white z-50
          transition-transform duration-500 ease-in-out
          ${isVisible ? "translate-y-0" : "translate-y-full"}
          w-full
        `}
      >
        <div className="flex flex-wrap items-center justify-between padding-x-side py-3 sp:p-4 gap-space-s sp:flex-col sp:px-4 sp:gap-y-0 sp:w-full">
          <div
            className={`relative sp:w-full transition-all duration-300 ease-in-out overflow-hidden ${isDetailsVisible ? "sp:max-h-[200px] sp:mb-4" : "sp:max-h-0 sp:mb-0"}`}
          >
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto tb:max-w-[337px] sp:max-w-full scrollbar-hide"
            >
              <div className="flex items-center gap-space-xs sp:gap-x-3 min-w-max">
                {statusItems.slice(0, 3).map((item, index) => (
                  <React.Fragment key={item.label}>
                    <StatusItem
                      label={item.label}
                      value={item.value}
                      subValue={item.subValue}
                      valueClassName="sp:text-base"
                      customValue={
                        item.type === "unit" ? (
                          <div className="flex items-center gap-2 sp:gap-2">
                            <span className="text-[11px] leading-[15px]">
                              個人
                            </span>
                            <span className="text-base leading-5 font-light">
                              {item.individual}
                            </span>
                            <span className="text-xs opacity-70">/</span>
                            <span className="text-[11px] leading-[15px]">
                              法人
                            </span>
                            <span className="text-base leading-5 font-light">
                              {item.corporate}
                            </span>
                          </div>
                        ) : undefined
                      }
                    />
                    {index < 2 && <div className="w-px h-8 bg-white/20" />}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div
              className={`
                absolute right-0 top-0 bottom-0 w-[140px] 
                hidden tb:block
                bg-gradient-to-l from-black to-transparent 
                pointer-events-none transition-opacity duration-300
                ${showGradient ? "opacity-100" : "opacity-0"}
              `}
            />
          </div>
          <div
            className={`sp:w-full sp:flex sp:justify-between sp:items-center ml-auto transition-all duration-300 ease-in-out overflow-hidden ${isDetailsVisible ? "sp:max-h-[200px] sp:mb-4" : "sp:max-h-0 sp:mb-0"}`}
          >
            <div>
              <p className="subhead5 opacity-50">募集期限</p>
              <h5 className=" font-light">{projectData.deadline}</h5>
            </div>
            {/* <span 
              onClick={toggleDetails}
              className="text-[10px] leading-[14px] opacity-50 hidden sp:block cursor-pointer hover:opacity-70"
            >
              上記表示を隠す
            </span> */}
          </div>

          <div
            onClick={toggleDetails}
            className="hidden sp:flex padding-bottom-s items-center justify-center sp:w-full gap-1 cursor-pointer hover:opacity-70"
          >
            <Image
              src="/images/publications/arrow_upper.svg"
              alt="詳細を表示"
              width={12}
              height={7}
              className={`transition-transform duration-300 ${isDetailsVisible ? "rotate-180" : "rotate-0"}`}
              priority
            />
            <p className="flex items-center subhead4 opacity-50">
              {isDetailsVisible ? "詳細を隠す" : "詳細を表示"}
            </p>
          </div>
          <div className="flex items-center gap-6 sp:flex-col sp:w-full sp:gap-3">
            <div className="flex items-center gap-2 sp:w-full sp:justify-between">
              <button
                onClick={() => setIsShareModalOpen(true)}
                className="w-[32px] h-[44px] flex items-center justify-center bg-white/10 rounded-[5px]"
              >
                <Image
                  src="/images/publications/share_button.svg"
                  alt="シェア"
                  width={15}
                  height={15}
                  priority
                />
              </button>
              <button
                onClick={() => window.open(LINE_OPENCHAT_URL, "_blank")}
                className="h-[44px] sp:flex-1 px-[18px] border border-white/50 rounded-[5px] backdrop-blur-[10px] flex items-center justify-center gap-1.5 sp:w-auto"
              >
                <span className=" subhead4 whitespace-nowrap">
                  今後の情報を受け取る
                </span>
                <Image
                  src="/images/publications/right_arrow_white.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="sp:w-[11px] sp:h-[11px]"
                />
              </button>
              {/* 出資して参加するボタンをコメントアウト
              <Link
                href="https://dao7682.zendesk.com/hc/ja/requests/new"
                className="h-[44px] sp:flex-1 px-[18px] bg-white text-black rounded-[5px] backdrop-blur-[10px] flex items-center justify-center gap-1.5 sp:w-auto"
              >
                <span className="subhead4 whitespace-nowrap">
                  出資して参加する
                </span>
                <Image
                  src="/images/publications/right_arrow_black.svg"
                  alt=""
                  width={16}
                  height={16}
                  className="sp:w-[11px] sp:h-[11px]"
                />
              </Link>
              */}
            </div>
          </div>
        </div>
      </footer>

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        onGuidelineOpen={() => setIsGuidelineOpen(true)}
      />
      <ScheduleModal
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
      />
      <ShareGuidelineModal
        isOpen={isGuidelineOpen}
        onClose={() => setIsGuidelineOpen(false)}
      />
    </>
  );
};
