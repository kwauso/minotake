'use client';

import { useParams } from 'next/navigation';

export default function PublicationPage() {
  const params = useParams<{ publication_name: string }>();

  if (params.publication_name === 'gunma_wine2025') {
    return (
      <div>
        {/* ここにコンポーネントを配置していきます */}
      </div>
    );
  }

  return <div>プロジェクトが見つかりません</div>;
} 