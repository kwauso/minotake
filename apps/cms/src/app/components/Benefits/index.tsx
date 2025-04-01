import Image from "next/image";
import { BenefitCard } from "./BenefitCard";
import { InfoCard } from "../common/InfoCard";
import { Divider } from "./Divider";
import { Fragment } from "react";

// 株主区分の定義
const SHAREHOLDER_TYPES = {
  ALL: {
    id: "all",
    title: "参加特典",
  },
} as const;

type Benefit = {
  type: string;
  title: string;
  description: string;
  note?: string;
  image: string;
};

type Info = {
  title: string;
  description: string;
  details?: string[];
  image: string;
};

type BenefitData = {
  benefits: Benefit[];
  info?: Info[];
};

const benefitsData: Record<string, BenefitData> = {
  [SHAREHOLDER_TYPES.ALL.id]: {
    benefits: [
      {
        type: "",
        title: "身の丈ストリートプロジェクト参画権",
        description: '我々が一番共有したいのは、この三豊の日常の”暮らし”です。\n皆で、いつも集まり、飲みながら、未来を語り、そして具体的に形にしていく。\nそんな三豊の”日常の暮らし”をメンバーで共有できるように投資特典を作りました。',
        image: "/images/publications/photo/5.benefits/img_benefits_01@3x.jpg",
      },
      {
        type: "",
        title: "①暮らす日常",
        description:
          'ベーシックインフラを提供 (年間 1人5泊, DAOメンバー限定の家を用意・一般には貸し出しません)。\n1口あたり年間5回まで泊まれる (シーツ代で1,000円 / 掃除をするとタスクでポイントが付与され、サービス券に交換可能)',
        image: "/images/publications/photo/5.benefits/img_benefits_02@3x.jpg",
      },
      {
        type: "",
        title: "②みんなで未来を作る日常",
        description: '身の丈ストリート会議へ参加できます。\nリアルな現地に2度以上来た方は参加権をもらえます（オンラインで参加もOK）。',
        note: '現地に2度以上来ていただくまでは、会議で決まった議題への投票権があります。三豊の日常を理解したうえで参加してもらうことを目的としています。',
        image: "/images/publications/photo/5.benefits/img_benefits_03@3x.jpg",
      },
      {
        type: "",
        title: "③みんなで飲み語らう日常",
        description:
          'スナックニュー新橋で、毎回1杯目のハイボールが無料になります。',
        image: "/images/publications/photo/5.benefits/img_benefits_05@3x.jpg",
      },
      {
        type: "",
        title: "④身の丈の経済",
        description:
          '収益からの一定の配当（年間１％を想定しています）が受け取れます。',
        image: "/images/publications/photo/5.benefits/img_benefits_06@3x.jpg",
      },
    ],
  },
};

export const Benefits = () => {
  return (
    <section className="px-0">
      <div className="flex flex-col max-w-[760px] tb:max-w-[610px] sp:max-w-[100vw] mx-auto">
        {Object.values(SHAREHOLDER_TYPES).map((shareholderType, index) => (
          <Fragment key={shareholderType.id}>
            <div>
              <h2 className="font-auto mb-[60px]">{shareholderType.title}</h2>

              <div className="flex flex-col gap-space-2xl">
                {benefitsData[shareholderType.id]?.benefits.map(
                  (benefit, index) => {
                    const isOwnershipBenefit = benefit.type === "オーナー権";
                    return (
                      <div
                        key={`benefit-${index}`}
                        className="flex flex-col gap-space-s"
                      >
                        <BenefitCard {...benefit} />
                        <div className="flex flex-col gap-space-s">
                          {isOwnershipBenefit &&
                            benefitsData[shareholderType.id]?.info?.map(
                              (info, infoIndex) => (
                                <InfoCard
                                  key={`info-${infoIndex}`}
                                  image={info.image}
                                  title={info.title}
                                  description={info.description}
                                  details={info.details}
                                />
                              )
                            )}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>

            {/* 最後の要素以外にセパレーターを表示 */}
            {index < Object.values(SHAREHOLDER_TYPES).length - 1 && (
              <div className="w-full h-[1px] bg-black/10 my-[60px]" />
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
};
