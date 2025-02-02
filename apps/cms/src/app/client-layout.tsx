"use client";

import { ScrollHeader } from "@/app/components/ScrollHeader";
import { LazyMotion, domAnimation, AnimatePresence } from "framer-motion";

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence mode="sync">
        <ScrollHeader key="scroll-header" />
        <div key="main-content">{children}</div>
      </AnimatePresence>
    </LazyMotion>
  );
};