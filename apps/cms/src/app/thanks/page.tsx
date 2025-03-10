"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8">
          <Link
            href="/"
            className="flex items-center text-sm text-muted-foreground hover:text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-4 w-4"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            トップページに戻る
          </Link>
        </div>

        <div className="border rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 text-center border-b">
            <h1 className="text-2xl font-bold text-primary">
              投資申込ありがとうございます
            </h1>
            <p className="text-muted-foreground mt-2">
              ぐんま山育DAOへの投資申込が完了しました
            </p>
          </div>
          <div className="p-6 space-y-6">
            <div className="bg-muted p-6 rounded-lg">
              <p className="mb-4">
                ぐんま山育DAO
                への投資申込フォームをご提出いただき、誠にありがとうございます。
                今後、ぐんま山育DAO のオリジナル自然派ワインを
                一緒に作っていくことができることを楽しみにしております。
                今後の手続きを進めるため、以下のお支払い手順でご対応ください。
              </p>

              <div className="space-y-4 mt-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">■■ お支払い詳細</h3>
                  <p>取得株式数(口数)： 投資家様が申し込んだ口数</p>
                  <p>
                    合計金額： 上記の取得株式数 × ¥10,000 (例:
                    3口出資の場合、3口 × ¥10,000 = ¥30,000)
                  </p>
                </div>

                <hr className="border-t border-gray-200 my-4" />

                <div>
                  <h3 className="font-bold text-lg mb-2">
                    ■■ 日本からのご送金の場合
                  </h3>
                  <h4 className="font-semibold mb-1">■ 受取銀行詳細:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>銀行名: 三井住友銀行</li>
                    <li>支店名: 五反田支店（653）</li>
                    <li>口座種類: 普通</li>
                    <li>口座番号: 8898657</li>
                    <li>口座名義人: ｶ) ｸﾞﾝﾏﾔﾏｲｸﾀﾞｵ</li>
                  </ul>
                </div>

                <hr className="border-t border-gray-200 my-4" />

                <div>
                  <h3 className="font-bold text-lg mb-2">
                    ■■ 支払い期限について
                  </h3>
                  <p>
                    このメールの日付から、本日を含め 3
                    日以内(本日が3月12日の場合、3月14日中)に、合計支払金額を指定の口座にお振込みください。
                    支払い期限に遅れると、投資申込が無効となることがあります。
                  </p>
                </div>

                <hr className="border-t border-gray-200 my-4" />

                <div>
                  <h3 className="font-bold text-lg mb-2">
                    ■■ 取引手数料について
                  </h3>
                  <p>
                    振込過程で発生する取引手数料は投資家様のご負担となります。我々が受け取る金額が上記の「合計支払金額」と一致するようご注意ください。
                  </p>
                </div>

                <hr className="border-t border-gray-200 my-4" />

                <div>
                  <h3 className="font-bold text-lg mb-2">
                    ■■ 重要なお知らせについて
                  </h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      振込に使用する口座名義が投資申込書に記載した名前と一致していることを確認してください。
                    </li>
                    <li>
                      口座名義の不一致による遅延や間違った金額分の送金については、ぐんま山育DAO
                      は責任を負いかねます。振込を行う前に全ての詳細を再確認してください。
                    </li>
                  </ul>
                  <p className="mt-2">
                    ご不明な点やサポートが必要な場合は、info@gunma-yamaiku-dao.jp
                    までご連絡ください。 よろしくお願いいたします。
                  </p>
                  <p className="mt-4 font-semibold">ぐんま山育DAO チーム</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 border-t flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              トップページに戻る
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
