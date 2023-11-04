import { useEffect, useState } from "react";

const CityMeteo = () => {
  const [meteoMilan, setMeteoMilan] = useState({});
  const [meteo, setMeteo] = useState(false);

  const getMeteo = async () => {
    try {
      let response = await fetch(
        "http://api.openweathermap.org/geo/1.0/direct?q=Milano&limit=5&appid=bab430f8782bfe5c0e5ba94872cf0d82"
      );

      if (response.ok) {
        const MeteoDate = await response.json();
        console.log(MeteoDate);
        setMeteoMilan(MeteoDate);
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
  }, []);

  return <div></div>;
};

export default CityMeteo;
