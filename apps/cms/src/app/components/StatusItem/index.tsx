type Props = {
  label: string;
  value?: string;
  subValue?: string;
  customValue?: React.ReactNode;
  isJP?: boolean;
};

export const StatusItem = ({ 
  label, 
  value, 
  subValue,
  customValue,
  isJP
}: Props) => (
  <div className="flex flex-col items-start">
    <p className="text-[11px] leading-[15px] text-white/50 font-jp">
      {label}
    </p>
    {customValue || (
      <div className="flex items-center gap-2">
        <span className={`text-base leading-5 ${isJP ? 'font-jp' : 'font-en font-light'} text-white`}>
          {value}
        </span>
        {subValue && (
          <>
            <span className="text-xs text-white/70">/</span>
            <span className="text-xs text-white/70 font-en">
              {subValue}
            </span>
          </>
        )}
      </div>
    )}
  </div>
); 