import React from "react";
import Image from "next/image";
import { projectData, statusItems } from "@/app/data/projectData";

export const KeyVisual = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-between px-4 md:px-9 padding-y-xl mt-[] w-full sp:h-[680px] h-[calc(100vh-100px)] max-h-[680px]"
      style={{
        background: `linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/publications/photo/1.kv/img_kv_1@2x.jpg') center/cover no-repeat`,
      }}
    >
      {/* 上部テキスト */}
      <div className="flex flex-col items-center gap-space-m w-full md:w-[820px]">
        <p className="text-white/70  subhead4 text-center">
          ぐんま山育
          <span className="">DAO</span>
        </p>
        <h1 className="text-white  text-center sp:px-6">
          群馬の山から、世界が認める自然派ワインを｡
        </h1>
        <div className="bg-white/80 backdrop-blur-[10px] px-2 py-1.5 rounded-[5px]">
          <p className="text-xs leading-[14px] text-black/70">
            <span className=" subhead4">募集期限</span>
            <span className=" subhead4"> : {projectData.deadline}</span>
          </p>
        </div>
      </div>

      {/* 下部ステータス 横並びで、画面をはみ出したときは折り返し */}
      <div className="flex flex-wrap items-center justify-center gap-space-l w-full padding-x-side">
        {statusItems.map((item, index) => (
          <React.Fragment key={item.label}>
            <StatusItem
              label={item.label}
              value={item.value}
              isJP={item.isJP}
              customValue={
                item.type === "unit" ? (
                  <div className="flex items-center gap-2 text-white">
                    <span className="text-[11px] leading-[15px]">個人</span>
                    <span className="text-base leading-5 font-light">
                      {item.individual}
                    </span>
                    <span className="text-xs opacity-70">/</span>
                    <span className="text-[11px] leading-[15px]">法人</span>
                    <span className="text-base leading-5 font-light">
                      {item.corporate}
                    </span>
                  </div>
                ) : undefined
              }
            />
            {index < statusItems.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

const StatusItem = ({
  label,
  value,
  subValue,
  customValue,
  isJP,
  className,
}: {
  label: string;
  value?: string;
  subValue?: string;
  customValue?: React.ReactNode;
  isJP?: boolean;
  className?: string;
}) => (
  <div className="flex flex-col items-center">
    <p className="text-[11px] leading-[15px] text-white/50 ">{label}</p>
    {customValue || (
      <div className="flex items-center gap-2">
        <span
          className={`${isJP ? " subhead2" : " font-light text-base leading-5"} text-white`}
        >
          {value}
        </span>
        {subValue && (
          <>
            <span className="text-xs text-white/70">/</span>
            <span className="text-xs text-white/70 ">{subValue}</span>
          </>
        )}
      </div>
    )}
  </div>
);

const Divider = () => <div className="w-px h-[38px] bg-white/50" />;
