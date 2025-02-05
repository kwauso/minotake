"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Member = {
  role: string;
  name: string;
  description: string;
  image: string;
};

const members: Member[] = [
  {
    role: "群馬自然派ワイン研究会代表",
    name: "柳 栄一",
    description:
      "東京都生まれ。1985年群馬県へ移住。「食」を「芸術品」と捉え､そのつくり手の想いを伝える仕事をしてきた。1990年代後半「自然派ワイン」が日本に入ってきたことに衝撃を受け、その「体に優しいワイン」の普及活動を始めた｡友人の大岡弘武さんに賛同し、2022年より群馬県の利根沼田地域をモデルに世界に通用する自然派ワインの産地化を推進している｡",
    image: "/images/publications/photo/8.member/img_member_01@2x.jpg",
  },
  {
    role: "社会事業家",
    name: "六本木 ユウジ",
    description:
      "群馬県沼田市生まれ。20代前半にフランス・パリで3年半を過ごし多様な文化に触れる。帰国後、異なる価値観を持つ人々が共に課題解決に取り組むためのプロジェクトデザインを実践し、地域づくり事例を数多く牽引。2023年、一般社団法人ちもりを設立。「山育/YAMAIKU」を提唱し、地元の「やま・さと・まち」を次世代につなげていく取り組みを行っている｡",
    image: "/images/publications/photo/8.member/img_member_08@2x.jpg",
  },
  {
    role: "育種家",
    name: "林 慎悟",
    description:
      "岡山県で米・桃・葡萄を生産する専業農家の林農園の4代目として生まれる。2000年に就農し、花澤ぶどう研究所にて葡萄の栽培・品種改良について学ぶ。その後、「マスカットジパング」の開発に成功し、2014年に品種登録。品種登録後、ぶどう農家の生食以外での収益確保を考え、ワイン用品種の品種改良をはじめ、大岡さんと出会う。共同でワイン用品種の選抜を行い、日本に合う有機栽培可能なワイン用品種を「りざん」「龍王」を選抜。地域に根ざしたワイン用品種を群馬でも品種改良を行っている｡",
    image: "/images/publications/photo/8.member/img_member_07@2x.jpg",
  },
  {
    role: "醸造家",
    name: "大岡 弘武",
    description:
      "明治大学理工学部を卒業後、フランス・ボルドーの養成学校でワインづくりを学ぶ。2002年、現地で農業法人を設立しワインの醸造を開始。2013年、ニューヨークタイムズ世界版に紹介される。2016年に帰国し岡山市に移住。ワイン醸造に取り組む。世界に通用する日本ワインを造るヴァンナチュールの先駆者のひとり｡",
    image: "/images/publications/photo/8.member/img_member_09@2x.jpg",
  },
  {
    role: "園芸家",
    name: "星野 学",
    description:
      "草花苗の生産の仕事をしている両親に憧れて花卉園芸業界を目指す。母校テクノ・ホルティ園芸専門学校で3年間勤務の後、群馬県甘楽町の庭師加藤造園のもとで庭造りを学び、2002年より群馬県北部地域へ移住。花の生産からマルシェでの販売や花壇植栽、庭木の剪定などに加え、園芸の楽しさを伝える講座を年間100回以上開催するなど多岐にわたる仕事を行う｡",
    image: "/images/publications/photo/8.member/img_member_06@2x.jpg",
  },
  {
    role: "編集者・研究会副代表",
    name: "石塚 晶子",
    description:
      "慶應義塾大学文学部卒業。出版社に入社し、単行本の編集者となる。フランスの新聞Le FIGAROとの提携雑誌『FIGARO japon』創刊に関わり、以降雑誌を編集、フリーランスの編集者となる。1997年フランス・ボルドー大学醸造学部の社会人講座で、醸造の知識とテイスティングを学ぶ。2000年に帰国後、雑誌『和樂』の創刊メンバーとなり、日本の食や工芸、伝統文化を紹介する記事を手がける。現在は、日本の近現代美術の記事製作を中心に活動する。趣味は茶、花、能など室町期に成立した芸能｡",
    image: "/images/publications/photo/8.member/img_member_05@2x.jpg",
  },
  {
    role: "群馬県知事戦略部DX課NETSUGEN運用チームリーダー",
    name: "宮下 智",
    description:
      "県庁入庁後、財政、中小企業支援，Uターン、まちづくりなど幅広い業務を経験したのち、2022年より県庁32階にあるイノベーション創出拠点「NETSUGEN」の運営を担当。新たなビジネスや地域活性化にチャレンジする人や企業との官民共創により「100年持続する公共づくり」を目指す｡",
    image: "/images/publications/photo/8.member/img_member_02@2x.jpg",
  },
  {
    role: "群馬県知事戦略部DX課NETSUGEN運用チーム主任",
    name: "山田 慎也",
    description:
      "県庁入庁後、総務、大学事務、システム管理、コロナワクチン業務、美術館事務などを経験し、2024年より現所属にてWeb3推進を担当。全国初となる自治体がコミットする株式会社型DAOによる地域活性化を目指す｡",
    image: "/images/publications/photo/8.member/img_member_03@2x.jpg",
  },
  {
    role: "群馬県知事戦略部DX課NETSUGEN運用チーム主事",
    name: "南澤 由佳",
    description:
      "県庁入庁後、NPO・ボランティア推進、県税業務を経験したのち、2024年より「NETSUGEN」のアライアンス業務を担当。県内外約30施設との業務提携や交流事業を推進し、多様な人材が有機的に繋がるネットワークの構築を進める｡",
    image: "/images/publications/photo/8.member/img_member_04@2x.jpg",
  },
];

export const Members = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [containerHeight, setContainerHeight] = useState(280);
  const [isSP, setIsSP] = useState(false);

  // 現在のスライドの高さを監視・更新する関数
  const updateHeight = (position: string, node: HTMLElement) => {
    if (position === "current") {
      const height = node.offsetHeight;
      setContainerHeight(height);
    }
  };

  useEffect(() => {
    const checkViewport = () => {
      setIsSP(window.innerWidth <= 767);
    };

    checkViewport();
    window.addEventListener("resize", checkViewport);

    return () => {
      window.removeEventListener("resize", checkViewport);
    };
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % members.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + members.length) % members.length);
  };

  // SP版のスライダーコンポーネント
  const MobileSlider = () => (
    <div className="flex flex-col items-center gap-space-l">
      <div
        className="relative w-full flex items-center justify-center"
        style={{ height: `${containerHeight}px` }}
      >
        <AnimatePresence initial={false}>
          {[-2, -1, 0, 1, 2].map((offset) => {
            const index =
              (currentSlide + offset + members.length) % members.length;
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
                ? isSP
                  ? -320
                  : -520
                : offset === -1
                  ? isSP
                    ? -200
                    : -280
                  : offset === 0
                    ? 0
                    : offset === 1
                      ? isSP
                        ? 200
                        : 280
                      : isSP
                        ? 320
                        : 520;

            return (
              <motion.div
                key={index}
                ref={(node) => {
                  if (node) updateHeight(position, node);
                }}
                drag={position === "current" ? "x" : false}
                dragElastic={0.5}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) => {
                  if (position === "current") {
                    if (info.offset.x < -100) {
                      nextSlide();
                    } else if (info.offset.x > 100) {
                      prevSlide();
                    }
                  }
                }}
                initial={{
                  x: direction > 0 ? 520 : -520,
                  scale: position === "current" ? 1 : 0.8,
                }}
                animate={{
                  x: xPosition,
                  scale: position === "current" ? 1 : 0.8,
                  opacity: position === "current" ? 1 : 0.8,
                  zIndex: position === "current" ? 1 : 0,
                }}
                exit={{
                  x: direction > 0 ? -520 : 520,
                  scale: position === "current" ? 1 : 0.8,
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                  width: {
                    duration: 0.7,
                    ease: "easeInOut",
                  },
                  height: {
                    duration: 0.7,
                    ease: "easeInOut",
                  },
                }}
                className={`absolute flex flex-col gap-space-xs items-center ${
                  position === "current"
                    ? "w-[280px] sp:w-[248px]"
                    : "w-[200px] sp:w-[112px] cursor-pointer"
                }`}
                onClick={() => {
                  if (position === "prev" || position === "farPrev")
                    prevSlide();
                  if (position === "next" || position === "farNext")
                    nextSlide();
                }}
              >
                <div
                  className={`relative ${
                    position === "current"
                      ? "w-[200px] h-[200px]"
                      : "w-[150px] h-[150px] sp:w-[100px] sp:h-[100px]"
                  }`}
                >
                  <Image
                    src={members[index].image}
                    alt={members[index].name}
                    fill
                    className="rounded-[999px] object-cover"
                    priority
                  />
                </div>
                <div className="flex flex-col gap-space-2xs items-center">
                  <p
                    className={`font-auto opacity-70 ${
                      position === "current"
                        ? "subhead2 leading-[20px]"
                        : "subhead4 leading-[16px]"
                    }`}
                  >
                    {members[index].role}
                  </p>
                  <h5
                    className={`font-auto ${
                      position === "current" ? "h5" : "subhead3"
                    }`}
                  >
                    {members[index].name}
                  </h5>
                  <p
                    className={`font-auto body5 opacity-50 text-center whitespace-pre-line ${
                      position === "current" ? "" : "line-clamp-3"
                    }`}
                  >
                    {members[index].description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="flex items-center tb:padding-top-s gap-[30px]">
        <button
          onClick={prevSlide}
          className="hover:opacity-70 transition-opacity"
        >
          <Image
            src="/images/publications/prev.svg"
            alt="前へ"
            width={8.98}
            height={18.5}
            priority
          />
        </button>
        <div className=" font-light text-[15px] leading-[18px]">
          <span>{String(currentSlide + 1).padStart(2, "0")}</span>
          <span className="text-black/30">
            {" "}
            / {String(members.length).padStart(2, "0")}
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
            priority
          />
        </button>
      </div>
    </div>
  );

  // PC/TB版のグリッドレイアウトコンポーネント
  const DesktopGrid = () => (
    <div className="flex flex-wrap justify-center gap-space-l max-w-[1080px] padding-x-side mx-auto">
      {members.map((member, index) => (
        <div
          key={index}
          className="w-[280px] flex flex-col gap-space-xs items-center"
        >
          <div className="relative w-[200px] h-[200px]">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="rounded-[999px] object-cover"
              priority
            />
          </div>
          <div className="flex flex-col gap-space-2xs items-center">
            <p className="font-auto opacity-70 subhead2 leading-[20px]">
              {member.role}
            </p>
            <h5 className="font-auto h5">{member.name}</h5>
            <p className="font-auto body5 opacity-50 text-center whitespace-pre-line">
              {member.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  return <section>{isSP ? <MobileSlider /> : <DesktopGrid />}</section>;
};
