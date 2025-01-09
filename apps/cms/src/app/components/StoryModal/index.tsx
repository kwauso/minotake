'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

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
          bg-white w-full h-[90vh] rounded-t-[40px] overflow-hidden
          transform transition-transform duration-500 ease-out
          ${isVisible ? 'translate-y-0' : 'translate-y-full'}
        `}
        onClick={e => e.stopPropagation()}
        onTransitionEnd={() => {
          if (!isOpen) {
            setIsAnimating(false);
          }
        }}
      >
        <div className="flex h-full">
          <div className="w-1/2 relative">
            <div 
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${currentStory.image}) center/cover no-repeat`
              }}
            >
              <div className="flex flex-col justify-between h-full p-9">
                <div className="space-y-5">
                  <p className="text-white/50 font-genei-gothic text-[13px] leading-[17px]">
                    {currentStory.category}
                  </p>
                  <div className="space-y-2">
                    <h2 className="text-white font-genei-gothic text-[32px] leading-[40px] font-light">
                      {currentStory.title}
                    </h2>
                    <p className="text-white/80 font-genei-gothic text-[15px] leading-8">
                      {currentStory.content || ''}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  {prevStory && (
                    <button
                      onClick={onPrev}
                      className="flex-1 flex items-center gap-4 p-4 rounded-[20px] backdrop-blur-[10px] bg-black/30"
                    >
                      <span className="text-white transform scale-x-[-1]">→</span>
                      <div className="flex-1">
                        <p className="text-white/50 font-light text-[13px] leading-[17px]">PREV</p>
                        <p className="text-white font-genei-gothic text-[14px] leading-[18px]">{prevStory.title}</p>
                      </div>
                    </button>
                  )}
                  
                  {nextStory && (
                    <button
                      onClick={onNext}
                      className="flex-1 flex items-center gap-4 p-4 rounded-[20px] backdrop-blur-[10px] bg-black/30"
                    >
                      <div className="flex-1">
                        <p className="text-white/50 font-light text-[13px] leading-[17px]">NEXT</p>
                        <p className="text-white font-genei-gothic text-[14px] leading-[18px]">{nextStory.title}</p>
                      </div>
                      <span className="text-white">→</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 p-12 overflow-y-auto">
            <div className="flex justify-between items-center mb-12">
              <h3 className="font-genei-gothic text-2xl">{currentStory.title}</h3>
              <button
                onClick={onClose}
                className="p-2 hover:opacity-70 transition-opacity"
              >
                <Image src="/images/publications/modal_close_button.svg" alt="閉じる" width={24} height={24} />
              </button>
            </div>
            <div className="prose prose-lg">
              <p className="font-genei-gothic text-base leading-relaxed">
                {currentStory.content || ''}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 