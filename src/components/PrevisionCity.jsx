import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const apiKey = "bab430f8782bfe5c0e5ba94872cf0d82";

const PrevisionCity = (props) => {
  const [meteoMilan, setMeteoMilan] = useState({});
  const [meteoAp, setMeteoAp] = useState(false);
  const lat = props.lat;
  const long = props.long;
  const [okay, setOkay] = useState(false);
  const currentDate = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  console.log(currentDate.toLocaleString("it-IT", options));

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
    <div className="d-flex col-12 ">
      <Container className="d-flex justify-content-center ms-1 pe-4 mt-2">
        <Row>
          <Col className="">
            <Card
              style={{ width: "40rem", height: "32rem" }}
              className="mt-5 mb-3 me-1 bg-success-subtle"
            >
              <Card.Img
                variant="fluid"
                src="https://www.cosenzapost.it/wp-content/uploads/2015/12/meteo.png"
                width={"180px"}
                height={"140px"}
                className="ms-5 border-1 border border-warning"
              />
              <Card.Body className="ms-2">
                <h3 className="fw-bold text-primary fs-3 mb-2">
                  {meteoMilan.name}
                </h3>
                <p>{okay && meteoMilan.weather[0].description}</p>
                <p>{currentDate.toUTCString()}</p>
                <p>
                  <i class="bi bi-thermometer "></i> temp:{" "}
                  {okay && meteoMilan.main.temp}°C
                </p>
                <p>
                  <i class="bi bi-thermometer-high text-danger "></i> Temp max:{" "}
                  {okay && meteoMilan.main.temp_max}°C
                </p>
                <p>
                  <i class="bi bi-thermometer-low text-primary"></i> Temp min:{" "}
                  {okay && meteoMilan.main.temp_min}°C
                </p>
                <p className="mb-2">
                  <i class="bi bi-cloud-fog2-fill me-2 text-warning"></i>
                  Speed:
                  {okay && meteoMilan.wind.speed} nodi
                </p>
                <p className="mb-2">{okay && meteoMilan.sys.country}</p>

                {okay && (
                  <img
                    src={`http://openweathermap.org/img/w/${meteoMilan.weather[0].icon}.png`}
                    alt="city"
                    className="mb-1"
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
