import { Container, Row, Col, Card } from "react-bootstrap";

const HomeMeteo = () => {
  return (
    <Container className="d-flex justify-content-center">
      <Row>
        <Col>
          <h4 className="text-center mt-5 mb-5 text-primary bg-info-subtle ">
            Your Meteo App
          </h4>
          <Card
            style={{ width: "65rem", height: "32rem" }}
            className="border border-2 border-primary"
          >
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeMeteo;
