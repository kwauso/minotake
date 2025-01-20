'use client';

import { FC } from 'react';

type SectionProps = {
  id: string;
  children: React.ReactNode;
};

export const Section: FC<SectionProps> = ({ id, children }) => {
  return (
    <section id={id} className="min-h-screen py-16">
      {children}
    </section>
  );
}; 