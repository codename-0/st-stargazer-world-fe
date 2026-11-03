import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import ProfileImage from "./image";

type ProfileProps = {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  links?: { label: string; href: string }[];
};

export default function Profile({ name, role, bio, photo, links = [] }: ProfileProps) {
  return (
    <Container as="section" className="py-5 px-4 px-md-0">
      <Row className="align-items-center g-4">
        <Col lg={{ span: 2, order: 0}} xl={{ span: true, order: 0}}/>
        <Col
          xs={{ span: 12, order: 2 }}
          md={{ span: true, order: 1 }}
          className="text-md-end p-4 shadow-sm soft-glass-card"
        >
          <h2 className="fw-bold mb-1">{name}</h2>
          <p className="text-body-secondary mb-3">{role}</p>
          <p className="ms-md-auto" style={{ maxWidth: "60ch" , textAlign: "justify"}}>{bio}</p>
          <Stack direction="horizontal" gap={2} className="flex-wrap justify-content-md-end">
            {links.map((l) => (
              <Button key={l.href} href={l.href} variant="outline-secondary" size="sm">
                {l.label}
              </Button>
            ))}
          </Stack>
        </Col>

        <Col
          xs={{ span: 12, order: 1 }}
          md={{ span: "auto", order: 2 }}
          className="text-center ps-md-4"
        >
          <ProfileImage src={photo} alt={name} />
        </Col>
      </Row>
    </Container>
  );
}