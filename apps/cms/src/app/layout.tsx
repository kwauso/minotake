import localFont from 'next/font/local';
import './globals.css';

const genEiGothic = localFont({
  src: './fonts/GenEiGothicM-Regular.ttf',
  variable: '--font-genei-gothic'
});

export const metadata = {
  title: 'DAOX',
  description: 'DAOX - 地域活性化プロジェクト',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${genEiGothic.variable}`}>
      <body className="font-genei-gothic">
        {children}
      </body>
    </html>
  );
}
