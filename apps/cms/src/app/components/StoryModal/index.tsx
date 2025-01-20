'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, type AnimatePresenceProps } from 'framer-motion';

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
  const [direction, setDirection] = useState(0);

  const handleSlideChange = (dir: 'left' | 'right') => {
    setDirection(dir === 'left' ? -1 : 1);
    if (dir === 'left') {
      onPrev();
    } else {
      onNext();
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0
    })
  };

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
          w-full h-[90vh]
          transform transition-transform duration-500 ease-out
          ${isVisible ? 'translate-y-0' : 'translate-y-full'}
        `}
        onClick={e => e.stopPropagation()}
      >
        <div 
          className="h-full relative bg-white overflow-hidden"
          style={{ borderRadius: '40px' }}
        >
          {/* @ts-ignore */}
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentStory.title}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="absolute inset-0 flex"
            >
              <div className="flex w-full h-full">
                <div className="w-1/2 relative rounded-tl-[40px] overflow-hidden">
                  <div className="absolute inset-0 bg-black rounded-tl-[40px] overflow-hidden">
                    <div 
                      className="absolute inset-0 opacity-80"
                      style={{
                        backgroundImage: `url(${currentStory.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                    <div className="relative h-full flex flex-col justify-between p-9">
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

                      <div className="flex gap-4">
                        {!isFirstStory && (
                          <button
                            onClick={() => handleSlideChange('left')}
                            className={`flex-1 flex items-center gap-4 p-4 rounded-[20px] backdrop-blur-[10px] bg-black/30 ${isLastStory ? 'w-full' : ''}`}
                          >
                            <span className="text-white transform scale-x-[-1]">→</span>
                            <div className="flex-1">
                              <p className="text-white/50 font-light text-[13px] leading-[17px]">PREV</p>
                              <p className="text-white font-genei-gothic text-[14px] leading-[18px]">{prevStory?.title}</p>
                            </div>
                          </button>
                        )}
                        
                        {!isLastStory && (
                          <button
                            onClick={() => handleSlideChange('right')}
                            className={`flex-1 flex items-center gap-4 p-4 rounded-[20px] backdrop-blur-[10px] bg-black/30 ${isFirstStory ? 'w-full' : ''}`}
                          >
                            <div className="flex-1">
                              <p className="text-white/50 font-light text-[13px] leading-[17px]">NEXT</p>
                              <p className="text-white font-genei-gothic text-[14px] leading-[18px]">{nextStory?.title}</p>
                            </div>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-1/2 p-12 overflow-y-auto bg-white">
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
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}; 