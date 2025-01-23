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
import { DaoEasterEgg } from '@/app/components/DaoEasterEgg';
import { DesignOverlay } from '@/app/components/DesignOverlay';
import { Roadmap } from '@/app/components/Roadmap';
import { JoinFlow } from '@/app/components/JoinFlow';
import { RatioChart } from '@/app/components/RatioChart';
import { FAQ } from '@/app/components/FAQ';
import { Members } from '@/app/components/Members';
import { Documents } from '@/app/components/Documents';

export default function PublicationPage() {
  const params = useParams<{ publication_name: string }>();

  if (params.publication_name === 'gunma_wine2025') {
    return (
      <div className="min-h-screen bg-white">
        <Header />

        <div className="w-full overflow-x-hidden margin-bottom-l">
          <KeyVisual />
        </div>
        
        <SectionNav />

        <div className="overflow-x-hidden padding-x-side">
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
          <Section id="roadmap">
            <Roadmap />
          </Section>
          <Section id="join-flow">
            <JoinFlow />
          </Section>
          <Section id="usage">
            <FundUsage />
          </Section>
          <Section id="members">
            <Members />
          </Section>
          <Section id="ratio">
            <RatioChart />
          </Section>
          <Section id="faq">
            <FAQ />
          </Section>
          <Section id="documents">
            <Documents />
          </Section>
          
        </div>
        <ProjectFooter />
        <DaoEasterEgg /> 
        <DesignOverlay />

      </div>
    );
  }

  return <div>プロジェクトが見つかりません</div>;
} 