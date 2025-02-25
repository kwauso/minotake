import Image from "next/image";

type Document = {
  title: string;
  description: string;
  link?: string;
};

export const documents: Document[] = [
  {
    title: "利用規約(投資契約書)",
    description:
      "株式会社ぐんま山育DAOの出資する際の取り決めを記載しております。",
    link: "./terms",
  },
  {
    title: "ぐんま山育DAO_規定",
    description: "DAOXを利用する際の規約が記載されています。",
    link: "./",
  },
  {
    title: "ぐんま山育DAO_定款",
    description: "ぐんま山育DAOの定款が記載されています。",
    link: "./",
  },
  {
    title: "シェアガイドライン",
    description: "DAOXを利用する際の規約が記載されています。",
    link: "#",
  },
];

export const Documents = () => {
  return (
    <section className="margin-y-3xl">
      <div className="flex flex-wrap gap-space-s max-w-[1080px] tb:max-w-[610px] mx-auto">
        {documents.map((doc, index) => (
          <a
            key={index}
            href={doc.link}
            className="
              w-[346.66px] tb:w-full sp:w-full
              bg-white rounded-[20px]
              padding-x-l padding-y-s
              shadow-[0px_10px_20px_0px_rgba(0,0,0,0.08)]
              hover:opacity-70 transition-opacity
            "
          >
            <div className="flex items-center gap-space-l">
              <div className="flex-1 padding-top-2xs">
                <div className="flex flex-col gap-space-4xs">
                  <h6 className="font-auto">{doc.title}</h6>
                  <p className="font-auto body5 opacity-50">
                    {doc.description}
                  </p>
                </div>
              </div>
              <div className="w-[17px] h-[17px] text-[#3333FF]">
                <Image
                  src="/images/common/attachment.svg"
                  alt="attachmennt"
                  width={17}
                  height={17}
                  priority={true}
                />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
