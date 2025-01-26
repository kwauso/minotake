import Image from 'next/image';
import { BenefitCard } from './BenefitCard';
import { InfoCard } from '../common/InfoCard';
import { Divider } from './Divider';
import { Fragment } from 'react';

// 株主区分の定義
const SHAREHOLDER_TYPES = {
  ALL: {
    id: 'all',
    title: '全員',
  }
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
        type: '案１：オーナー権',
        title: 'ブドウ畑の区画オーナー権',
        description: '参加者は出資時にブドウ畑の区画を指定し、その区画から収穫したワインのオーナー権(※)を得⁨⁩ます。',
        note: '※オーナー権とは、自身が選択した区画から収穫されたブドウから、製造されたワインの収益の一部を受け取る権利のことを示します。直接的に、ブドウ苗の所有権や区画の不動産登記の権利を有する訳ではありません。',
        image: '/images/publications/photo/5.benefits/img_benefits_01@3x.jpg'
      },
      {
        type: '案２：利益分配',
        title: '利益剰余金を分配',
        description: 'ワインの販売等を事業化した際に発生する利益剰余金を分配いたします。',
        image: '/images/publications/photo/5.benefits/img_benefits_02@3x.jpg'
      },
      {
        type: '案３：優先購入権利',
        title: '醸造したワインを\n優先的に原価で購入可能',
        description: '自分たちで作ったワインを自分たちで購入ができます。',
        note: '※ワインを製品化した際に購入ができるようになります。',
        image: '/images/publications/photo/5.benefits/img_benefits_03@3x.jpg'
      },
      {
        type: '案４：製品贈呈',
        title: '醸造したワインを1本プレゼント',
        description: '自分たちで作ったワインを自分たちに贈ります。',
        note: '※ワインを製品化した際にプレゼントいたします。',
        image: '/images/publications/photo/5.benefits/img_benefits_04@3x.jpg'
      },
      {
        type: '案５：イベント',
        title: '自然派ワインに合う食を体験する',
        description: '山菜をとる、素材を育てる、シェフと共に味わう、そういった非日常的な体験を提供します。',
        note: '※イベント等は不定期で行います。また皆さんで企画し開催していただくようなこともDAOならではの醍醐味となります。',
        image: '/images/publications/photo/5.benefits/img_benefits_05@3x.jpg'
      },
      {
        type: '案６：イベント',
        title: 'プロフェッショナルによる勉強会',
        description: '日本を代表する醸造家の大岡さんらによる定期的な勉強会に参加できます。',
        image: '/images/publications/photo/5.benefits/img_benefits_06@3x.jpg'
      },
      {
        type: '案７：イベント',
        title: '収穫祭への優先招待',
        description: 'ブドウができたタイミングで収穫祭を行います。\nご家族などと一緒に自分たちで作った新鮮なぶどうを食べにいきましょう。',
        image: '/images/publications/photo/5.benefits/img_benefits_07@3x.jpg'
      },
      {
        type: '案８：イベント',
        title: '醸造家との試飲会参加権',
        description: 'ワインができたら試飲会に参加できます。\nできたばかりの新鮮なワインを楽しんでください。',
        image: '/images/publications/photo/5.benefits/img_benefits_08@3x.jpg'
      },
      {
        type: '案９：名入れ',
        title: 'ワイナリー施設への名入れ',
        description: '畑横に作られるワイナリー施設に飾るボードに名前が連なります。',
        image: '/images/publications/photo/5.benefits/img_benefits_09@3x.jpg'
      },
      {
        type: '案１０：名入れ',
        title: 'ボトルラベルへの名入れ',
        description: '本プロジェクトで作成したワインに名前を入れさせていただきます。',
        image: '/images/publications/photo/5.benefits/img_benefits_10@3x.jpg'
      },
      {
        type: '案１１：名入れ',
        title: 'オリジナルブランドの作成権',
        description: 'ボトルデザインや名称など、本プロジェクトとは別の自分だけのオリジナルブランドを作成できます。',
        image: '/images/publications/photo/5.benefits/img_benefits_11@3x.jpg'
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