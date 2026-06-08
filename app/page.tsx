"use client";

import { HeroSection } from "@/components/HeroSection";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryGrid />
      <ContactSection />
    </>
  );
}
