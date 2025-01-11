'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

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
    const fetchDaos = async () => {
      try {
        const { data, error } = await supabase
          .from('daos')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setDaos(data || []);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'エラーが発生しました');
      } finally {
        setLoading(false);
      }
    };

    fetchDaos();
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