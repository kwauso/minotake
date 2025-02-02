interface FundUsageCardProps {
  category: string;
  title: string;
  description: string;
  amount: number;
}

export const FundUsageCard = ({
  category,
  title,
  description,
  amount,
}: FundUsageCardProps) => {
  return (
    <div className="bg-white rounded-[20px] padding-x-l padding-y-s shadow-[0px_10px_20px_0px_rgba(0,0,0,0.08)] w-full">
      <div className="flex flex-row sp:flex-col gap-10 sp:gap-space-l items-center sp:items-start">
        <span className="w-20 subhead4 opacity-50 font-genei-gothic">
          {category}
        </span>
        <div className="flex flex-col gap-space-4xs flex-1">
          <div className="flex justify-between items-cente padding-y-2xs">
            <h6 className="font-auto">{title}</h6>
          </div>
          <p className="body5 opacity-50 whitespace-pre-line">{description}</p>
        </div>
        <div className="flex items-center sp:w-full sp:justify-end">
          <div className="flex items-baseline">
            <h4 className="font-auto  text-right">{amount.toLocaleString()}</h4>
            <h5 className="font-auto ml-1">万円</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
