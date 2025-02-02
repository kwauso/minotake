import { Metadata } from "next";
import PrivacyClientPage from "./client-page";

export const metadata: Metadata = {
  title: "プライバシーポリシー | ぐんま山育DAO powerd by DAO",
  description:
    "株式会社ぐんま山育DAOのプライバシーポリシーについてご確認いただけます。個人情報の取り扱い、利用目的、第三者提供などについて定めています。",
};

export default function PrivacyPage() {
  return <PrivacyClientPage />;
}
