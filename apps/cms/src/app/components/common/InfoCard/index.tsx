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
    <div className="bg-[#F1F1F5] rounded-[40px] padding-s flex flex-row gap-space-s items-stretch">
      <div className="relative w-[200px] sp:w-[110px] sp:h-[140px] rounded-[20px] overflow-hidden">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div className="flex-1 padding-y-2xs padding-x-2xs py-2 flex flex-col gap-2">
        <h4 className="font-auto">{title}</h4>
        <p className="font-auto body3 opacity-70">
          {description}
        </p>
        {details && (
          <ul>
            {details.map((detail, index) => (
              <li key={index} className="list-none">
                <div className="font-jp body5 text-black/50" dangerouslySetInnerHTML={{ __html: detail }} />
              </li>
            ))}
          </ul>
        )}
        {button && (
          <button 
            onClick={button.onClick}
            className="flex items-center gap-1.5 bg-white rounded-[5px] px-[18px] py-3 w-fit"
          >
            <span className="font-jp ">{button.label}</span>
            <span>→</span>
          </button>
        )}
      </div>
    </div>
  );
}; 