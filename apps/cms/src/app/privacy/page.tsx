'use client';

import { Header } from '@/app/components/Header';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-[800px] mx-auto padding-x-side padding-y-xl">
        <h1 className="text-[32px] leading-[40px] font-genei-gothic mb-8">
          プライバシーポリシー
        </h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-[24px] leading-[32px] font-genei-gothic mb-4">
              1. 個人情報の取り扱いについて
            </h2>
            <p className="text-[15px] leading-8 text-black/80">
              当サイトは、ユーザーの個人情報を適切に管理し、以下に記載する利用目的の範囲内で取り扱います。
            </p>
          </section>
          
          {/* 必要に応じて他のセクションを追加 */}
        </div>
      </div>
    </div>
  );
} 