import { FundUsageCard } from './FundUsageCard';

const fundUsages = [
  {
    category: '外注費',
    title: '土地の購入費用',
    description: '土地の購入を合同会社ちもりが行い、\n土地のオーナー権をぐんま山育DAOに委譲する形となります。',
    amount: 2000
  },
  {
    category: '外注費',
    title: '畑の初期整備費',
    description: '主に人件費として利用いたします。',
    amount: 1500
  },
  {
    category: '外注費',
    title: 'ぶどう苗木・資材',
    description: '苗木のライセンス料の支払いや柵つけ費用として利用いたします。',
    amount: 1000
  },
  {
    category: '外注費',
    title: '醸造設備の初期投資',
    description: '苗木のライセンス料の支払いや柵つけ費用として利用いたします。',
    amount: 500
  }
];

export const FundUsage = () => {
  return (
    <section className="margin-y-3l">
      <div className="flex flex-col gap-space-xs max-w-[920px] mx-auto">
        {fundUsages.map((usage, index) => (
          <FundUsageCard key={index} {...usage} />
        ))}
        <p className="text-[10px] leading-[18px] opacity-50 font-genei-gothic">
          ※ぐんま山育DAOが土地を購入をする訳ではありません。製造にかかる費用の一部として発生する経費の例です。ワインの製造にかかる全工程(ぶどうの苗木や、収穫等を含む)は、業務委託契約を合同会社ちもりと行い、発注を行います。段階的に企画フェーズ・栽培フェーズ・商品化フェーズに分けて発注を行います。
        </p>
      </div>
    </section>
  );
}; 