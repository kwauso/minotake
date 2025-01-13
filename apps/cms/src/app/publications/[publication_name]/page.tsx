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
import { motion } from 'framer-motion';
import { Benefits } from '@/app/components/Benefits';

export default function PublicationPage() {
  const params = useParams<{ publication_name: string }>();

  if (params.publication_name === 'gunma_wine2025') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white overflow-x-hidden"
      >
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
        </div>
        <ProjectFooter />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen bg-white"
    >
      プロジェクトが見つかりません
    </motion.div>
  );
} 