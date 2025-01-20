'use client';

import localFont from 'next/font/local';
import './globals.css';

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
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
