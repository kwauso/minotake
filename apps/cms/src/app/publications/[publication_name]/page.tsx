'use client';

import { useParams } from 'next/navigation';
import { Header } from '@/app/components/Header';
import { KeyVisual } from '@/app/components/KeyVisual';
import { SectionNav } from '@/app/components/SectionNav';
import { Section } from '@/app/components/Section';
import { ProjectFooter } from '@/app/components/ProjectFooter';
import { AboutSection } from '@/app/components/AboutSection';
import { Overview } from '@/app/components/Overview';
import { Story } from '@/app/components/Story';
import { Benefits } from '@/app/components/Benefits';
import { Activity } from '@/app/components/Activity';
import { FundUsage } from '@/app/components/FundUsage';

export default function PublicationPage() {
  const params = useParams<{ publication_name: string }>();

  if (params.publication_name === 'gunma_wine2025') {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <KeyVisual />
        <SectionNav />
        <div>
          <Section id="about">
            <AboutSection />
          </Section>
          <Section id="summary">
            <Overview />
          </Section>
          <Section id="story">
            <Story />
          </Section>
          <Section id="benefits">
            <Benefits />
          </Section>
          <Section id="activity">
            <Activity />
          </Section>
          <Section id="usage">
            <FundUsage />
          </Section>
        </div>
        <ProjectFooter />
      </div>
    );
  }

  return <div>プロジェクトが見つかりません</div>;
} 