import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const lat = 45.46;
const long = 9.18;
const apiKey = "bab430f8782bfe5c0e5ba94872cf0d82";

const PrevisionCity = (props) => {
  const [meteoMilan, setMeteoMilan] = useState({});
  const [meteo, setMeteo] = useState(false);
  const lat = props.lat;
  const long = props.long;
  const [okay, setOkay] = useState(false);

  const getMeteo = async () => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metri&lang=it&appid=${apiKey}`
      );

      if (response.ok) {
        const MeteoDate = await response.json();
        console.log(MeteoDate);
        setMeteoMilan(MeteoDate);
        setOkay(true);
      } else {
        throw new Error("error");
      }
    } catch (error) {
      console.error(error);
      throw new Error("error");
    }
  };

  useEffect(() => {
    getMeteo();
  }, [props]);

  return (
    <div className="bg-warning-subtle">
      <Container className="d-flex justify-content-center">
        <Row>
          <Col>
            <h4 className="text-center mt-5 mb-5 text-primary bg-info-subtle ">
              Your Meteo App
            </h4>
            <Card
              style={{ width: "65rem", height: "37rem" }}
              className="border border-2 border-primary"
            >
              <Card.Img
                variant="fluid"
                src="https://www.cosenzapost.it/wp-content/uploads/2015/12/meteo.png"
                width={"180px"}
                height={"140px"}
                className="ms-3"
              />
              <Card.Body>
                <h3>{meteoMilan.name}</h3>
                {okay && (
                  <img
                    src={`http://openweathermap.org/img/w/${meteoMilan.weather[0].icon}.png`}
                    alt="city"
                  ></img>
                )}

                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PrevisionCity;
