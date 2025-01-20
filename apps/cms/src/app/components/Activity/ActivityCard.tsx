import Image from 'next/image';

interface ActivityCardProps {
  number: string;
  title: string;
  description: string;
  note?: string;
  image: string;
}

export const ActivityCard = ({ number, title, description, note, image }: ActivityCardProps) => {
  return (
    <div className="flex flex-row sp:flex-col gap-10 items-start justify-start max-w-[920px]">
      <div className="flex flex-col gap-4 py-2 flex-1 sp:order-2">
        <span className="font-en font-light text-lg leading-6">{number}</span>
        <h3 className="font-genei-gothic text-xl leading-8 whitespace-pre-line">{title}</h3>
        <p className="font-genei-gothic text-[13px] leading-[26px] whitespace-pre-line">{description}</p>
        {note && (
          <p className="font-genei-gothic text-[10px] leading-[18px] opacity-50">{note}</p>
        )}
      </div>
      <div className="relative w-[452px] h-[248px] sp:w-full sp:h-[248px] tb:w-[40vw] rounded-[20px] sp:order-1 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}; 