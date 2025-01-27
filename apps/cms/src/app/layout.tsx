"use client";

import { ScrollHeader } from "@/app/components/ScrollHeader";
import localFont from "next/font/local";
import "./globals.css";
import { useEffect } from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import { Inter } from "next/font/google";

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

    document.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://yamaiku-dao.com";
  const ogpImageUrl = `${baseUrl}/ogp_01.png`;

  return (
    <html lang="ja">
      <HelmetProvider>
        <Helmet>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <title>
            群馬の山から、世界が認める自然派ワインを。| ぐんま山育DAO powerd by
            DAOX
          </title>
          <meta
            name="description"
            content="自然派ワインとの親和性が高い日本という土地で、新しいワイン用ブドウ品種を開発し、世界に通用するワインをDAOという組織形態でつくります。メンバーには育種家・林慎悟や栽培醸造家・大岡弘武に加え、サポーターとして群馬県庁も参画し、地方創生の新しいモデルを目指します。"
          />
          {/* OGP基本設定 */}
          <meta
            property="og:title"
            content="ぐんま山育DAO | 群馬の山地を産地に"
          />
          <meta
            property="og:description"
            content="群馬の山から、世界が認める自然派ワインを。一緒に新しい価値を創り出しませんか？"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={baseUrl} />
          <meta property="og:image" content={ogpImageUrl} />
          <meta property="og:site_name" content="ぐんま山育DAO" />
          <meta property="og:locale" content="ja_JP" />

          {/* Twitter Card設定 */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="ぐんま山育DAO | 群馬の山地を産地に"
          />
          <meta
            name="twitter:description"
            content="群馬の山から、世界が認める自然派ワインを。一緒に新しい価値を創り出しませんか？"
          />
          <meta name="twitter:image" content={ogpImageUrl} />
        </Helmet>
        <body
          className={`${inter.className} ${genEiGothic.variable} font-genei-gothic`}
        >
          <LazyMotion features={domAnimation}>
            <AnimatePresence mode="sync">
              <ScrollHeader key="scroll-header" />
              <div key="main-content">{children}</div>
            </AnimatePresence>
          </LazyMotion>
        </body>
      </HelmetProvider>
    </html>
  );
}
