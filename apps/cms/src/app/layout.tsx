'use client';

import localFont from 'next/font/local';
import './globals.css';
import { useEffect } from 'react';

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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
