import PrevisionCity from "./PrevisionCity";
import { Col, Row } from "react-bootstrap";

const HomeMeteo = () => {
  return (
    <div>
      <Row>
        <Col>
          <PrevisionCity lat={45.46} long={9.18} />
          <PrevisionCity lat={45.649526} long={13.776818} />
        </Col>
        <Col>
          <PrevisionCity lat={52.520007} long={13.404954} />
          <PrevisionCity lat={45.0735} long={7.6757} />
        </Col>
        <Col>
          <PrevisionCity lat={45.406435} long={11.876761} />
          <PrevisionCity lat={40.8517746} long={14.2681244} />
        </Col>
        <Col>
          <PrevisionCity lat={41.4621984} long={15.5446302} />
          <PrevisionCity lat={45.4383842} long={10.9916215} />
        </Col>
      </Row>
    </div>
  );
};

export default HomeMeteo;
