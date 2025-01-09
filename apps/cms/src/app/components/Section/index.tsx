'use client';

type SectionProps = {
  id: string;
  children: React.ReactNode;
};

export const Section = ({ id, children }: SectionProps) => {
  return (
    <section id={id} className="min-h-screen py-16">
      {children}
    </section>
  );
}; 