import { Metadata } from "next";
import TermsClientPage from "./client-page";

export const metadata: Metadata = {
  title: "利用規約 | ぐんま山育DAO powerd by DAO",
  description: "株式会社ぐんま山育DAOの利用規約についてご確認いただけます。サービスの利用条件、禁止事項、免責事項などについて定めています。",
};

export default function TermsPage() {
  return <TermsClientPage />;
}
