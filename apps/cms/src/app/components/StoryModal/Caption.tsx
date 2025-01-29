type CaptionProps = {
  children: React.ReactNode;
};

export const Caption = ({ children }: CaptionProps) => {
  return (
    <div className="w-full bg-[#F1F1F5] rounded-[20px] p-[14px]">
      <p className="text-black/50 text-[10px] leading-[18px]">{children}</p>
    </div>
  );
};
