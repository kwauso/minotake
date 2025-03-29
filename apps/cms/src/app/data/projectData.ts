export const projectData = {
  targetAmount: "¥5,000,000",
  raisedAmount: "¥3,800,000",
  investmentUnit: {
    individual: "¥10,000",
    corporate: "¥1,000,000",
  },
  participants: "81",
  establishment: "2025.01.17",
  supporter: "群馬県庁",
  deadline: "終了",
  openchatUrl:
    "https://line.me/ti/g2/UELskVwp_yNNxCpC7Tv1KK30Lt5nb341cUaIZQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default",
  investmentFormUrl: "https://dao7682.zendesk.com/hc/ja/requests/new",
};

export const statusItems = [
  {
    label: "累計調達額 / 目標金額",
    value: projectData.raisedAmount,
    subValue: projectData.targetAmount,
  },
  {
    label: "1口当たり金額",
    type: "unit",
    individual: projectData.investmentUnit.individual,
    corporate: projectData.investmentUnit.corporate,
  },
  {
    label: "参加者数",
    value: projectData.participants,
  },
  {
    label: "設立",
    value: projectData.establishment,
  },
  {
    label: "サポーター",
    value: projectData.supporter,
    isJP: true,
  },
];
