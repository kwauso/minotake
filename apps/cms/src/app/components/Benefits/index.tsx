import Image from 'next/image';
import { BenefitCard } from './BenefitCard';
import { InfoCard } from '../common/InfoCard';
import { Divider } from './Divider';
import { Fragment } from 'react';

// 株主区分の定義
const SHAREHOLDER_TYPES = {
  ALL: {
    id: 'all',
    title: '株主全員',
  },
  TEN: {
    id: 'ten',
    title: '10株以上',
  },
  HUNDRED: {
    id: 'hundred',
    title: '100株以上',
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
        type: 'オーナー権',
        title: 'ぶどう畑の区画オーナー権と販売収益の受け取り',
        description: '参加者は出資時にぶどう畑の区画を指定し、その区画から収穫したワインのオーナー権(※)を得⁨⁩ます。\n\n収穫されたワインは運用費用や販売手数料が引かれた収益の一部を出資者へ支払います。',
        note: '※オーナー権とは、自身が選択した区画から収穫されたぶどうから、製造されたワインの収益の一部を受け取る権利のことを示します。直接的に、ぶどう苗の所有権や区画の不動産登記の権利を有する訳ではありません。',
        image: '/images/publications/kv.png'
      },
      {
        type: '配当金',
        title: '利益剰余金を分配',
        description: 'ワインの販売等を事業化した際に発生する利益剰余金を分配いたします。\n利益剰余金の決定も、次年度の事業予算などを加味して株主総会で皆様に決めていただきます。',
        image: '/images/publications/kv.png'
      },
      {
        type: '購入権',
        title: '醸造したワインを\n優先的に原価で購入可能',
        description: '自分たちで作ったワインを自分たちで購入ができます。',
        note: '※ワインを製品化した際に購入ができるようになります。',
        image: '/images/publications/kv.png'
      },
      {
        type: 'プレゼント',
        title: '醸造したワインを1本プレゼント',
        description: '自分たちで作ったワインを自分たちに贈ります。',
        note: '※ワインを製品化した際にプレゼントされます。',
        image: '/images/publications/kv.png'
      }
    ],
    info: [
      {
        title: '畑・区画の選択方法について',
        description: 'プロジェクト全体のぶどう畑（総面積 XXヘクタール）を、1区画あたり2ヘクタールずつに分割します。出資者の皆様はお好みの区画を選択可能です。',
        details: [
          '選択区画での収益配当選択した区画で生産されたワインの売上額に応じて、収益の一部を配当として受け取ることができます。詳細は<a href="/documents/regulation" class="text-blue-600 underline hover:text-blue-800">「ぐんま山育DAO_規定」</a>をご確認ください。',
          '配当率（例：XX％）実際の配当率は、DAOXの投票によって決定されます。'
        ],
        image: '/images/publications/kv.png'
      },
      {
        title: '口数の多さで区画選択の優先順位が決定',
        description: '土地の購入が完了し次第、株式数が多い順に区画を選択していただきます。',
        image: '/images/publications/kv.png'
      }
    ]
  },
  [SHAREHOLDER_TYPES.TEN.id]: {
    benefits: [
      {
        type: 'イベント',
        title: '自然派ワインに合う食を体験する',
        description: '山菜をとる、素材を育てる、シェフと共に味わう、そういった非日常的な体験を提供します。',
        note: '※イベント等は不定期で行います。また皆さんで企画し開催していただくようなこともDAOならではの醍醐味となります。',
        image: '/images/publications/kv.png'
      },
      {
        type: 'イベント',
        title: '大岡さんによる勉強会',
        description: '日本を代表する醸造家の大岡さんによる定期的な勉強会に参加できます。',
        image: '/images/publications/kv.png'
      },
      {
        type: 'イベント',
        title: '収穫祭への優先招待',
        description: 'ぶどうができたタイミングで収穫祭を行います。\nご家族などと一緒に自分たちで作った新鮮なぶどうを食べにいきましょう。',
        image: '/images/publications/kv.png'
      }
    ]
  },
  [SHAREHOLDER_TYPES.HUNDRED.id]: {
    benefits: [
      {
        type: '名入れ',
        title: 'ワイナリー施設への名入れ',
        description: '畑横に作られるワイナリー施設に飾るボードに名前が連なります。',
        image: '/images/publications/kv.png'
      },
      {
        type: '名入れ',
        title: 'ボトルラベルへの名入れ',
        description: '本プロジェクトで作成したワインに名前を入れさせていただきます。',
        image: '/images/publications/kv.png'
      },
      {
        type: 'ラベルデザイン',
        title: 'オリジナルブランドの作成権',
        description: 'ボトルデザインや名称など、プロジェクトとは個別の自分だけのオリジナルブランドを作成できます。',
        image: '/images/publications/kv.png'
      }
    ]
  }
};

export const Benefits = () => {
  return (
    <section className="py-32 px-0">
      <div className="flex flex-col max-w-[760px] tb:max-w-[610px] sp:max-w-[100vw] mx-auto">
        {Object.values(SHAREHOLDER_TYPES).map((shareholderType, index) => (
          <Fragment key={shareholderType.id}>
            <div>
              <h2 className="font-auto mb-[60px]">
                {shareholderType.title}
              </h2>
              
              <div className="flex flex-col gap-space-2xl">
                {benefitsData[shareholderType.id]?.benefits.map((benefit, index) => {
                  const isOwnershipBenefit = benefit.type === 'オーナー権';
                  return (
                    <div key={`benefit-${index}`} className="flex flex-col gap-space-s">
                      <BenefitCard {...benefit} />
                      <div className="flex flex-col gap-space-s">
                        {isOwnershipBenefit && benefitsData[shareholderType.id]?.info?.map((info, infoIndex) => (
                          <InfoCard
                            key={`info-${infoIndex}`}
                            image={info.image}
                            title={info.title}
                            description={info.description}
                            details={info.details}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
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