'use client';

import { useState } from 'react';
import Image from 'next/image';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

type TimeSlot = {
  date: string;
  time: string;
  available: boolean;
};

// 説明会のフォームは消して、日程を選択すると「Googleカレンダーに登録する機能」を追加する

export const ScheduleModal = ({ isOpen, onClose }: Props) => {
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 仮の日程データ
  const timeSlots: TimeSlot[] = [
    { date: '2024/02/01', time: '10:00', available: true },
    { date: '2024/02/01', time: '14:00', available: true },
    { date: '2024/02/02', time: '10:00', available: true },
    { date: '2024/02/02', time: '14:00', available: true },
    { date: '2024/02/03', time: '10:00', available: true },
    { date: '2024/02/03', time: '14:00', available: false },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここで実際にはAPIを呼び出してメール送信などを行う
    console.log('予約情報:', { selectedSlot, email, name });
    setIsSubmitted(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl">説明会の予約</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {isSubmitted ? (
          <div className="text-center py-8">
            <h3 className="text-lg mb-4">予約を受け付けました</h3>
            <p className="text-sm text-gray-600 mb-4">
              ご入力いただいたメールアドレスに、<br />
              説明会のZoomリンクをお送りしましたのでご確認ください。
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800"
            >
              閉じる
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {timeSlots.map((slot, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSlot(slot)}
                  disabled={!slot.available}
                  className={`
                    p-6 rounded-xl border text-left
                    ${selectedSlot === slot 
                      ? 'border-black bg-black text-white' 
                      : 'border-gray-200 hover:border-black'
                    }
                    ${!slot.available && 'opacity-50 cursor-not-allowed'}
                  `}
                >
                  <p className="text-sm mb-2">{slot.date}</p>
                  <p className="text-lg">{slot.time}</p>
                </button>
              ))}
            </div>

            {selectedSlot && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm mb-2">お名前</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-200"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">メールアドレス</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-200"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-black text-white rounded-md hover:bg-gray-800"
                >
                  予約する
                </button>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
}; 