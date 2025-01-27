'use client';

import { ScrollHeader } from '@/app/components/ScrollHeader';
import localFont from 'next/font/local';
import './globals.css';
import { useEffect } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { LazyMotion, domAnimation, AnimatePresence } from 'framer-motion';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const genEiGothic = localFont({
  src: [
    {
      path: './fonts/GenEiGothicM-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/GenEiGothicM-SemiLight.ttf',
      weight: '350',
      style: 'normal',
    }
  ],
  variable: '--font-genei-gothic'
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    };

    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <html lang="ja">
      <HelmetProvider>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <title>ぐんま山育DAO | 群馬の山地を産地に</title>
          <meta name="description" content="私たちは、前橋の豊かな山々を舞台に、リジェネラティブ（再生型）の農業とワイン醸造を実践しながら、ソーシャルグッドな価値を生み出す新たな挑戦を始めます。" />
        </Helmet>
        <body className={`${inter.className} ${genEiGothic.variable} font-genei-gothic`}>
          <LazyMotion features={domAnimation}>
             <AnimatePresence mode="sync">
               <ScrollHeader key="scroll-header" />
               <div key="main-content">
                 {children}
               </div>
             </AnimatePresence>        
          </LazyMotion>
        </body>
      </HelmetProvider>
    </html>
  );
}