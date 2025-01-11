import React from 'react';
import Image from 'next/image';

export const KeyVisual = () => {
  return (
    <div 
      className="relative h-[680px] flex flex-col items-center justify-between px-4 md:px-9 pt-[60px] pb-[60px] mt-[100px] w-full"
      style={{
        background: `linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/publications/kv.png') center/cover no-repeat`
      }}
    >
      {/* 上部テキスト */}
      <div className="flex flex-col items-center gap-[30px] w-full md:w-[820px]">
        <p className="text-white/70 text-xs leading-4 font-jp text-center">
          群馬ピークスプロジェクト
        </p>
        <h1 className="text-white text-[40px] leading-[48px] font-jp text-center">
          群馬の山から、世界が認める自然派ワインを｡
        </h1>
        <div className="bg-white/80 backdrop-blur-[10px] px-2 py-1.5 rounded-[5px]">
          <p className="text-xs leading-[14px] text-black/70">
            <span className="font-jp">募集期限</span>
            <span className="font-en">：2024/01/31</span>
          </p>
        </div>
      </div>

      {/* 下部ステータス */}
      <div className="flex items-center justify-center gap-10 w-full md:w-[1240px]">
        <StatusItem
          label="累計調達額 / 目標金額"
          value="¥4,620,000"
          subValue="¥50,000,000"
        />
        <Divider />
        <StatusItem
          label="1口当たり金額"
          customValue={
            <div className="flex items-center gap-2 text-white">
              <span className="text-[11px] leading-[15px] font-jp">個人</span>
              <span className="text-base leading-5 font-en font-light">¥10,000</span>
              <span className="text-xs opacity-70">/</span>
              <span className="text-[11px] leading-[15px] font-jp">法人</span>
              <span className="text-base leading-5 font-en font-light">¥1,000,000</span>
            </div>
          }
        />
        <Divider />
        <StatusItem
          label="参加者数"
          value="8"
        />
        <Divider />
        <StatusItem
          label="設立"
          value="2025/1/1"
        />
        <Divider />
        <StatusItem
          label="スポンサー"
          value="群馬県庁"
          isJP
        />
      </div>
    </div>
  );
};

const StatusItem = ({ 
  label, 
  value, 
  subValue,
  customValue,
  isJP
}: { 
  label: string;
  value?: string;
  subValue?: string;
  customValue?: React.ReactNode;
  isJP?: boolean;
}) => (
  <div className="flex flex-col items-center">
    <p className="text-[11px] leading-[15px] text-white/50 font-jp">
      {label}
    </p>
    {customValue || (
      <div className="flex items-center gap-2">
        <span className={`text-base leading-5 ${isJP ? 'font-jp' : 'font-en font-light'} text-white`}>
          {value}
        </span>
        {subValue && (
          <>
            <span className="text-xs text-white/70">/</span>
            <span className="text-xs text-white/70 font-en">
              {subValue}
            </span>
          </>
        )}
      </div>
    )}
  </div>
);

const Divider = () => (
  <div className="w-px h-[38px] bg-white/50" />
);