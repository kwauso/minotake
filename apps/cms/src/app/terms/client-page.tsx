"use client";

import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";

export default function TermsClientPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-[800px] mx-auto padding-x-side padding-y-xl">
        <h1 className="text-[32px] leading-[40px] font-genei-gothic mb-8">
          利用規約
        </h1>

        <div className="space-y-8">
          <section>
            <p className="text-[15px] leading-8 text-black/80">
              この利用規約（以下「本規約」といいます）は、株式会社ぐんま山育DAO（以下「当社」といいます）が提供するサービス（以下「本サービス」といいます）の利用条件を定めるものです。本サービスの利用者（以下「ユーザー」といいます）は、本規約に同意の上、本サービスをご利用ください。
            </p>
          </section>

          <section>
            <h2 className="text-[24px] leading-[32px] font-genei-gothic mb-4">
              1. 適用
            </h2>
            <p className="text-[15px] leading-8 text-black/80">
              本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。当社は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下「個別規定」といいます）をすることがあります。これら個別規定はその名称のいかんに関わらず、本規約の一部を構成するものとします。
            </p>
          </section>

          <section>
            <h2 className="text-[24px] leading-[32px] font-genei-gothic mb-4">
              2. 利用登録
            </h2>
            <ul className="list-disc pl-6 mt-4 text-[15px] leading-8 text-black/80">
              <li>
                本サービスの利用を希望する方は、本規約に同意の上、当社の定める方法によって利用登録を申請するものとします。
              </li>
              <li>
                当社は、利用登録の申請者に以下の事由があると判断した場合、利用登録の申請を承認しないことがあります：
                <ul className="list-disc pl-6 mt-2">
                  <li>虚偽の事項を届け出た場合</li>
                  <li>本規約に違反したことがある者からの申請である場合</li>
                  <li>反社会的勢力等との関わりがある場合</li>
                  <li>その他、当社が利用登録を相当でないと判断した場合</li>
                </ul>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[24px] leading-[32px] font-genei-gothic mb-4">
              3. アカウント管理
            </h2>
            <ul className="list-disc pl-6 mt-4 text-[15px] leading-8 text-black/80">
              <li>
                ユーザーは、自己の責任において、本サービスのアカウントを適切に管理するものとします。
              </li>
              <li>
                ユーザーは、いかなる場合にも、アカウントを第三者に譲渡または貸与することはできません。
              </li>
              <li>
                当社は、アカウントの漏洩、不正使用等による損害について、一切の責任を負いません。
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[24px] leading-[32px] font-genei-gothic mb-4">
              4. 禁止事項
            </h2>
            <p className="text-[15px] leading-8 text-black/80">
              ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません：
            </p>
            <ul className="list-disc pl-6 mt-4 text-[15px] leading-8 text-black/80">
              <li>法令または公序良俗に違反する行為</li>
              <li>犯罪行為に関連する行為</li>
              <li>
                当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
              </li>
              <li>当社のサービスの運営を妨害するおそれのある行為</li>
              <li>
                他のユーザーに関する個人情報等を収集または蓄積する行為
              </li>
              <li>他のユーザーに成りすます行為</li>
              <li>
                当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為
              </li>
              <li>その他、当社が不適切と判断する行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[24px] leading-[32px] font-genei-gothic mb-4">
              5. 本サービスの提供の停止等
            </h2>
            <p className="text-[15px] leading-8 text-black/80">
              当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします：
            </p>
            <ul className="list-disc pl-6 mt-4 text-[15px] leading-8 text-black/80">
              <li>
                本サービスにかかるコンピュータシステムの保守点検または更新を行う場合
              </li>
              <li>
                地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合
              </li>
              <li>コンピュータまたは通信回線等が事故により停止した場合</li>
              <li>その他、当社が本サービスの提供が困難と判断した場合</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[24px] leading-[32px] font-genei-gothic mb-4">
              6. 免責事項
            </h2>
            <ul className="list-disc pl-6 mt-4 text-[15px] leading-8 text-black/80">
              <li>
                当社は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。
              </li>
              <li>
                当社は、本サービスの内容変更、中断、終了によって生じたいかなる損害についても、一切の責任を負いません。
              </li>
              <li>
                当社は、ユーザーが本サービスの利用に関して被った損害について、一切の責任を負いません。
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[24px] leading-[32px] font-genei-gothic mb-4">
              7. サービス内容の変更等
            </h2>
            <p className="text-[15px] leading-8 text-black/80">
              当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="text-[24px] leading-[32px] font-genei-gothic mb-4">
              8. 利用規約の変更
            </h2>
            <p className="text-[15px] leading-8 text-black/80">
              当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。変更後の利用規約は、当社ウェブサイトに掲載したときから効力を生じるものとします。
            </p>
          </section>

          <section>
            <h2 className="text-[24px] leading-[32px] font-genei-gothic mb-4">
              9. 準拠法・裁判管轄
            </h2>
            <p className="text-[15px] leading-8 text-black/80">
              本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
} 