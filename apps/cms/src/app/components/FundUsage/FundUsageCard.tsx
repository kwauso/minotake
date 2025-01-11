interface FundUsageCardProps {
  category: string;
  title: string;
  description: string;
  amount: number;
}

export const FundUsageCard = ({ category, title, description, amount }: FundUsageCardProps) => {
  return (
    <div className="bg-white rounded-[20px] p-5 md:p-10 shadow-[0px_10px_20px_0px_rgba(0,0,0,0.08)] w-full">
      <div className="flex flex-row gap-10 items-center">
        <span className="w-20 text-xs leading-4 opacity-50 font-genei-gothic">
          {category}
        </span>
        <div className="flex flex-col gap-1 flex-1">
          <div className="flex justify-between items-center">
            <h4 className="font-genei-gothic text-sm leading-[18px]">{title}</h4>
            <div className="flex items-baseline">
              <span className="font-en font-light text-[26px] leading-[32px] text-right">
                {amount.toLocaleString()}
              </span>
              <span className="font-genei-gothic text-[20px] leading-[32px] font-[350] ml-1">
                万円
              </span>
            </div>
          </div>
          <p className="font-genei-gothic text-[11px] leading-[22px] opacity-50 whitespace-pre-line">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}; 