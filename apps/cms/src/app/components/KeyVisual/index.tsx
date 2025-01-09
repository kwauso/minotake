import React from 'react';
import Image from 'next/image';

export const KeyVisual = () => {
  return (
    <div className="relative h-screen w-full">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <Image
          src="/images/publications/kv.png"
          alt="群馬の山々"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* メインコンテンツ */}
      <div className="relative h-full flex flex-col justify-between">
        {/* 上部テキスト */}
        <div className="pt-40 text-center text-white">
          <p className="text-xs opacity-70 mb-8 font-genei-gothic">
            群馬ピークスプロジェクト
          </p>
          <h1 className="text-4xl md:text-[40px] leading-normal font-genei-gothic font-light mb-8">
            群馬の山から、世界が認める自然派ワインを。
          </h1>
          <div className="inline-flex px-[8px] py-[6px] bg-white/80 backdrop-blur-lg rounded-[5px]"> 
            <p className="text-xs text-black">
              <span className="font-sans">募集期限：2024/01/31</span>
            </p>
          </div>
        </div>

        {/* 下部情報バー */}
        <div className="bg-black/40 backdrop-blur-sm py-6">
          <div className="max-w-[1312px] mx-auto px-9">
            <div className="flex justify-between items-center gap-16">
              <InfoItem
                label="累計調達額 / 目標金額"
                value="¥4,620,000"
                subValue="¥50,000,000"
              />
              <InfoItem
                label="1口当たり金額"
                value="個人 ¥10,000"
                subValue="法人 ¥1,000,000"
              />
              <InfoItem
                label="参加者数"
                value="8"
              />
              <InfoItem
                label="設立"
                value="2025/1/1"
              />
              <InfoItem
                label="スポンサー"
                value="群馬県庁"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type InfoItemProps = {
  label: string;
  value: string;
  subValue?: string;
};

const InfoItem = ({ label, value, subValue }: InfoItemProps) => (
  <div className="text-white">
    <p className="text-xs opacity-50 font-genei-gothic mb-1">{label}</p>
    <p className="text-xl font-sans">
      {value}
      {subValue && <span className="opacity-70 ml-2">/ {subValue}</span>}
    </p>
  </div>
);