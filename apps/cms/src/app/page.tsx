'use client';
import { useState } from 'react';

export default function Page() {
  const [message, setMessage] = useState<string>('');
  const [name, setName] = useState<string>('');

  const fetchMessage = async (inputName: string) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/message/${inputName}`);
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error fetching message:', error);
      setMessage('エラーが発生しました');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">メッセージ取得</h1>
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="名前を入力"
          className="border p-2 rounded"
        />
        <button
          onClick={() => fetchMessage(name)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          メッセージを取得
        </button>
      </div>
      {message && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}
