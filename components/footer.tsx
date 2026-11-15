"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, Row, Col } from "react-bootstrap";
import { getTrail, type BreadcrumbConfig } from "@/lib/breadcrumbs";
import {
  breadcrumbConfig,
  footerMenu,
  footerConnect,
  type FooterSection,
  type FooterLink,
} from "@/lib/constants";

type FooterProps = Pick<BreadcrumbConfig, "homeLabel" | "labels" | "map"> & {
  menu?: FooterSection[];
  connect?: { title: string; links: FooterLink[] };
};

const isHttp = (href: string) => /^https?:\/\//.test(href);
const isExternal = (href: string) => isHttp(href) || href.startsWith("mailto:");

function SmartLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  if (isExternal(href)) {
    return (
      <a
        href={href}
        className={className}
        {...(isHttp(href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function Footer({
  homeLabel,
  labels,
  map,
  menu = footerMenu,
  connect = footerConnect,
}: FooterProps) {
  const pathname = usePathname();

  const crumbs = getTrail(pathname, {
    ...breadcrumbConfig,
    homeLabel: homeLabel ?? breadcrumbConfig.homeLabel,
    labels: { ...breadcrumbConfig.labels, ...labels },
    map: { ...breadcrumbConfig.map, ...map },
  });

  return (
    <footer className="themed-footer border-top mt-auto">
      {/* 1. Breadcrumbs on top */}
      <div className="border-bottom py-3 px-4">
        <Container>
          <nav aria-label="breadcrumb">
            <ol
              className="breadcrumb mb-0 small"
              style={{ ["--bs-breadcrumb-divider" as string]: "'>'" }}
            >
              {crumbs.map((c, i) => {
                const isLast = i === crumbs.length - 1;
                return (
                  <li
                    key={i}
                    className={`breadcrumb-item${isLast ? " active" : ""}`}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {!isLast && c.href ? <Link href={c.href}>{c.label}</Link> : c.label}
                  </li>
                );
              })}
            </ol>
          </nav>
        </Container>
      </div>

      {/* 2. Menu columns + Connect on the right */}
      <Container className="py-5 px-4">
        <Row className="g-4">
          <Col xs={12} lg>
            <Row className="row-cols-2 row-cols-md-3 g-4">
              {menu.map((section) => (
                <Col key={section.title}>
                  <h6 className="fw-bold mb-3">
                    {section.href ? (
                      <SmartLink href={section.href} className="text-reset footer-link">
                        {section.title}
                      </SmartLink>
                    ) : (
                      section.title
                    )}
                  </h6>
                  <ul className="list-unstyled mb-0 small d-grid gap-2">
                    {section.links.map((l) => (
                      <li key={l.href}>
                        <SmartLink
                          href={l.href}
                          className="text-reset footer-link opacity-75"
                        >
                          {l.label}
                        </SmartLink>
                      </li>
                    ))}
                  </ul>
                </Col>
              ))}
            </Row>
          </Col>

          {connect.links.length > 0 && (
            <Col xs={12} lg="auto" className="text-lg-end">
              <h6 className="fw-bold mb-3">{connect.title}</h6>
              <div className="small d-flex flex-wrap gap-2 justify-content-lg-end">
                {connect.links.map((l, i) => (
                  <span key={l.href} className="d-inline-flex gap-2">
                    {i > 0 && <span className="opacity-50">|</span>}
                    <SmartLink href={l.href} className="text-reset footer-link opacity-75">
                      {l.label}
                    </SmartLink>
                  </span>
                ))}
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </footer>
  );
}