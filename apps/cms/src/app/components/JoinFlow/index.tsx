import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSetAtom } from 'jotai';
import { currentSectionAtom } from '@/store/atoms';
import Image from 'next/image';
import { FlowCard } from './FlowCard';
import { InfoCard } from '../common/InfoCard';

const personalSteps = [
  {
    title: '1. 右下の「参加する」ボタンから画面に沿って申込む'
  },
  {
    title: '2. 本人確認・電子サインを行う'
  },
  {
    title: '3. 出資金額を口座振込',
    description: 'お申し込み時に入力したメールアドレス宛に指定口座等の情報をお送りいたします。'
  },
  {
    title: '4. 株を受け取る',
    description: '',
    note: {
      title: '株の売買について',
      items: ['2025年中はロックアップをかけさせていただきます。詳細は投資契約書でご説明いたします。']
    }
  },
  {
    title: '5. 管理画面へ招待',
    description: '',
    note: {
      items: [
        '参加者同士のチャットが可能です。',
        '投票機能でオンライン上で議決を行えます。',
        '株価をチェック、売買が可能になります。'
      ],
      footer: '※現在開発中です。'
    }
  }
];

const corporateSteps = [
  {
    title: '1. 右下の「参加する」ボタンから画面に沿って申込む',
    description: 'お申込みいただいた後、株式会社ガイアックスにてリーガルチェックを行います。'
  },
  {
    title: '2. 電子サインを行う'
  },
  {
    title: '3. 出資金額を口座振込',
    description: 'お申し込み時に入力したメールアドレス宛に指定口座等の情報をお送りいたします。'
  },
  {
    title: '4. 株または会員権（預託金）を受け取る',
    notes: [
      {
        title: '株の売買について',
        items: ['2025年中はロックアップをかけさせていただきます。詳細は投資契約書でご説明いたします。']
      },
      {
        title: '会員権について',
        items: [
          '会員権は有価証券ではなく、前払式支払手段として扱われます。',
          'ガバナンスや優待などの機能は株式と同等ですが、配当は実施されません。',
          'DAOのガバナンス会議による意思決定を経て、任意のタイミングで株式に転換可能です。転換後は配当の対象となります。'
        ]
      }
    ]
  },
  {
    title: '5. 管理画面へ招待',
    description: '',
    note: {
      items: [
        '参加者同士のチャットが可能です。',
        '投票機能でオンライン上で議決を行えます。',
        '株価をチェック、売買が可能になります。'
      ],
      footer: '※現在開発中です。'
    }
  }
];

export const JoinFlow = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const setCurrentSection = useSetAtom(currentSectionAtom);

  useEffect(() => {
    if (inView) {
      setCurrentSection('join-flow');
    }
  }, [inView, setCurrentSection]);

  const handleScheduleClick = () => {
    // 説明会日程へのロジック
  };

  return (
    <section ref={ref} className="py-32">
      <div className="flex flex-col items-center gap-[120px] max-w-[600px] mx-auto">
        <FlowCard type="個人" steps={personalSteps} />
        <div className="w-full h-[1px] bg-black/20" />
        <FlowCard type="法人" steps={corporateSteps} />
        
        <InfoCard
          image="/images/publications/kv.png"
          title="詳細が気になる方はウェビナーにご参加ください"
          description="Zoomにて株式会社ガイアックスが説明会を実施しております。不明点や詳細をお聞きしたい方は以下から日程をご確認ください。"
          button={{
            label: "説明会日程へ",
            onClick: handleScheduleClick
          }}
        />
      </div>
    </section>
  );
}; 