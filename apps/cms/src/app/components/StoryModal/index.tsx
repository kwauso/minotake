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
            <div className="absolute inset-0">
              <Image
                src={currentStory.image}
                alt={currentStory.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white/70 font-genei-gothic text-xs mb-2">
                  {currentStory.category}
                </p>
                <h2 className="text-white font-genei-gothic text-[32px] leading-[48px]">
                  {currentStory.title}
                </h2>
              </div>
            </div>

            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-8 flex justify-between items-center">
              {prevStory ? (
                <button
                  onClick={onPrev}
                  className="group flex items-center gap-4 p-4 rounded-lg backdrop-blur-md bg-black/20 hover:bg-black/30 transition-colors"
                >
                  <Image src="/images/publications/prev.svg" alt="" width={24} height={24} />
                  <div>
                    <p className="text-white/70 text-xs mb-1">PREV</p>
                    <p className="text-white text-sm">{prevStory.title}</p>
                  </div>
                </button>
              ) : (
                <div className="w-[200px]" />
              )}
              
              {nextStory ? (
                <button
                  onClick={onNext}
                  className="group flex items-center gap-4 p-4 rounded-lg backdrop-blur-md bg-black/20 hover:bg-black/30 transition-colors"
                >
                  <div className="text-right">
                    <p className="text-white/70 text-xs mb-1">NEXT</p>
                    <p className="text-white text-sm">{nextStory.title}</p>
                  </div>
                  <Image src="/images/publications/next.svg" alt="" width={24} height={24} />
                </button>
              ) : (
                <div className="w-[200px]" />
              )}
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