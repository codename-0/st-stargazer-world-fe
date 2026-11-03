import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import Profile from "@/components/profile";
import { FilmStrip } from "@/components/film-strips";

export const metadata: Metadata = {
  title: "CODENAME-0 | Portfolio",
  description: "the zeroth life book",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const portfolioImages = [
    "https://nullvoid.st-stargazer.com/images/HSS03teaMAAHNnc.png",
    "https://nullvoid.st-stargazer.com/images/HUV9601bkAAwzea.png",
    "https://nullvoid.st-stargazer.com/images/HU_LHsWakAEtwB4.png",
    "https://nullvoid.st-stargazer.com/images/HVWhKgJbgAAcTaG.png",
    "https://nullvoid.st-stargazer.com/images/HVjMp25bQAA86Hi.png",
  ];

  return <main>
    <div style={{ position: "relative", width: "100%", height: 0, overflow: "hidden", zIndex: 0 }}>
      <div 
        style={{
          position: "fixed",
          width: "140vw",
          opacity: 0.35,
          pointerEvents: "none",
          transform: "rotate(6deg) translateY(135%)",
        }}
      >
        <FilmStrip images={portfolioImages} speedInSeconds={60} />
      </div>
    </div>
    <Profile
      name="CODENAME-0"
      role="Tech enthusiast"
      bio="I'm an engineer well versed in software development, clean architecture, distributed systems, and CI/CD pipelines. I spend my free time exploring low-level kernel drivers and hardware-software co-simulation. Currently seeking opportunities to bridge systems engineering with AI model research and high-performance computing."
      photo="https://nullvoid.st-stargazer.com/images/HU_LHsWakAEtwB4.png"
      links={[
        { label: "GitHub", href: "https://github.com/you" },
        { label: "Email", href: "mailto:you@example.com" },
      ]}
    />
    {children}
  </main>;
}
