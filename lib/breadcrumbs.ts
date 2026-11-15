export type Crumb = { label: string; href?: string };
export type Pattern = {
  test: RegExp;
  trail: (m: RegExpMatchArray) => Crumb[];
};
export type BreadcrumbConfig = {
  homeLabel?: string;               // default "Home"
  labels?: Record<string, string>;  // rename a segment everywhere
  map?: Record<string, Crumb[]>;    // full custom trail for an exact path
  patterns?: Pattern[];             // custom trail for dynamic paths
};

const prettify = (s: string) =>
  decodeURIComponent(s)
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

export function getTrail(pathname: string, config: BreadcrumbConfig = {}): Crumb[] {
  const { homeLabel = "Home", labels = {}, map = {}, patterns = [] } = config;
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;

  // 1. exact custom trail
  if (map[path]) return map[path];

  // 2. custom pattern
  for (const p of patterns) {
    const m = path.match(p.test);
    if (m) return p.trail(m);
  }

  // 3. default: build from the URL
  const segments = path.split("/").filter(Boolean);
  if (segments.length === 0) return [{ label: homeLabel }];

  return [
    { label: homeLabel, href: "/" },
    ...segments.map((seg, i) => ({
      label: labels[seg] ?? prettify(seg),
      href: i < segments.length - 1 ? "/" + segments.slice(0, i + 1).join("/") : undefined,
    })),
  ];
}