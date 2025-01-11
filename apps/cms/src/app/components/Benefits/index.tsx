import Image from 'next/image';
import { BenefitCard } from './BenefitCard';
import { InfoCard } from './InfoCard';
import { Divider } from './Divider';

export const Benefits = () => {
  const benefits = [
    {
      type: 'オーナー権',
      title: 'ぶどう畑の区画オーナー権と販売収益の受け取り',
      description: '参加者は出資時にぶどう畑の区画を指定し、その区画から収穫したワインのオーナー権(※)を得⁨⁩ます。\n\n収穫されたワインは運用費用や販売手数料が引かれた収益の一部を出資者へ支払います。',
      note: '※オーナー権とは、自身が選択した区画から収穫されたぶどうから、製造されたワインの収益の一部を受け取る権利のことを示します。直接的に、ぶどう苗の所有権や区画の不動産登記の権利を有する訳ではありません。',
      image: '/images/publications/benefits/owner.png'
    },
    // 他の特典データも同様に追加
  ];

  return (
    <section className="py-32">
      <div className="flex flex-col items-center gap-[120px] max-w-[760px] mx-auto">
        <h2 className="font-genei-gothic text-[36px] leading-[48px]">株主全員</h2>
        
        {/* メインの特典カード */}
        <BenefitCard {...benefits[0]} />

        {/* 情報カード */}
        <div className="flex flex-col gap-5">
          <InfoCard
            title="畑・区画の選択方法について"
            description="プロジェクト全体のぶどう畑（総面積 XXヘクタール）を、1区画あたり2ヘクタールずつに分割します。出資者の皆様はお好みの区画を選択可能です。"
            details={[
              "選択区画での収益配当選択した区画で生産されたワインの売上額に応じて、収益の一部を配当として受け取ることができます。",
              "配当率（例：XX％）実際の配当率は、DAOXの投票によって決定されます。"
            ]}
            image="/images/publications/benefits/selection.png"
          />
          <InfoCard
            title="口数の多さで区画選択の優先順位が決定"
            description="土地の購入が完了し次第、株式数が多い順に区画を選択していただきます。"
            image="/images/publications/benefits/priority.png"
          />
        </div>

        {/* その他の特典カード */}
        {benefits.slice(1).map((benefit, index) => (
          <>
            <BenefitCard key={index} {...benefit} />
            {index < benefits.length - 2 && <Divider />}
          </>
        ))}
      </div>
    </section>
  );
}; 