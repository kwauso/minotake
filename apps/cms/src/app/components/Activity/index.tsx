import { ActivityCard } from "./ActivityCard";

const activities = [
  {
    number: "01",
    title: "ブドウの栽培方法や\nワインの醸造方針を決定します",
    description:
      "栽培方法や醸造方針を、DAOらしく参加者全員で決定していきます。\n自分が作りたいテイストのワインや、良いブドウの育て方などをみんなで共有していきましょう。",
    image: "/images/publications/photo/6.role/img_role_01@2x.jpg",
  },
  {
    number: "02",
    title: "ブドウの生産は経験豊富な\nワイン醸造家と農業専門家が担当します(※)",
    description:
      "フランスで自然派ワインをつくり、世界的評価を得た栽培醸造家・大岡弘武さんや、育種家の林さんといった経験豊富な方々がサポート。\n苗植えやブドウの管理、ワインの醸造などは基本的には参加いただかなくても問題ございません。",
    note: "※実務は、チモリ合同会社に委託・発注を行います。ぐんま山育DAOにて雇用をする訳ではありません。",
    image: "/images/publications/photo/6.role/img_role_02@2x.jpg",
  },
  {
    number: "03",
    title: "木の伐採や苗の植え付けなど、\n山を育てていただきます",
    description:
      "参加は任意ですが、ぜひ皆様にも一緒に山を育ててほしいと考えています。",
    image: "/images/publications/photo/6.role/img_role_03@2x.jpg",
  },
  {
    number: "04",
    title: "販売方法やパッケージ、\nプロモーションなどを決定できます",
    description:
      "どのように売るか、広告などのプロモーションをどのようにしていくかは皆さんで自由に決めていただけます(※)。",
    note: "※ただし、群馬県庁のふるさと納税返礼品としての展開は予定しております。",
    image: "/images/publications/photo/6.role/img_role_04@2x.jpg",
  },
  {
    number: "05",
    title: "企業価値を高めるための活動をしていただきます",
    description:
      "ワインを作るためには多くの期間や費用やブランド価値が重要になってきます。",
    image: "/images/publications/photo/6.role/img_role_05@2x.jpg",
  },
];

export const Activity = () => {
  return (
    <section id="roles">
      <div className="flex flex-col gap-[120px] max-w-[920px] mx-auto">
        {activities.map((activity, index) => (
          <ActivityCard key={index} {...activity} />
        ))}
      </div>
    </section>
  );
};
