import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Navigation() {
  return (
    <>
      <video
        src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/r6uQGb9/videoblocks-asian-people-tourists-and-japanese-commuters-waiting-for-a-local-train-arriving-at-shinjuku-jr-station-in-tokyo-japan-asia-railway-transport-transportation-travel_srzoovboaf__c96bf810abdd2729d03cc8057faa489b__P360.mp4"
        autoPlay
        loop
        playsinline
        muted
      ></video>
      <header>
        <Navbar bg="light" expand="lg" className="fixed-top shadow py-3">
          <Container>
            <Link href="/">
              <a className="navbar-brand">React-Bootstrap</a>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
              <Link href="/">
                  <a className="nav-link fs-5">Home</a>
                </Link>
                <Link href="/booking">
                  <a className="nav-link fs-5">Booking</a>
                </Link>
                <Link href="/login">
                  <a className="nav-link fs-5">Login</a>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}
