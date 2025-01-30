"use client";

import { ScrollHeader } from "@/app/components/ScrollHeader";
import { TouchEventHandler } from "@/app/components/TouchEventHandler.client";
import localFont from "next/font/local";
import "./globals.css";
import { LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import { Inter } from "next/font/google";
import { Metadata } from 'next';

const inter = Inter({ subsets: ["latin"] });

const genEiGothic = localFont({
  src: [
    {
      path: "./fonts/GenEiGothicM-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GenEiGothicM-SemiLight.ttf",
      weight: "350",
      style: "normal",
    },
  ],
  variable: "--font-genei-gothic",
});

export const metadata = {
  title: 'ぐんま山育DAO | 群馬の山地を産地に',
  description: '群馬の山から、世界が認める自然派ワインを。一緒に新しい価値を創り出しませんか？',
  openGraph: {
    title: 'ぐんま山育DAO | 群馬の山地を産地に',
    description: '群馬の山から、世界が認める自然派ワインを。一緒に新しい価値を創り出しませんか？',
    type: 'website',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://yamaiku-dao.com',
    images: [
      {
        url: '/ogp_01.png',
        width: 1200,
        height: 630,
        alt: 'ぐんま山育DAO',
      },
    ],
    siteName: 'ぐんま山育DAO',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ぐんま山育DAO | 群馬の山地を産地に',
    description: '群馬の山から、世界が認める自然派ワインを。一緒に新しい価値を創り出しませんか？',
    images: ['/ogp_01.png'],
  },
};

// ClientLayoutをクライアントコンポーネントとして分離
const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TouchEventHandler />
      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="sync">
          <ScrollHeader key="scroll-header" />
          <div key="main-content">{children}</div>
        </AnimatePresence>
      </LazyMotion>
    </>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className={`${inter.className} ${genEiGothic.variable} font-genei-gothic`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
