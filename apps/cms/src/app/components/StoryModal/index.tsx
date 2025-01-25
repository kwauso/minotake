'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { StoryNavigation } from './StoryNavigation';
import { Caption } from './Caption';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentStory: {
    category: string;
    title: string;
    image: string;
    alt: string;
    content?: string;
  };
  onPrev: () => void;
  onNext: () => void;
  prevStory?: {
    title: string;
  };
  nextStory?: {
    title: string;
  };
}

export const StoryModal: React.FC<StoryModalProps> = ({
  isOpen,
  onClose,
  currentStory,
  onPrev,
  onNext,
  prevStory,
  nextStory
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const isFirstStory = !prevStory;
  const isLastStory = !nextStory;

  if (!isOpen && !isAnimating) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[100] flex items-end
        transition-all duration-500 ease-out
        ${isVisible ? 'bg-black/50' : 'bg-transparent pointer-events-none'}
      `}
      onClick={onClose}
    >
      <div
        className={`
          w-full h-[90vh] tb:h-[100vh]
          transform transition-transform duration-500 ease-out
          ${isVisible ? 'translate-y-0' : 'translate-y-full'}
        `}
        onClick={e => e.stopPropagation()}
      >
        <div
          className="h-full relative bg-white overflow-hidden rounded-t-[40px] tb:rounded-none"
        >
          <div className="absolute inset-0 flex tb:flex-col">
            <div className="flex w-full h-full tb:flex-col">
              <div className="w-1/2 relative overflow-hidden tb:w-full tb:h-[400px] tb:min-h-[400px]">
                <div 
                  className="absolute inset-0 bg-black overflow-hidden rounded-tl-[40px] tb:rounded-none h-full" 
                >
                  <div className="hidden tb:absolute tb:z-[100] tb:top-8 tb:right-8 tb:justify-end">
                    <button
                      onClick={onClose}
                      className="hover:opacity-70 transition-opacity"
                    >
                      <Image src="/images/publications/modal_close_button.svg" alt="閉じる" width={32} height={32} />
                    </button>
                  </div>
                  <div
                    className="absolute inset-0 opacity-80"
                    style={{
                      backgroundImage: `url(${currentStory.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                  <div className="relative h-full flex flex-col justify-between padding-x-side padding-y-xl tb:padding-top-[100px]">
                    <div className="space-y-5">
                      <p className="text-white/50 font-genei-gothic text-[13px] leading-[17px]">
                        {currentStory.category}
                      </p>
                      <div className="space-y-2">
                        <h2 className="text-white font-genei-gothic text-[32px] leading-[40px]">
                          {currentStory.title}
                        </h2>
                        <p className="text-white/80 font-genei-gothic text-[15px] leading-8">
                          {currentStory.content || ''}
                        </p>
                      </div>
                    </div>

                    <div className={`${!isFirstStory && !isLastStory ? 'grid grid-cols-2' : 'flex'} gap-5 w-full`}>
                      {!isFirstStory && (
                        <button
                          onClick={onPrev}
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
                            <h6 className="text-white font-jp truncate text-left">
                              {prevStory?.title}
                            </h6>
                          </div>
                        </button>
                      )}

                      {!isLastStory && (
                        <button
                          onClick={onNext}
                          className="flex items-center gap-space-xs padding-xs rounded-[20px] backdrop-blur-[10px] bg-black/30 w-full relative"
                        >
                          <div className="flex flex-col gap-space-2xs overflow-hidden pr-10 flex-1">
                            <p className="text-white/50 subhead3 font-light text-left">
                              NEXT
                            </p>
                            <h6 className="text-white font-jp truncate text-left">
                              {nextStory?.title}
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

              <div className="w-1/2 p-12 overflow-y-auto bg-white tb:w-full">
                <div className="flex justify-end tb:hidden">
                  <button
                    onClick={onClose}
                    className="hover:opacity-70 transition-opacity"
                  >
                    <Image src="/images/publications/modal_close_button.svg" alt="閉じる" width={24} height={24} />
                  </button>
                </div>

                <div className="flex flex-col gap-[56px]">
                  <div className="flex flex-col gap-[18px]">
                    <h2 className="text-black/80 font-genei-gothic text-[23px] leading-[30px]">
                      {currentStory.title}
                    </h2>
                    <p className="text-black/50 font-genei-gothic text-[14px] leading-[32px]">
                      {currentStory.content}
                    </p>
                    <Image
                      src={currentStory.image}
                      alt={currentStory.alt}
                      width={600}
                      height={329}
                      className="rounded-[30px] object-cover w-full h-[329px]"
                    />
                    <Caption>
                      {currentStory.description || currentStory.content}
                    </Caption>
                  </div>

                  <div className="flex flex-col gap-[56px] items-center">
                    {nextStory && (
                      <StoryNavigation
                        type="NEXT"
                        title={nextStory.title}
                        onClick={onNext}
                      />
                    )}
                    <button
                      onClick={onClose}
                      className="text-black/50 font-genei-gothic text-[14px] leading-[19px] hover:opacity-70 transition-opacity"
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
  );
};