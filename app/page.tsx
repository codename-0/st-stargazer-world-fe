import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import Profile from "@/components/profile";
import { FilmStrip, type FilmStripProps } from "@/components/film-strips";

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

  const strips: (FilmStripProps & { angle: number })[] = [
    { images: portfolioImages, speedInSeconds: 60, angle: 6, direction: "forward" },
  ];

  return (
    <main
      style={{
        position: "relative",
        isolation: "isolate",
        minHeight: "inherit",
        // no overflow: hidden here, it would break sticky
      }}
    >
      {/* fills main, never adds to its height, clips the layer at main's bottom edge */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "calc(var(--nav-h, 72px) * -1)", // reach up behind the navbar
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          overflow: "clip",
          pointerEvents: "none",
        }}
      >
        {/* pinned to the screen until main ends, then leaves with it */}
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100dvh",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: "6rem",
            paddingTop: "45vh",
          }}
        >
          {strips.map((s, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: "140vw",
                marginLeft: "-20vw",
                opacity: 0.35,
                transform: `rotate(${s.angle}deg) translateY(25%)`,
              }}
            >
              <FilmStrip
                images={s.images}
                speedInSeconds={s.speedInSeconds}
                direction={s.direction}
              />
            </div>
          ))}
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
    </main>
  );
}