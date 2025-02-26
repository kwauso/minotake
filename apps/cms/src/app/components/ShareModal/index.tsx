"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  TwitterShareButton,
  XIcon, // TwitterIconの代わりにXIconをインポート
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
} from "react-share";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onGuidelineOpen: () => void;
};

export const ShareModal = ({ isOpen, onClose, onGuidelineOpen }: Props) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle =
    "群馬の山から、世界が認める自然派ワインを。🍷✨\n\n一緒に新しい価値を創り出しませんか？\n#ぐんま山育DAO #自然派ワイン";

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("URLのコピーに失敗しました:", err);
    }
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <div
      className={`
        fixed inset-0 z-[100] flex items-center justify-center padding-x-side
        transition-all duration-500 ease-out
        ${isVisible ? "bg-black/50" : "bg-transparent pointer-events-none"}
      `}
      onClick={onClose}
    >
      <div
        className={`
          bg-white rounded-2xl w-full max-w-md p-8
          transform transition-all duration-500 ease-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
        onClick={(e) => e.stopPropagation()}
        onTransitionEnd={() => {
          if (!isOpen) {
            setIsAnimating(false);
          }
        }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">プロジェクトをシェア 🚀</h2>
          <button
            onClick={onClose}
            className="p-2 hover:opacity-70 transition-opacity"
          >
            <Image
              src="/images/publications/modal_close_button.svg"
              alt="閉じる"
              width={24}
              height={24}
            />
          </button>
        </div>

        <div className="text-center mb-8">
          <p className="text-sm text-gray-600">
            より多くの仲間と一緒に、群馬の新しい未来を創っていきましょう！ ✨
          </p>
          <p className="text-xs text-gray-500 mt-2">
            #ぐんま山育DAO #自然派ワイン 🍷
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-8">
          {/* @ts-ignore */}
          <TwitterShareButton url={shareUrl} title={shareTitle}>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 flex items-center justify-center">
                {/* @ts-ignore */}
                <XIcon size={48} round />
              </div>
              <span className="text-xs">X</span>
            </div>
          </TwitterShareButton>

          {/* @ts-ignore */}
          <FacebookShareButton url={shareUrl} quote={shareTitle}>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 flex items-center justify-center">
                {/* @ts-ignore */}
                <FacebookIcon size={48} round />
              </div>
              <span className="text-xs">Facebook</span>
            </div>
          </FacebookShareButton>

          {/* @ts-ignore */}
          <LineShareButton url={shareUrl} title={shareTitle}>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 flex items-center justify-center">
                {/* @ts-ignore */}
                <LineIcon size={48} round />
              </div>
              <span className="text-xs">LINE</span>
            </div>
          </LineShareButton>
        </div>

        <div className="relative">
          <input
            type="text"
            value={shareUrl}
            readOnly
            className="w-full pr-24 py-3 px-4 bg-gray-100 rounded-lg text-sm"
          />
          <button
            onClick={handleCopy}
            className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-black text-white text-xs rounded-md hover:bg-gray-800 transition-colors"
          >
            {isCopied ? "コピーしました！" : "URLをコピー"}
          </button>
        </div>

        <div className="mt-4 space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">シェアする際の注意点：</p>
            <ul className="text-xs text-gray-500 list-disc pl-4 space-y-1">
              <li>投資や参加を促すような表現は避けてください</li>
              <li>個人的な感想や情報の共有にとどめましょう</li>
              <li>確約的な表現は使用しないでください</li>
            </ul>
          </div>
          <button
            onClick={() => {
              onClose();
              setTimeout(() => onGuidelineOpen(), 500);
            }}
            className="text-sm text-gray-500 hover:text-gray-700 underline w-full text-center"
          >
            シェアガイドラインの詳細を確認する
          </button>
        </div>
      </div>
    </div>
  );
};
