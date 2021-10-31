import Link from "next/link";
import { Card, Col, Container, Row } from "react-bootstrap";

export default function Services() {
  const servicesList = [
    {
      title: "Bus Ticket Booking",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Train Ticket Booking",
      image:
        "https://images.unsplash.com/photo-1541427468627-a89a96e5ca1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
    {
      title: "Plane Ticket Booking",
      image:
        "https://images.unsplash.com/photo-1529074963764-98f45c47344b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBsYW5lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    },
  ];
  return (
    <div className="my-5 py-5">
      <Container>
        <h1 className="text-center text-light">Our <span className="text-warning">Services</span></h1>
        <Row>
          {servicesList.map((service, index) => (
            <Col xd={4} key={index}>
              <Card className="my-3 position-relative">
                <Card.Img variant="top" src={service.image} />
                <div className="cardBodyAnimation card-body text-center">
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card content.
                  </Card.Text>
                  <Link href="/booking">
                    <button className="w-100 btn btn-warning">Book Now</button>
                  </Link>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
