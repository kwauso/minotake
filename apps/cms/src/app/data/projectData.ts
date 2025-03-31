export const projectData = {
  targetAmount: "¥30,000,000",
  raisedAmount: "¥***",
  investmentUnit: {
    individual: "¥100,000",
    corporate: "¥100,000",
  },
  participants: "300",
  establishment: "***",
  supporter: "***",
  deadline: "2025.8.31",
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
    label: "目標参加者数",
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
