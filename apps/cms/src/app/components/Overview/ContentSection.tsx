import { FC } from 'react';

interface ContentSectionProps {
  label: string;
  title: string;
  description: string;
}

export const ContentSection: FC<ContentSectionProps> = ({ label, title, description }) => {
  return (
    <div className="w-full items-start margin-y-l gap-space-l md:gap-10 flex flex-row tb:flex-col">
      <div className="flex flex-row tb:flex-col gap-space-l w-[580px] sp:w-full items-start gap-space-l">
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