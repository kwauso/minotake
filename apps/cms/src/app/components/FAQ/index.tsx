import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { useSetAtom } from 'jotai';
import { currentSectionAtom } from '@/store/atoms';
import Image from 'next/image';
type FAQItem = {
  question: string;
  answer: string | React.ReactNode;
  isOpen?: boolean;
};

const faqItems: FAQItem[] = [
  {
    question: 'プロジェクトはいつから開始しますか？',
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
    )
  },
  {
    question: 'メンバーとの交流はどのように行いますか？',
    answer: '専用の管理画面上でチャットや投票機能を使って交流することができます。'
  },
  {
    question: '株はいつから受け取れますか？',
    answer: '出資金の振込確認後、順次発行させていただきます。'
  },
  {
    question: '配当金はいつ受け取れますか？',
    answer: '収益が発生し次第、株主総会での決議を経て配当を実施する予定です。'
  },
  {
    question: 'プロジェクトが失敗したらどうなりますか？',
    answer: '投資には常にリスクが伴います。詳しくは投資契約書をご確認ください。'
  },
  {
    question: '株の売買は可能ですか？',
    answer: '2025年中はロックアップ期間となります。その後、管理画面上で売買が可能になる予定です。'
  },
  {
    question: 'メンバーになった後、群馬に行く必要などはありますか？',
    answer: '参加は任意です。オンラインでの参加が基本となりますが、実地での活動にもぜひご参加ください。'
  }
];

export const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const setCurrentSection = useSetAtom(currentSectionAtom);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setCurrentSection('faq');
    }
  }, [inView, setCurrentSection]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section ref={ref} id="faq" className="py-32">
      <div className="max-w-[600px] mx-auto px-4 flex flex-col gap-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-[20px] p-10 shadow-[0px_10px_20px_0px_rgba(0,0,0,0.08)] overflow-hidden"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex justify-between items-center gap-10"
            >
              <h3 className="text-left font-genei-gothic text-xl leading-8">
                {item.question}
              </h3>
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
                height: openItems.includes(index) ? 'auto' : 0,
                opacity: openItems.includes(index) ? 1 : 0
              }}
              initial={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-5 font-genei-gothic text-sm leading-6 overflow-hidden"
            >
              {item.answer}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}; 