'use client';

import { useState, useEffect } from 'react';

type Dao = {
  id: string;
  name: string;
  description: string;
  created_at: string;
};

export default function DaoListPage() {
  const [daos, setDaos] = useState<Dao[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const mockDaos: Dao[] = [
      {
        id: '1',
        name: 'サンプルDAO 1',
        description: 'これはサンプルDAOの説明文です。',
        created_at: '2024-03-20T00:00:00Z'
      },
      {
        id: '2',
        name: 'サンプルDAO 2',
        description: 'コミュニティ主導の分散型組織のサンプルです。',
        created_at: '2024-03-19T00:00:00Z'
      },
      {
        id: '3',
        name: 'テストDAO',
        description: '開発とテスト用のDAOです。',
        created_at: '2024-03-18T00:00:00Z'
      }
    ];

    setTimeout(() => {
      setDaos(mockDaos);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div>読み込み中...</div>;
  if (error) return <div>エラー: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">DAO一覧</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {daos.map((dao) => (
          <div key={dao.id} className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-2">{dao.name}</h2>
            <p className="text-gray-600">{dao.description}</p>
            <div className="mt-4">
              <a
                href={`/dao/${dao.name}`}
                className="text-blue-500 hover:text-blue-700"
              >
                詳細を見る →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 