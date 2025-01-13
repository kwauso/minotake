import { useState, useEffect } from 'react';

export const DaoEasterEgg = () => {
  const [show, setShow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let buffer = '';
    let timeout: NodeJS.Timeout;

    const handleKeyPress = (e: KeyboardEvent) => {
      buffer += e.key.toLowerCase();
      if (buffer.length > 3) buffer = buffer.slice(-3);
      
      if (buffer === 'dao') {
        setShow(true);
        setIsVisible(true);
        
        timeout = setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => setShow(false), 1000); // フェードアウト完了後に非表示
        }, 3000);
      }
    };

    window.addEventListener('keypress', handleKeyPress);

    return () => {
      window.removeEventListener('keypress', handleKeyPress);
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return show ? (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white/80 backdrop-blur-sm transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <p className="text-xl md:text-2xl text-black text-center font-en leading-relaxed animate-textFadeIn">
        Let's create a world where everyone can be<br />
        Users, Owners, and Workers together
      </p>
    </div>
  ) : null;
}; 