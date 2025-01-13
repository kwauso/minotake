import Image from 'next/image';

interface InfoCardProps {
  title: string;
  description: string;
  details?: string[];
  image: string;
}

export const InfoCard = ({ title, description, details, image }: InfoCardProps) => {
  return (
    <div className="bg-[#F1F1F5] rounded-[40px] p-5 flex flex-row gap-5 items-stretch">
      <div className="relative w-[200px] rounded-[20px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 flex-1 px-5 py-2">
        <h4 className="font-genei-gothic text-[20px] leading-[32px]">{title}</h4>
        <p className="font-genei-gothic text-[14px] leading-[24px] opacity-70">{description}</p>
        {details && (
          <ul className="font-genei-gothic text-[11px] leading-[22px] opacity-50 list-disc pl-5">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}; 