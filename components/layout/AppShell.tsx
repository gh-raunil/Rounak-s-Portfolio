import React from "react";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import Footer from "./Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors flex flex-col">
      {/* Persistent Desktop Sidebar */}
      <Sidebar />

      {/* Mobile Header & Drawer */}
      <MobileNav />

      {/* Main Content Area */}
      <div className="lg:pl-64 xl:pl-72 flex-1 flex flex-col transition-all">
        <main className="flex-1 w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 pb-16 lg:pt-14">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
