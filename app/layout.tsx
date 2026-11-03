import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import Navbar from "@/components/navbar";

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