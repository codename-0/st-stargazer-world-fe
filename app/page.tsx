import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import Profile from "@/components/profile";

export const metadata: Metadata = {
  title: "CODENAME-0 | Portfolio",
  description: "the zeroth life book",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <main>
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
