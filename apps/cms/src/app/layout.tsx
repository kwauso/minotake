import { ScrollHeader } from "@/app/components/ScrollHeader";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";
import { Metadata } from "next";
import { ClientLayout } from "@/app/client-layout";
// 変更分
import { GoogleTagManager } from "@next/third-parties/google";

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

export const metadata: Metadata = {
  title:
    "群馬の山から、世界が認める自然派ワインを。| ぐんま山育DAO powerd by DAOX",
  description:
    "自然派ワインとの親和性が高い日本という土地で、新しいワイン用ブドウ品種を開発し、世界に通用するワインをDAOという組織形態でつくります。メンバーには育種家・林慎悟や栽培醸造家・大岡弘武に加え、サポーターとして群馬県庁も参画し、地方創生の新しいモデルを目指します。",
  keywords: [
    "ぐんま山育DAO",
    "群馬山育DAO",
    "自然派ワイン",
    "ワイン",
    "群馬県",
    "地方創生",
    "DAO",
    "DAOX",
    "育種",
    "ブドウ",
    "林慎悟",
    "大岡弘武",
    "中山間地域",
    "有機農法",
    "山育",
    "群馬",
    "ワイン用ブドウ",
    "新品種開発",
    "合同会社ちもり",
  ],
  openGraph: {
    title:
      "群馬の山から、世界が認める自然派ワインを。| ぐんま山育DAO powerd by DAOX",
    description:
      "自然派ワインとの親和性が高い日本という土地で、新しいワイン用ブドウ品種を開発し、世界に通用するワインをDAOという組織形態でつくります。メンバーには育種家・林慎悟や栽培醸造家・大岡弘武に加え、サポーターとして群馬県庁も参画し、地方創生の新しいモデルを目指します。",
    type: "website",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://yamaiku-dao.com",
    images: [
      {
        url: "/ogp_01.png",
        width: 1200,
        height: 630,
        alt: "ぐんま山育DAO",
      },
    ],
    siteName: "ぐんま山育DAO",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "群馬の山から、世界が認める自然派ワインを。| ぐんま山育DAO powerd by DAOX",
    description:
      "自然派ワインとの親和性が高い日本という土地で、新しいワイン用ブドウ品種を開発し、世界に通用するワインをDAOという組織形態でつくります。メンバーには育種家・林慎悟や栽培醸造家・大岡弘武に加え、サポーターとして群馬県庁も参画し、地方創生の新しいモデルを目指します。",
    images: ["/ogp_01.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <GoogleTagManager gtmId="GTM-KG4725WW" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body
        className={`${inter.className} ${genEiGothic.variable} font-genei-gothic`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
