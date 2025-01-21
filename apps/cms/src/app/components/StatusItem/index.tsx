type Props = {
  label: string;
  value?: string;
  subValue?: string;
  customValue?: React.ReactNode;
  isJP?: boolean;
  valueClassName?: string;
  subValueClassName?: string;
};

export const StatusItem = ({ 
  label, 
  value, 
  subValue,
  customValue,
  isJP,
  valueClassName,
  subValueClassName
}: Props) => (
  <div className="flex flex-col gap-space-4xs items-start">
    <p className="subhead5 text-white/50 font-jp">
      {label}
    </p>
    {customValue || (
      <div className="flex items-center gap-2">
        <span className={`subhead2 text-base leading-5 ${isJP ? 'font-jp' : 'font-en font-light'} text-white ${valueClassName || ''}`}>
          {value}
        </span>
        {subValue && (
          <>
            <span className="subhead5 text-white/70">/</span>
            <span className="text-xs font-weight-400 text-white/70 font-en">
              {subValue}
            </span>
          </>
        )}
      </div>
    )}
  </div>
); 