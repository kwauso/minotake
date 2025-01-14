import { useState, useEffect } from 'react';

export const DesignOverlay = () => {
  const [show, setShow] = useState(false);
  const [offsetY, setOffsetY] = useState(-57);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // スペースキーで表示/非表示を切り替え
      if (e.code === 'Space') {
        e.preventDefault(); // スクロールを防止
        setShow(prev => !prev);
      }

      // Command + 上下矢印で位置調整
      if (e.metaKey) {
        if (e.code === 'ArrowUp') {
          e.preventDefault();
          setOffsetY(prev => prev - 1);
        }
        if (e.code === 'ArrowDown') {
          e.preventDefault();
          setOffsetY(prev => prev + 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!show) return null;

  return (
    <>
      {/* PC版デザイン */}
      <div className="fixed inset-0 pointer-events-none hidden md:block z-[99999]">
        <img 
          src="/images/tmp/pc_design.png"
          alt=""
          className="w-full opacity-50"
          style={{ transform: `translateY(0px)` }}
        />
      </div>1


      {/* TB版デザイン */}
      <div className="fixed inset-0 pointer-events-none md:hidden z-[99999]">
        <img 
          src="/images/tmp/tb_design.png"
          alt=""
          className="w-full opacity-50"
          style={{ transform: `translateY(${offsetY}px)` }}
        />
      </div>

      {/* SP版デザイン */}
      <div className="fixed inset-0 pointer-events-none md:hidden z-[99999]">
        <img 
          src="/images/tmp/sp_design.png"
          alt=""
          className="w-full opacity-50"
          style={{ transform: `translateY(${offsetY}px)` }}
        />
      </div>
    </>
  );
}; 