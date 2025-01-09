'use client';

export const KeyVisual = () => {
  return (
    <div className="relative h-screen w-full">
      {/* 背景画像 */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/publications/kv.png')" }}
      />
      
      {/* コンテンツオーバーレイ */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <p className="text-sm mb-4">群馬ピークスプロジェクト</p>
        <h1 className="text-5xl font-normal mb-8 text-center">
          群馬の山から、<br />世界が認める自然派ワインを。
        </h1>
        <div className="bg-white/20 backdrop-blur px-4 py-1 rounded-full">
          <p className="text-sm">募集期限：2024/01/31</p>
        </div>
      </div>

      {/* 下部の情報バー */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm text-white">
        <div className="max-w-[1312px] mx-auto px-9 py-6 flex justify-between items-center">
          <div className="flex gap-16">
            <div>
              <p className="text-xs opacity-70">累計調達額 / 目標金額</p>
              <p className="text-xl">¥4,620,000 / ¥50,000,000</p>
            </div>
            <div>
              <p className="text-xs opacity-70">1口当たり金額</p>
              <p className="text-xl">個人 ¥10,000 / 法人 ¥1,000,000</p>
            </div>
            <div>
              <p className="text-xs opacity-70">参加者数</p>
              <p className="text-xl">8</p>
            </div>
            <div>
              <p className="text-xs opacity-70">設立</p>
              <p className="text-xl">2025/1/1</p>
            </div>
            <div>
              <p className="text-xs opacity-70">スポンサー</p>
              <p className="text-xl">群馬県庁</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 