"use client";

import Image from "next/image";
import { InfoCard } from "../common/InfoCard";

const LINE_OPENCHAT_URL =
  "https://line.me/ti/g2/UELskVwp_yNNxCpC7Tv1KK30Lt5nb341cUaIZQ?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"; // 実際のLINE OpenChatのURL

export const OpenChat = () => {
  return (
    <div className="max-w-[760px] mx-auto">
      <InfoCard
        title="今後の情報はLINEオープンチャットにてお知らせいたします"
        description="今後の情報を受け取りたい方は、以下からLINEのオープンチャットへご参加ください。アップデート情報や、説明会の日程をご連絡いたします。"
        image="/images/publications/img_caption_join-openchat@3x.png"
        variant="dark"
        button={{
          label: "チャットに入る",
          href: LINE_OPENCHAT_URL,
        }}
      />
    </div>
  );
};
