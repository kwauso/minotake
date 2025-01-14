type StepItemProps = {
  title: string;
  description?: string;
  note?: {
    title?: string;
    items: string[];
    footer?: string;
  };
  notes?: {
    title: string;
    items: string[];
  }[];
};

export const StepItem = ({ title, description, note, notes }: StepItemProps) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xl leading-8 font-jp">{title}</p>
      {description && (
        <p className="text-[11px] leading-[22px] opacity-50 font-jp">
          {description}
        </p>
      )}
      {note && (
        <div className="text-[11px] leading-[22px] opacity-50 font-jp">
          {note.title && (
            <p className="mb-1">{note.title}</p>
          )}
          <ul className="list-disc pl-4">
            {note.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          {note.footer && (
            <p className="mt-2">{note.footer}</p>
          )}
        </div>
      )}
      {notes && notes.map((noteItem, index) => (
        <div key={index} className="text-[11px] leading-[22px] opacity-50 font-jp mt-2">
          <p className="mb-1">{noteItem.title}</p>
          <ul className="list-disc pl-4">
            {noteItem.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}; 