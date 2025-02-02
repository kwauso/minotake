import Image from "next/image";

type StoryNavigationProps = {
  type: "PREV" | "NEXT";
  title: string;
  onClick: () => void;
};

export const StoryNavigation = ({
  type,
  title,
  onClick,
}: StoryNavigationProps) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-4 px-[18px] py-[14px] rounded-[20px] bg-white shadow-lg hover:opacity-70 transition-opacity"
    >
      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <p className="text-black/50 font-helvetica-neue-light text-[14px] leading-[17px] font-light text-left">
          {type}
        </p>
        <p className="text-black text-[14px] leading-[18px] truncate text-left">
          {title.replace(/<br\s*\/?>/g, "")}
        </p>
      </div>
      <Image
        src={`/images/publications/${type === "PREV" ? "left" : "right"}_arrow_black.svg`}
        alt={type === "PREV" ? "前へ" : "次へ"}
        width={16}
        height={16}
        className="opacity-70"
      />
    </button>
  );
};
