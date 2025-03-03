import { Link } from '@tanstack/react-router'
import { createFileRoute } from '@tanstack/react-router'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute('/thanks')({
  component: ThanksPage,
})

export default function ThanksPage() {
  return (
    <div className='container mx-auto px-4 py-12 max-w-4xl'>
      <div className='mb-8'>
        <Link
          to='/'
          className='flex items-center text-sm text-muted-foreground hover:text-primary'
        >
          <ArrowLeft className='mr-2 h-4 w-4' />
          トップページに戻る
        </Link>
      </div>

      <Card className='border-none shadow-lg'>
        <CardHeader className='text-center'>
          <CardTitle className='text-2xl font-bold text-primary'>
            投資申込ありがとうございます
          </CardTitle>
          <CardDescription>
            ぐんま山育DAOへの投資申込が完了しました
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='bg-muted p-6 rounded-lg'>
            <p className='mb-4'>
              ぐんま山育DAO
              への投資申込フォームをご提出いただき、誠にありがとうございます。
              今後、ぐんま山育DAO のオリジナル自然派ワインを
              一緒に作っていくことができることを楽しみにしております。
              今後の手続きを進めるため、以下のお支払い手順でご対応ください。
            </p>

            <div className='space-y-4 mt-6'>
              <div>
                <h3 className='font-bold text-lg mb-2'>■■ お支払い詳細</h3>
                <p>取得株式数(口数)： 投資家様が申し込んだ口数</p>
                <p>
                  合計金額： 上記の取得株式数 × ¥10,000 (例: 3口出資の場合、3口
                  × ¥10,000 = ¥30,000)
                </p>
              </div>

              <Separator />

              <div>
                <h3 className='font-bold text-lg mb-2'>
                  ■■ 日本からのご送金の場合
                </h3>
                <h4 className='font-semibold mb-1'>■ 受取銀行詳細:</h4>
                <ul className='list-disc pl-6 space-y-1'>
                  <li>銀行名: 三井住友銀行</li>
                  <li>支店名: 五反田支店（653）</li>
                  <li>口座種類: 普通</li>
                  <li>口座番号: 8898657</li>
                  <li>口座名義人: ｶ) ｸﾞﾝﾏﾔﾏｲｸﾀﾞｵ</li>
                </ul>
              </div>

              <Separator />

              <div>
                <h3 className='font-bold text-lg mb-2'>
                  ■■ 支払い期限について
                </h3>
                <p>
                  このメールの日付から 5
                  日以内に、合計支払金額を指定の口座にお振込みください。
                </p>
              </div>

              <Separator />

              <div>
                <h3 className='font-bold text-lg mb-2'>
                  ■■ 取引手数料について
                </h3>
                <p>
                  振込過程で発生する取引手数料は投資家様のご負担となります。我々が受け取る金額が上記の「合計支払金額」と一致するようご注意ください。
                </p>
              </div>

              <Separator />

              <div>
                <h3 className='font-bold text-lg mb-2'>
                  ■■ 重要なお知らせについて
                </h3>
                <ul className='list-disc pl-6 space-y-1'>
                  <li>
                    振込に使用する口座名義が投資申込書に記載した名前と一致していることを確認してください。
                  </li>
                  <li>
                    口座名義の不一致による遅延や間違った金額分の送金については、ぐんま山育DAO
                    は責任を負いかねます。振込を行う前に全ての詳細を再確認してください。
                  </li>
                </ul>
                <p className='mt-2'>
                  ご不明な点やサポートが必要な場合は、info@gunma-yamaiku-dao.jp
                  までご連絡ください。 よろしくお願いいたします。
                </p>
                <p className='mt-4 font-semibold'>ぐんま山育DAO チーム</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className='flex justify-center'>
          <Button asChild>
            <Link to='/'>トップページに戻る</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
