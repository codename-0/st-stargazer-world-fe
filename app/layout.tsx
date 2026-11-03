import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import Navbar from "@/components/navbar";
import { FilmStrip } from "@/components/film-strips"; // Adjust path as needed

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CODENAME-0 | Portfolio",
  description: "the zeroth life book",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const portfolioImages = [
    "https://nullvoid.st-stargazer.com/images/HSS03teaMAAHNnc.png",
    "https://nullvoid.st-stargazer.com/images/HUV9601bkAAwzea.png",
    "https://nullvoid.st-stargazer.com/images/HU_LHsWakAEtwB4.png",
    "https://nullvoid.st-stargazer.com/images/HVWhKgJbgAAcTaG.png",
    "https://nullvoid.st-stargazer.com/images/HVjMp25bQAA86Hi.png",
  ];

  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var m = window.matchMedia("(prefers-color-scheme: dark)");
                function set() {
                  document.documentElement.setAttribute("data-bs-theme", m.matches ? "dark" : "light");
                }
                set();
                m.addEventListener("change", set);
              })();
            `,
          }}
        />
      </head>
      <body className="overflow-x-hidden m-0">  
        <div 
          style={{
            position: "fixed",
            width: "140vw",
            overflow: "hidden",
            opacity: 0.35,
            zIndex: 0,
            pointerEvents: "none",
            transform: "rotate(6deg) translateY(160%)",
          }}
        >
          <FilmStrip images={portfolioImages} speedInSeconds={60} />
        </div>

        <div className="position-relative" style={{ zIndex: 1 }}>
          <Navbar
            brandName="ST-STARGAZER WORLD"
            menuTitle="MENU"
            links={[
              { href: "/", label: "Home" },
              { href: "/projects", label: "Projects" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ]}
          />
          {children}
        </div>

      </body>
    </html>
  );
}