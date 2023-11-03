import React, { Component } from "react";
import { useEffect, useState } from "react";

const latitudine = 41.89;
const longitudine = 12.48;
const apiKey = "bab430f8782bfe5c0e5ba94872cf0d82";

const CityMeteo = () => {
  const [meteoMilan, setMeteoMilan] = useState({});
  const [meteo, setMeteo] = useState(false);

  const getMeteo = async () => {
    try {
      let response = await fetch(
        "http://api.openweathermap.org/geo/1.0/direct?q=Milao&limit=5&appid=bab430f8782bfe5c0e5ba94872cf0d82"
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

  return ()
};

export default CityMeteo;
