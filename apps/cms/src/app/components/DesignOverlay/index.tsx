import { useState, useEffect } from 'react';

export const DesignOverlay = () => {
  const [show, setShow] = useState(false);
  const [offsetY, setOffsetY] = useState(-57);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        setShow(prev => !prev);
      }

      if (e.metaKey || e.ctrlKey) {
        if (e.code === 'ArrowUp') {
          e.preventDefault();
          setOffsetY(prev => prev - 5);
        }
        if (e.code === 'ArrowDown') {
          e.preventDefault();
          setOffsetY(prev => prev + 5);
        }
      }
    };

    const handleScroll = () => {
      setScrollY(-window.scrollY);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!show) return null;

  return (
    <>
      {/* PC版デザイン (1024px以上) */}
      <div className="fixed inset-0 pointer-events-none hidden lg:block z-[99999]">
        <img 
          src="/images/tmp/pc_design.png"
          alt=""
          className="w-full opacity-50"
          style={{ transform: `translateY(${scrollY + offsetY}px)` }}
        />
      </div>

      {/* TB版デザイン (768px ~ 1023px) */}
      <div className="fixed inset-0 pointer-events-none hidden md:block lg:hidden z-[99999]">
        <img 
          src="/images/tmp/tb_design.png"
          alt=""
          className="w-full opacity-50"
          style={{ transform: `translateY(${scrollY + offsetY}px)` }}
        />
      </div>

      {/* SP版デザイン (767px以下) */}
      <div className="fixed inset-0 pointer-events-none sp:block md:hidden z-[99999]">
        <img 
          src="/images/tmp/sp_design.png"
          alt=""
          className="w-full opacity-50"
          style={{ transform: `translateY(${scrollY + offsetY}px)` }}
        />
      </div>
    </>
  );
}; 