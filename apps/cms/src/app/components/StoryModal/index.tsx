"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { StoryNavigation } from "./StoryNavigation";
import { Caption } from "./Caption";
import { ContentItem, Story } from "@/app/types/story";

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentStory: Story;
  onPrev: () => void;
  onNext: () => void;
  prevStory?: Story;
  nextStory?: Story;
}

const sanitizeHtml = (html: string | undefined): string => {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, "");
};

const ContentRenderer = ({ content }: { content?: ContentItem[] | string }) => {
  if (!content || typeof content === "string") return null;

  return (
    <div className="flex flex-col gap-space-xl">
      {content.map((item, index) => {
        if (item.type === "text") {
          return (
            <div key={index} className="flex flex-col gap-[18px]">
              <h4
                className=""
                dangerouslySetInnerHTML={{
                  __html: item.subtitle || "",
                }}
              />
              <p
                className="text-black/50 text-[14px] leading-[32px]"
                dangerouslySetInnerHTML={{
                  __html: item.body || "",
                }}
              />
              {item.images && (
                <div className="flex flex-col gap-4 mt-4">
                  {item.images.map((image, imgIndex) => (
                    <div key={imgIndex}>
                      <div className="relative w-full h-[329px]">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="rounded-[30px] object-cover"
                        />
                      </div>
                      <div className="flex w-full mt-4">
                        {image.caption && <Caption>{image.caption}</Caption>}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        } else if (item.type === "image" && item.src) {
          return (
            <div key={index}>
              <div className="relative w-full h-[329px]">
                <Image
                  src={item.src}
                  alt={item.alt || ""}
                  fill
                  className="rounded-[30px] object-cover"
                />
              </div>
              <div className="flex w-full mt-4">
                {item.caption && <Caption>{item.caption}</Caption>}
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export const StoryModal: React.FC<StoryModalProps> = ({
  isOpen,
  onClose,
  currentStory,
  onPrev,
  onNext,
  prevStory,
  nextStory,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [isLeftContentVisible, setIsLeftContentVisible] = useState(true);
  const [currentBgImage, setCurrentBgImage] = useState(currentStory.image);
  const [nextBgImage, setNextBgImage] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [currentStory]);

  const isFirstStory = !prevStory;
  const isLastStory = !nextStory;

  const handlePageChange = (changeFunction: () => void) => {
    // TB/SP版のスクロール要素を取得
    const modalElement = document.querySelector(".tb\\:overflow-y-auto");
    if (modalElement) {
      modalElement.scrollTop = 0;
    }
    // PC版のスクロール要素
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
    changeFunction();
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[100] flex items-start
        ${isVisible ? "bg-black/50" : "bg-transparent pointer-events-none"}
      `}
      onClick={onClose}
    >
      <div
        className={`
          w-full h-full transition-transform duration-500
          ${isVisible ? "translate-y-0" : "translate-y-full"}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          id="modal-content"
          className="h-full relative bg-white overflow-hidden rounded-t-[40px] tb:rounded-none"
        >
          <div className="absolute inset-0 flex tb:flex-col">
            <div className="flex w-full h-full tb:overflow-y-auto tb:flex-col">
              <div className="hidden tb:absolute tb:block tb:z-[100] tb:top-8 tb:right-8 tb:justify-end">
                <button
                  onClick={onClose}
                  className="hover:opacity-70 transition-opacity"
                >
                  <Image
                    src="/images/publications/modal_close_button.svg"
                    alt="閉じる"
                    width={32}
                    height={32}
                  />
                </button>
              </div>
              {/* PC版コンテンツ */}
              <div className="w-1/2 relative overflow-hidden tb:w-full tb:h-[300px] tb:min-h-[336px]">
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute inset-0">
                    <Image
                      src={currentStory.image}
                      alt="Story background"
                      fill
                      priority={true}
                      className="object-cover opacity-80"
                      sizes="100vw"
                      quality={100}
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="relative h-full flex flex-col justify-between padding-x-side padding-y-xl tb:padding-top-[100px]">
                    <div
                      className={`
                        space-y-5 transition-opacity duration-300
                        ${isLeftContentVisible ? "opacity-100" : "opacity-0"}
                      `}
                    >
                      <p className="text-white/50 text-[13px] leading-[17px]">
                        {currentStory.category}
                      </p>
                      <div className="space-y-2">
                        <h2
                          className="text-white "
                          dangerouslySetInnerHTML={{
                            __html: currentStory.title,
                          }}
                        />
                      </div>
                    </div>

                    <div
                      className={`
                        ${!isFirstStory && !isLastStory ? "grid grid-cols-2" : "flex"} 
                        gap-5 w-full transition-opacity duration-300
                        ${isLeftContentVisible ? "opacity-100" : "opacity-0"}
                      `}
                    >
                      {!isFirstStory && (
                        <button
                          onClick={() => handlePageChange(onPrev)}
                          className="flex items-center gap-space-xs padding-xs rounded-[20px] backdrop-blur-[10px] bg-black/30 w-full relative"
                        >
                          <Image
                            src="/images/publications/left_arrow_white.svg"
                            alt="前へ"
                            width={16}
                            height={16}
                            className="flex-shrink-0 opacity-60 absolute left-3"
                          />
                          <div className="flex flex-col gap-space-2xs overflow-hidden pl-10 flex-1">
                            <p className="text-white/50 subhead3 font-light text-left">
                              PREV
                            </p>
                            <h6 className="text-white  truncate text-left">
                              {prevStory?.title.replace(/<br\s*\/?>/g, "")}
                            </h6>
                          </div>
                        </button>
                      )}

                      {!isLastStory && (
                        <button
                          onClick={() => handlePageChange(onNext)}
                          className="flex items-center gap-space-xs padding-xs rounded-[20px] backdrop-blur-[10px] bg-black/30 w-full relative"
                        >
                          <div className="flex flex-col gap-space-2xs overflow-hidden pr-10 flex-1">
                            <p className="text-white/50 subhead3 font-light text-left">
                              NEXT
                            </p>
                            <h6 className="text-white  truncate text-left">
                              {nextStory?.title.replace(/<br\s*\/?>/g, "")}
                            </h6>
                          </div>
                          <Image
                            src="/images/publications/right_arrow_white.svg"
                            alt="次へ"
                            width={16}
                            height={16}
                            className="flex-shrink-0 opacity-60 absolute right-3"
                          />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div
                ref={contentRef}
                className="w-1/2 padding-x-side padding-y-xl overflow-y-auto tb:overflow-y-scroll bg-white tb:w-full"
              >
                <div
                  className={`
                    transition-opacity duration-300
                    ${isContentVisible ? "opacity-100" : "opacity-0"}
                  `}
                >
                  <div className="fixed top-8 right-8 z-50 tb:hidden">
                    <button
                      onClick={onClose}
                      className="hover:opacity-70 transition-opacity"
                    >
                      <Image
                        src="/images/publications/modal_close_button.svg"
                        alt="閉じる"
                        width={24}
                        height={24}
                      />
                    </button>
                  </div>

                  <div className="flex flex-col gap-[56px]">
                    <div className="flex flex-col gap-[18px]">
                      <ContentRenderer content={currentStory.content} />
                    </div>

                    <div className="flex flex-col gap-[56px] items-center">
                      {nextStory && (
                        <StoryNavigation
                          type="NEXT"
                          title={nextStory.title}
                          onClick={() => handlePageChange(onNext)}
                        />
                      )}
                      <button
                        onClick={onClose}
                        className="text-black/50 text-[14px] leading-[19px] hover:opacity-70 transition-opacity"
                      >
                        閉じる
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
