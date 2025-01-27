// 'use client'

// import { useParams } from 'next/navigation';
// import { Header } from '@/app/components/Header';
// import { KeyVisual } from '@/app/components/KeyVisual';
// import { SectionNav } from '@/app/components/SectionNav';
// import { WaitlistFooter } from '@/app/components/WaitlistFooter';
// import { AboutSection } from '@/app/components/AboutSection';
// import { Overview } from '@/app/components/Overview';
// import { StorySection } from '@/app/components/Story';
// import { Benefits } from '@/app/components/Benefits';
// import { Activity } from '@/app/components/Activity';
// import { FundUsage } from '@/app/components/FundUsage';
// import { DaoEasterEgg } from '@/app/components/DaoEasterEgg';
// import { DesignOverlay } from '@/app/components/DesignOverlay';
// import { Roadmap } from '@/app/components/Roadmap';
// import { JoinFlow } from '@/app/components/JoinFlow';
// import { RatioChart } from '@/app/components/RatioChart';
// import { FAQ } from '@/app/components/FAQ';
// import { Members } from '@/app/components/Members';
// import { Documents } from '@/app/components/Documents';
// import { OpenChat } from '@/app/components/OpenChat';
// import { Footer } from '@/app/components/Footer';
// export default function PublicationPage() {
//   const params = useParams<{ publication_name: string }>();

//   if (params.publication_name === 'gunma_wine2025') {
//     return (
//       <div className="min-h-screen bg-white">
//         <Header />

//         <div className="w-full overflow-x-hidden margin-bottom-l">
//           <KeyVisual />
//         </div>
        
//         <SectionNav />

//         <div className="flex flex-col overflow-x-hidden padding-x-side gap-space-3xl padding-bottom-3xl">
//           <div id="about">
//             <AboutSection />
//           </div>
//           <div id="summary">
//             <Overview />
//           </div>
//           <div id="story">
//             <StorySection />
//           </div>
//           <div id="benefits">
//             <Benefits />
//           </div>
//           <div id="activity">
//             <Activity />
//           </div>
//           <div id="roadmap">
//             <Roadmap />
//           </div>
//           {/* <div id="join-flow">
//             <JoinFlow />
//           </div>
//           <div id="usage">
//             <FundUsage />
//           </div> */}
//           <div id="members">
//             <Members />
//           </div>
//           <div id="ratio">
//             <RatioChart />
//           </div>
//           <div id="faq">
//             <FAQ />
//           </div>
//           <div id="documents">
//             <Documents />
//           </div>
//           <div id="openchat">
//             <OpenChat />
//           </div>
          
//         </div> 
//         <WaitlistFooter />
//         <DaoEasterEgg /> 
//         <DesignOverlay />
//         <Footer />

//       </div>
//     );
//   }

//   return <div>プロジェクトが見つかりません</div>;
// } 