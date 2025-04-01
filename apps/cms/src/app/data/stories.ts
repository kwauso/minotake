import { Story } from "@/app/types/story";

export const stories: Story[] = [
  {
    category: "01 - かっちゃんの家",
    title: "かっちゃんの家",
    description:
      "私たちがこれからつくるのは、「日本固有種から生まれた新しいブドウ品種による、自然派ワイン」です。日本の高温多湿な気候では、ブドウは病気にかかりやすく、それを防ぐためにはたくさんの農薬を撒くことになります。",
    image: "/images/publications/photo/4.story/img_story_01_cover@2x.jpg",
    alt: "かっちゃんの家",
    content: [
      {
        type: "text",
        subtitle: "日本固有の新しいブドウ品種",
        body: "このストリートの角に位置をする重要な物件。<br/>かつて地域の若者をかわいがってくれた通称かっちゃんの想いでの家。<br/>現在すでに、セカンドレストラン、ワインバー、カフェはテナントで確定。",
      },
    ],
  },
  {
    category: "02 - 米屋",
    title: "米屋",
    description:
      "露地に自生しているヤマブドウは、土地の気候に適応し、病虫害に強いのが特徴です。生食用のブドウとは異なり、小さな実をつけ、風通しが良いため病気になりにくい特性を持っています。",
    image: "/images/publications/photo/4.story/img_story_02_cover@2x.jpg",
    alt: "米屋",
    content: [
      {
        type: "text",
        subtitle: "ワイン作りに適したヤマブドウ",
        body: "かつての米問屋。<br/>200坪の大きな敷地でここは屋台村のように区画を細かくして、店舗にする予定に。<br/>通り側には焼き鳥屋が2025年8月にオープン。",
      },
    ],
  },
];
