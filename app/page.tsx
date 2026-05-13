"use client";

import { OSProvider, OSSwitcher } from "@/components/OSContext";
import { ChecklistProvider } from "@/components/ChecklistContext";
import { ProgressBar } from "@/components/ProgressBar";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { DarkModeToggle } from "@/components/DarkModeToggle";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { AllSections, sectionsMeta } from "@/content/sections";

export default function Home() {
  return (
    <OSProvider>
      <ChecklistProvider>
        {/* Top bar */}
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-14">
              <div className="flex items-center gap-3">
                <MobileNav sections={sectionsMeta} />
                <a href="#" className="font-bold text-lg tracking-tight">
                  <span className="text-accent">Mastra</span> Code Tutorial
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="hidden sm:block">
                  <OSSwitcher />
                </div>
                <DarkModeToggle />
              </div>
            </div>
          </div>
          <ProgressBar />
        </header>

        <div className="max-w-7xl mx-auto flex">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0 sticky top-[3.75rem] h-[calc(100vh-3.75rem)] overflow-y-auto py-6 px-4 border-r border-border">
            <Sidebar sections={sectionsMeta} />
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0 px-6 sm:px-8 lg:px-12 py-8">
            <Hero />

            <div className="max-w-3xl">
              <AllSections />
            </div>

            <Footer />
          </main>
        </div>
      </ChecklistProvider>
    </OSProvider>
  );
}
