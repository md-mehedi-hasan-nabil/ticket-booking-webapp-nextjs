import { Carousel, Col, Container, Row, Image } from "react-bootstrap";
import styles from "../styles/Banner.module.css";

const Banner = () => {
  return (
    <section className={[styles.bannerMain, "mt-3 pt-5"].join(" ")}>
      <Container>
        <Row className={["align-items-center", styles.rowHeight].join(" ")}>
          <Col md={12} className="align-self-center">
            <Carousel>
              <Carousel.Item>
                <Row className="align-items-center">
                  <Col className="text-center">
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Col>
                  <Col>
                    <Image
                      className="d-block w-50 mx-auto rounded"
                      src="https://images.unsplash.com/photo-1514250609276-c577268ef8fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dHJhaW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      alt="First slide"
                    />
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row className="align-items-center">
                  <Col className="text-center">
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Col>
                  <Col>
                    <Image
                      className="d-block w-50 mx-auto rounded"
                      src="https://images.unsplash.com/photo-1564694202883-46e7448c1b26?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      alt="Second slide"
                    />
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row className="align-items-center">
                  <Col className="text-center">
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Col>
                  <Col>
                    <Image
                      className="d-block w-50 mx-auto rounded"
                      src="https://images.unsplash.com/photo-1611610034804-3216fd316c11?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHBsYW5lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                      alt="Third slide"
                    />
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
