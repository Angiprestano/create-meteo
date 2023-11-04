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
    <div className=" ">
      <Container className="d-flex justify-content-center ms-2 pe-4 mt-2">
        <Row>
          <Col>
            <Card
              style={{ width: "55rem", height: "32rem" }}
              className=" mt-2 mb-3 bg-primary-subtle"
            >
              <Card.Img
                variant="fluid"
                src="https://www.cosenzapost.it/wp-content/uploads/2015/12/meteo.png"
                width={"180px"}
                height={"140px"}
                className="ms-3"
              />
              <Card.Body>
                <h3 className="fw-bold text-primary">{meteoMilan.name}</h3>
                <p>{okay && meteoMilan.weather[0].description}</p>

                <p>
                  <i class="bi bi-thermometer"></i> temp:{" "}
                  {okay && meteoMilan.main.temp}°C
                </p>
                <p>
                  <i class="bi bi-thermometer-high text-danger"></i> Temp max:{" "}
                  {okay && meteoMilan.main.temp_max}°C
                </p>
                <p>
                  <i class="bi bi-thermometer-low text-primary"></i> Temp min:{" "}
                  {okay && meteoMilan.main.temp_min}°C
                </p>
                <p className="">
                  <i class="bi bi-cloud-fog2-fill me-2 text-warning"></i>Speed:
                  {okay && meteoMilan.wind.speed} Km/h
                </p>
                <p>{okay && meteoMilan.sys.country}</p>

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
