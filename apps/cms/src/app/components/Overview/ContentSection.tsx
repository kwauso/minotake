type ContentSectionProps = {
  label: string;
  title: string;
  description: string;
};

export const ContentSection = ({ label, title, description }: ContentSectionProps) => {
  return (
    <div className="w-full items-start gap-5 md:gap-10 flex flex-col md:flex-row">
      <div className="flex w-full flex-row tb:flex-col gap-space-l md:w-[580px] items-start gap-5 md:gap-10 py-[3px]">
        <div className="w-[100px] flex items-center py-1">
          <div className="opacity-50 font-jp subhead4">
            {label}
          </div>
        </div>
        <h2 className="font-jp h2-ja" dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br />') }} />
      </div>
      <p className="flex-1 body1 leading-[32px]">
        {description}
      </p>
    </div>
  );
}; 