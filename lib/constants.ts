import type { BreadcrumbConfig } from "./breadcrumbs";

export const PLACEHOLDER_PROFILE = "/images/placeholder-pfp.png";



export const breadcrumbConfig: BreadcrumbConfig = {
  homeLabel: "Home",

  // // rename a segment everywhere
  // labels: { products: "Projects" },

  // // exact path -> exact trail
  // map: {
  //   "/company/about": [{ label: "Home", href: "/" }, { label: "About" }],
  // },

  // // dynamic paths
  // patterns: [
  //   {
  //     test: /^\/products\/([^/]+)$/,
  //     trail: (m) => [
  //       { label: "Home", href: "/" },
  //       { label: "Projects", href: "/products" },
  //       { label: decodeURIComponent(m[1]).replace(/-/g, " ") },
  //     ],
  //   },
  // ],
};



export type FooterLink = { label: string; href: string };
export type FooterSection = {
  title: string;
  href?: string;
  links: FooterLink[];
};

// Columns on the left
export const footerMenu: FooterSection[] = [
  {
    title: "Projects",
    href: "/products",
    links: [
      { label: "Web Apps", href: "/products/web" },
      { label: "Mobile Apps", href: "/products/mobile" },
      { label: "Open Source", href: "/products/open-source" },
    ],
  },
  {
    title: "Company",
    href: "/company",
    links: [
      { label: "About", href: "/company/about" },
      { label: "Careers", href: "/company/careers" },
    ],
  },
];

// Right-aligned inline block
export const footerConnect = {
  title: "Connect",
  links: [
    { label: "GitHub", href: "https://github.com/your-name" },
    { label: "Email", href: "mailto:you@example.com" },
    { label: "WhatsApp", href: "https://wa.me/628123456789" },
  ] as FooterLink[],
};