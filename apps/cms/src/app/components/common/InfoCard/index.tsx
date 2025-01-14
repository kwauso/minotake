import Image from 'next/image';

type InfoCardProps = {
  image: string;
  title: string;
  description: string;
  details?: string[];
  button?: {
    label: string;
    onClick: () => void;
  };
};

export const InfoCard = ({ image, title, description, details, button }: InfoCardProps) => {
  return (
    <div className="bg-[#F1F1F5] rounded-[40px] p-5 flex flex-row gap-5 items-stretch">
      <div className="relative w-[200px] rounded-[20px] overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 px-5 py-2 flex flex-col gap-2">
        <h4 className="font-genei-gothic text-[20px] leading-[32px]">{title}</h4>
        <p className="font-genei-gothic text-[14px] leading-[24px] opacity-70">
          {description}
        </p>
        {details && (
          <ul className="font-genei-gothic text-[11px] leading-[22px] opacity-50 list-disc pl-5">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
        {button && (
          <button 
            onClick={button.onClick}
            className="flex items-center gap-1.5 bg-white rounded-[5px] px-[18px] py-3 w-fit"
          >
            <span className="text-sm font-jp">{button.label}</span>
            <span>→</span>
          </button>
        )}
      </div>
    </div>
  );
}; 