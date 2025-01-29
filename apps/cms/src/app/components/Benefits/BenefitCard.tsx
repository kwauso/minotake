import Image from "next/image";

interface BenefitCardProps {
  type: string;
  title: string;
  description: string;
  note?: string;
  image: string;
}

export const BenefitCard = ({
  type,
  title,
  description,
  note,
  image,
}: BenefitCardProps) => {
  return (
    <div className="flex flex-row sp:flex-col margin-y-s gap-space-l items-center justify-center max-w-[760px]">
      <div className="relative w-[360px] tb:w-[280px] sp:w-full h-[540px] tb:max-h-full sp:h-[100vw] rounded-[30px] overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="flex w-full flex-col gap-10 flex-1 py-5">
        <span className="subhead4 leading-4 opacity-50 font-genei-gothic">
          {type}
        </span>
        <div className="flex flex-col gap-space-s">
          <h3 className="">{title}</h3>
          <p className="body3 whitespace-pre-line">{description}</p>
        </div>
        {note && (
          <p className="text-[10px] leading-[18px] opacity-50 font-genei-gothic">
            {note}
          </p>
        )}
      </div>
    </div>
  );
};
