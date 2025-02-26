import Image from "next/image";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const ShareGuidelineModal = ({ isOpen, onClose }: Props) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center padding-x-side bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-4xl p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">シェアガイドライン</h2>
          <button
            onClick={onClose}
            className="p-2 hover:opacity-70 transition-opacity"
          >
            <Image
              src="/images/publications/modal_close_button.svg"
              alt="閉じる"
              width={24}
              height={24}
            />
          </button>
        </div>

        <div className="space-y-8">
          <section>
            <h3 className="text-base font-bold mb-4">前提共有</h3>
            <p className="text-sm leading-6">
              当DAOでは株式という有価証券を発行するスキームをとっております。
              投資を募る行為は発行会社の役職員に限定されています。
              もちろん、外部の人物が当DAOについて話すことが禁止されているわけではありません。
              以下の表現を厳守して、素晴らしいメンバーを増やしていきましょう。
            </p>
          </section>

          <section>
            <h3 className="text-base font-bold mb-4">避けるべきこと</h3>
            <p className="text-sm leading-6 mb-4">
              当社を推奨したり、他者に勧めるようなコメントをしないでください。
              他者に投資や当社への参加を促すようなコメントは避けてください。
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-sm">
                推奨されないコメント例:
              </h4>
              <ul className="text-sm leading-6 list-disc pl-4 text-gray-700">
                <li>
                  「このプロジェクトは素晴らしい！今すぐ投資すべきです！」
                </li>
                <li>
                  「今すぐ参加して株式を手に入れよう！最初の投資家になろう！」
                </li>
              </ul>
              <p className="text-sm mt-2 text-gray-700">
                このようなコメントは、金融勧誘規制に違反する可能性があり、ペナルティを受ける可能性があります。
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-base font-bold mb-4">許容されるコメント</h3>
            <p className="text-sm leading-6 mb-4">
              情報的、個人的、または意見に基づくコメントは問題ありません。
              このようなコメントは勧誘に該当せず、規制の対象外です。
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-bold mb-2 text-sm">許容されるコメント例:</h4>
              <ul className="text-sm leading-6 list-disc pl-4 text-gray-700">
                <li>
                  「このプラットフォームでは少額投資で株式を取得できるのが魅力的です。とても面白い取り組みだと思います！」
                </li>
                <li>
                  「このプラットフォームは非常に革新的で、その運営方法が大好きです！」
                </li>
                <li>
                  「このプロジェクトは私の価値観にぴったり合っています。これからもxxを応援していきたいと思います！」
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h3 className="text-base font-bold mb-4">
              知人から詳細を教えてと言われたら？
            </h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-sm">避けるべき行動</h4>
                <ul className="text-sm leading-6 list-disc pl-4">
                  <li>個人的な勧誘行為をしない</li>
                  <li>確約的な表現をしない</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-sm">適切な対応例</h4>
                <ul className="text-sm leading-6 list-disc pl-4">
                  <li>公式の情報を共有する</li>
                  <li>個人的な感想を共有する</li>
                  <li>発行会社の窓口を紹介する</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
