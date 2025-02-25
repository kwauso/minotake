import { StepItem } from "./StepItem";

type FlowCardProps = {
  type: "個人" | "法人";
  steps: {
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
  }[];
};

export const FlowCard = ({ type, steps }: FlowCardProps) => {
  return (
    <div className="flex flex-col gap-space-l w-full">
      <h2 className="font-auto ">{type}</h2>
      <div className="bg-white rounded-[20px] p-10 shadow-[0px_10px_20px_0px_rgba(0,0,0,0.08)]">
        <div className="flex flex-col gap-8">
          {steps.map((step, index) => (
            <StepItem key={index} {...step} />
          ))}
        </div>
      </div>
    </div>
  );
};
