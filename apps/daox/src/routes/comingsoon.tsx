import { useEffect } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { useAuthGuard } from '../lib/auth';

// Zendeskウィジェットの型定義
declare global {
  interface Window {
    zE?: unknown;
    zESettings?: unknown;
  }
}

export const Route = createFileRoute('/comingsoon')({
  component: ComingSoon,
});

export default function ComingSoon() {
  useAuthGuard('/waitinglist', false); // 未認証の場合は/waitinglistにリダイレクト

  useEffect(() => {
    // Zendeskスクリプトの読み込み
    const script = document.createElement('script');
    script.id = 'ze-snippet';
    script.src = 'https://static.zdassets.com/ekr/snippet.js?key=1a683cfd-9929-46e5-b3ac-eeb7eb960e25';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // クリーンアップ時にスクリプトを削除
      const existingScript = document.getElementById('ze-snippet');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-6xl font-bold text-gray-900">
        DaoX coming soon...
      </h1>
      {/* Zendeskウィジェットは自動的に右下に表示されます */}
    </div>
  );
} 