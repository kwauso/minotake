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

export const StepItem = ({
  title,
  description,
  note,
  notes,
}: StepItemProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h5 className="font-auto">{title}</h5>
      {description && (
        <p className="font-auto opacity-50 body5">{description}</p>
      )}
      {note && (
        <div className="text-[11px] leading-[22px] opacity-50 ">
          {note.title && <p className="mb-1">{note.title}</p>}
          <ul className="list-disc pl-4">
            {note.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          {note.footer && <p className="mt-2">{note.footer}</p>}
        </div>
      )}
      {notes &&
        notes.map((noteItem, index) => (
          <div
            key={index}
            className="text-[11px] leading-[22px] opacity-50  mt-2"
          >
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
