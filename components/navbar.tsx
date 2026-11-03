"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container, Nav, Navbar as BsNavbar, Offcanvas } from "react-bootstrap";

type NavbarProps = {
  brandName?: string;
  menuTitle?: string;
  links?: { href: string; label: string }[];
};

export default function Navbar({
  brandName = "Your Name",
  menuTitle = "Menu",
  links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ],
}: NavbarProps) {
  const pathname = usePathname();

  return (
    <BsNavbar expand="sm" sticky="top" className="themed-nav py-3">
      <Container>
        <div className="d-flex align-items-center justify-content-between w-100">
          <BsNavbar.Brand as={Link} href="/" className="fw-bold text-truncate flex-grow-1 me-2" style={{ minWidth: 0 }}>
            {brandName}
          </BsNavbar.Brand>
          <BsNavbar.Toggle aria-controls="main-nav" />
        </div>

        <BsNavbar.Offcanvas
          id="main-nav"
          aria-labelledby="main-nav-label"
          placement="end"
          className="themed-offcanvas"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="main-nav-label" className="fw-bold">
              {menuTitle}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto gap-2">
              {links.map((l) => (
                <Nav.Link
                  key={l.href}
                  as={Link}
                  href={l.href}
                  active={pathname === l.href}
                >
                  {l.label}
                </Nav.Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </BsNavbar.Offcanvas>
      </Container>
    </BsNavbar>
  );
}
