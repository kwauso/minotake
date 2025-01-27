import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useSetAtom } from "jotai";
import { currentSectionAtom } from "@/store/atoms";
import Image from "next/image";
type FAQItem = {
  question: string;
  answer: string | React.ReactNode;
  isOpen?: boolean;
};

const faqItems: FAQItem[] = [
  {
    question: "プロジェクトはいつから開始しますか？",
    answer: (
      <span>
        現在すでに既存のメンバーを中心に苗植え等を行っています。
        <br />
        本ページによる募集メンバーが業務の開始・交流を行うのは2025年3月以降となります。
        <br />
        今後のプロジェクトの流れは
        <Link href="#roadmap" className="text-[#3300FF] underline">
          ロードマップ
        </Link>
        をご確認ください。
      </span>
    ),
  },
  {
    question: "メンバーとの交流はどのように行いますか？",
    answer:
      "専用の管理画面上でチャットや投票機能を使って交流することができます。",
  },
  {
    question: "メンバーになった後、群馬に行く必要などはありますか？",
    answer:
      "参加は任意です。オンラインでの参加が基本となりますが、実地での活動にもぜひご参加ください。",
  },
  {
    question: "法人でも参加可能ですか？",
    answer:
      "法人の方も参加可能です。出資金額は個人と異なりますので、詳細は説明会にてご確認ください。",
  },
  {
    question: "参加時に証券口座やウォレットなど準備は必要ですか？",
    answer:
      "特別な準備は必要ありません。通常の銀行口座をお持ちであれば参加可能です。",
  },
  {
    question: "参加には勤め先の会社に申請など必要ですか？",
    answer:
      "一般的な投資として参加される場合は特別な申請は不要です。ただし、貢献活動を行う場合は、所属企業の副業規定に従ってご判断ください。",
  },
  {
    question: "メンバーとして貢献活動を実施する場合、副業に該当しますか？",
    answer:
      "活動内容によって副業に該当する場合があります。所属企業の副業規定をご確認の上、必要に応じて申請をお願いいたします。",
  },
];

export const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const setCurrentSection = useSetAtom(currentSectionAtom);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setCurrentSection("faq");
    }
  }, [inView, setCurrentSection]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section ref={ref} id="faq">
      <div className="max-w-[600px] sp:w-full mx-auto flex flex-col gap-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-white rounded-[20px] p-10 shadow-[0px_10px_20px_0px_rgba(0,0,0,0.08)] overflow-hidden"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex justify-between items-center gap-10"
            >
              <h5 className="text-left font-jp">{item.question}</h5>
              <motion.div
                animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/common/hamburger_arrow.svg"
                  alt=""
                  width={16}
                  height={17}
                  className="opacity-50"
                />
              </motion.div>
            </button>
            <motion.div
              animate={{
                height: openItems.includes(index) ? "auto" : 0,
                opacity: openItems.includes(index) ? 1 : 0,
              }}
              initial={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="font-auto text-sm leading-6 overflow-hidden"
            >
              <br />
              {item.answer}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};
