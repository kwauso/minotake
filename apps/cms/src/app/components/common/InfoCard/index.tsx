import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
  label: string;
} & ({ href: string; onClick?: never } | { href?: never; onClick: () => void });

interface InfoCardProps {
  title: string;
  description: string;
  details?: string[];
  image: string;
  variant?: "light" | "dark";
  button?: ButtonProps;
}

export const InfoCard = ({
  title,
  description,
  details,
  image,
  variant = "light",
  button,
}: InfoCardProps) => {
  const baseStyles =
    variant === "light" ? "bg-[#F1F1F5]" : "bg-black text-white";

  const renderButton = () => {
    if (!button) return null;

    const buttonClasses =
      "mt-2 inline-flex items-center gap-1.5 bg-white text-black px-[18px] py-3 rounded-[5px] w-fit hover:opacity-70 transition-opacity";

    if ("href" in button && button.href) {
      return (
        <Link href={button.href} className={buttonClasses}>
          <span className="text-[14px] leading-[19px]">{button.label}</span>
          <Image
            src="/images/publications/right_arrow_black.svg"
            alt=""
            width={16}
            height={16}
          />
        </Link>
      );
    }

    if ("onClick" in button && button.onClick) {
      return (
        <button onClick={button.onClick} className={buttonClasses}>
          <span className="text-[14px] leading-[19px]">{button.label}</span>
          <Image
            src="/images/publications/right_arrow_black.svg"
            alt=""
            width={16}
            height={16}
          />
        </button>
      );
    }

    return null;
  };

  return (
    <div
      className={`${baseStyles} rounded-[30px] p-5 flex flex-row gap-5 items-stretch`}
    >
      <div className="relative w-[200px] min-h-[120px] sp:w-[110px] sp:max-h-[140px] rounded-[15px] overflow-hidden flex-shrink-0">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-2 flex-1 px-5 py-2">
        <h4 className="text-[20px] leading-[28px]">{title}</h4>
        <p className="text-[14px] leading-[24px] opacity-60">{description}</p>
        {details && (
          <ul className="text-[11px] leading-[22px] opacity-50 list-disc pl-5">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
        {renderButton()}
      </div>
    </div>
  );
};
