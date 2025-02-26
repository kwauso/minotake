"use client";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

export default function PrivacyClientPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-[800px] mx-auto padding-x-side padding-y-xl">
        <h1 className="text-[32px] leading-[40px] font-genei-gothic mb-8">
          プライバシーポリシー
        </h1>

        <div className="space-y-8">
          <section>
            <p className="text-[15px] leading-8 text-black/80">
              株式会社ぐんま山育DAO（以下「当社」といいます）は、当社の提供するサービス（以下「本サービス」といいます）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます）を定めます。
            </p>
          </section>

          <section>
            <h2 className="text-[24px] leading-[32px] font-genei-gothic mb-4">
              1. 個人情報の取得方法
            </h2>
            <p className="text-[15px] leading-8 text-black/80">
              当社は、以下の方法により個人情報を取得します：
            </p>
            <ul className="list-disc pl-6 mt-4 text-[15px] leading-8 text-black/80">
              <li>本サービスへの会員登録時にご入力いただく情報</li>
              <li>本サービスの利用時に自動的に収集される情報</li>
              <li>お問い合わせフォームなどでご入力いただく情報</li>
              <li>イベントやセミナーなどへの参加申込時にご提供いただく情報</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[24px] leading-[32px] font-genei-gothic mb-4">
              2. 取得する個人情報の項目
            </h2>
            <p className="text-[15px] leading-8 text-black/80">
              当社が取得する個人情報の項目は以下のとおりです：
            </p>
            <ul className="list-disc pl-6 mt-4 text-[15px] leading-8 text-black/80">
              <li>氏名（法人の場合は、担当者名）</li>
              <li>メールアドレス</li>
              <li>電話番号</li>
              <li>住所</li>
              <li>生年月日</li>
              <li>本人確認書類に記載の情報</li>
              <li>銀行口座情報</li>
              <li>その他当社が定める入力フォームにユーザーが入力する情報</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[24px] leading-[32px] font-genei-gothic mb-4">
              3. 利用目的
            </h2>
            <p className="text-[15px] leading-8 text-black/80">
              当社は、取得した個人情報を以下の目的で利用いたします：
            </p>
            <ul className="list-disc pl-6 mt-4 text-[15px] leading-8 text-black/80">
              <li>本サービスの提供・運営のため</li>
              <li>ユーザーからのお問い合わせに対応するため</li>
              <li>本人確認を行うため</li>
              <li>利用規約に違反する行為に対応するため</li>
              <li>当社からのお知らせや連絡をするため</li>
              <li>サービスの改善、新サービスの開発等に役立てるため</li>
              <li>法令に基づく対応のため</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[24px] leading-[32px] font-genei-gothic mb-4">
              4. 個人情報の第三者提供
            </h2>
            <p className="text-[15px] leading-8 text-black/80">
              当社は、以下の場合を除き、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません：
            </p>
            <ul className="list-disc pl-6 mt-4 text-[15px] leading-8 text-black/80">
              <li>法令に基づく場合</li>
              <li>人の生命、身体または財産の保護のために必要がある場合</li>
              <li>
                公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合
              </li>
              <li>
                国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[24px] leading-[32px] font-genei-gothic mb-4">
              5. 開示請求等の手続き
            </h2>
            <p className="text-[15px] leading-8 text-black/80">
              ユーザーは、当社に対して個人情報の開示、訂正、利用停止等を請求することができます。手続きの詳細については、下記お問い合わせ窓口までご連絡ください。
            </p>
          </section>

          <section>
            <h2 className="text-[24px] leading-[32px] font-genei-gothic mb-4">
              6. お問い合わせ窓口
            </h2>
            <p className="text-[15px] leading-8 text-black/80">
              株式会社ぐんま山育DAO
              <br />
              Email: info@gunma-yamaiku-dao.jp
            </p>
          </section>

          <section>
            <h2 className="text-[24px] leading-[32px] font-genei-gothic mb-4">
              7. 改定
            </h2>
            <p className="text-[15px] leading-8 text-black/80">
              当社は、必要に応じて本ポリシーを改定することがあります。改定した場合には、本ウェブサイト上でお知らせいたします。
            </p>
          </section>

          <section>
            <h2 className="text-[24px] leading-[32px] font-genei-gothic mb-4">
              8. DAOXにおけるデータの取り扱いについて
            </h2>
            <p className="text-[15px] leading-8 text-black/80">
              当社が提供するDAO参加者向けコミュニケーションプラットフォーム「DAOX」における個人情報を含むデータの管理は、開発元である株式会社ガイアックスが行います。DAOXで取り扱われる個人情報については、株式会社ガイアックスのプライバシーポリシーが適用されます。
            </p>
            <ul className="list-disc pl-6 mt-4 text-[15px] leading-8 text-black/80">
              <li>
                DAOXにおけるデータは、株式会社ガイアックスのセキュアな環境で管理されます
              </li>
              <li>
                DAOXで収集された個人情報は、株式会社ガイアックスのプライバシーポリシーに基づいて取り扱われます
              </li>
              <li>
                DAOXに関するお問い合わせは、株式会社ガイアックスの窓口にて承ります
              </li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
