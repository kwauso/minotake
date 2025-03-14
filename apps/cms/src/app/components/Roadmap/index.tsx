"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type RoadmapItem = {
  date: string;
  title: string;
  description: string;
  image: string;
};

const roadmapItems: RoadmapItem[] = [
  {
    date: "2025/1Q",
    title: "立ち上げ準備",
    description:
      "立ち上げ準備\n資金調達・メンバー募集開始\n醸造所が付設した食文化の発信拠点創出（施設の立ち上げを自治体にドラフト型で声かけ）",
    image: "/images/publications/photo/7.roadmap/img_roadmap_01@2x.jpg",
  },
  {
    date: "2025/2Q",
    title: "事業開始",
    description:
      "事業開始\n自然派のファンコミュニティづくり開始\n産地化プログラム\n└ブドウ畑（圃場）整備\n└醸造家大岡氏のレクチャー＆ワークショップ\n└苗植え体験",
    image: "/images/publications/photo/7.roadmap/img_roadmap_02@2x.jpg",
  },
  {
    date: "2025/3Q",
    title: "事業開発開始",
    description:
      "事業開発開始\n産地化プログラム\n└ブドウとワインのテイスティング（大岡氏提供）\n└自然派ワインに合う群馬県産自然派食材を探すワークショップ",
    image: "/images/publications/photo/7.roadmap/img_roadmap_03@2x.jpg",
  },
  {
    date: "2025/4Q",
    title: "事業開発",
    description:
      "事業開発\n醸造施設整備開始\n産地化プログラム\n└自然派ワインに合うメニュー開発",
    image: "/images/publications/photo/7.roadmap/img_roadmap_04@2x.jpg",
  },
  {
    date: "2026",
    title: "栽培管理・設備整備",
    description:
      "栽培管理\n醸造設備整備開始\n醸造免許の取得\n酒類販売免許取得\n自然派ワイン試験醸造（2024開始試験栽培分）",
    image: "/images/publications/photo/7.roadmap/img_roadmap_04@2x.jpg",
  },
  {
    date: "2027以降",
    title: "醸造開始・販売開始",
    description:
      "初回本格収穫\n醸造開始\nふるさと納税返礼品登録\n自然派ワイン販売開始\n\n＼第二弾プロジェクト立ち上げ準備／",
    image: "/images/publications/photo/7.roadmap/img_roadmap_05@2x.jpg",
  },
];

export const Roadmap = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % roadmapItems.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide(
      (prev) => (prev - 1 + roadmapItems.length) % roadmapItems.length
    );
  };

  if (!isMounted) {
    return (
      <section className="py-32">
        <div className="flex flex-col items-center gap-10">
          <div className="relative w-[1080px] h-[400px] flex items-center justify-center gap-space-l">
            <div className="absolute flex flex-col gap-4 w-[440px] sp:w-[316px]">
              <div className="relative h-[248px] rounded-[20px] overflow-hidden">
                <Image
                  src={roadmapItems[0].image}
                  alt={roadmapItems[0].title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="px-2 flex flex-col gap-2">
                <p className="subhead1 font-light">{roadmapItems[0].date}</p>
                <h5>{roadmapItems[0].title}</h5>
                <p className="body6 whitespace-pre-wrap">
                  {roadmapItems[0].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="flex flex-col items-center gap-10">
        <div className="relative w-[1080px] h-[400px] flex items-center justify-center gap-space-l">
          <AnimatePresence initial={false}>
            {[-2, -1, 0, 1, 2].map((offset) => {
              const index =
                (currentSlide + offset + roadmapItems.length) %
                roadmapItems.length;
              const position =
                offset === -2
                  ? "farPrev"
                  : offset === -1
                    ? "prev"
                    : offset === 0
                      ? "current"
                      : offset === 1
                        ? "next"
                        : "farNext";

              const xPosition =
                offset === -2
                  ? -600
                  : offset === -1
                    ? -360
                    : offset === 0
                      ? 0
                      : offset === 1
                        ? 360
                        : 600;

              return (
                <motion.div
                  key={index}
                  drag={position === "current" ? "x" : false}
                  dragElastic={position === "current" ? 0.5 : 0}
                  onDragEnd={
                    position === "current"
                      ? (e, info) => {
                          if (info.offset.x < -50) {
                            nextSlide();
                          } else if (info.offset.x > 50) {
                            prevSlide();
                          }
                        }
                      : undefined
                  }
                  initial={{ x: direction > 0 ? 520 : -520 }}
                  animate={{
                    x: xPosition,
                    scale: 1,
                    opacity: position === "current" ? 1 : 0.5,
                    zIndex: position === "current" ? 1 : 0,
                  }}
                  exit={{ x: direction > 0 ? -520 : 520 }}
                  transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                  }}
                  className={`absolute flex flex-col gap-4 ${
                    position === "current"
                      ? "w-[440px] sp:w-[316px]"
                      : "w-[200px] cursor-pointer"
                  }`}
                  onClick={() => {
                    if (position === "prev" || position === "farPrev")
                      prevSlide();
                    if (position === "next" || position === "farNext")
                      nextSlide();
                  }}
                >
                  <div
                    className={`
                      relative overflow-hidden ${
                        position === "current"
                          ? "h-[248px] rounded-[20px]"
                          : "h-[186px] rounded-[15px]"
                      }
                    `}
                  >
                    <div
                      className={`
                        w-full h-full transition-transform duration-700
                        ${position === "current" ? "scale-100" : "scale-110"}
                      `}
                    >
                      <Image
                        src={roadmapItems[index].image}
                        alt={roadmapItems[index].title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                  <div className="px-2 flex flex-col gap-2">
                    <p
                      className={`font-light ${
                        position === "current" ? "subhead1" : "subhead3"
                      }`}
                    >
                      {roadmapItems[index].date}
                    </p>
                    {position === "current" ? (
                      <h5>{roadmapItems[index].title}</h5>
                    ) : (
                      <h6>{roadmapItems[index].title}</h6>
                    )}
                    {position === "current" ? (
                      <p className="body6 whitespace-pre-wrap">
                        {roadmapItems[index].description}
                      </p>
                    ) : (
                      <p className="body6 line-clamp-1">
                        {roadmapItems[index].description}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-[30px]">
          <button
            onClick={prevSlide}
            className="hover:opacity-70 transition-opacity"
          >
            <Image
              src="/images/publications/prev.svg"
              alt="前へ"
              width={8.98}
              height={18.5}
            />
          </button>
          <div className="font-light text-[15px] leading-[18px]">
            <span>{String(currentSlide + 1).padStart(2, "0")}</span>
            <span className="text-black/30">
              {" "}
              / {String(roadmapItems.length).padStart(2, "0")}
            </span>
          </div>
          <button
            onClick={nextSlide}
            className="hover:opacity-70 transition-opacity"
          >
            <Image
              src="/images/publications/next.svg"
              alt="次へ"
              width={8.98}
              height={18.5}
            />
          </button>
        </div>
      </div>
    </section>
  );
};
