import React, { Component } from "react";

class PrevisionCity extends Component {
  state = {
    City: [],
    long: [],
    lat: [],
  };
  componentDidMount() {
    fetch(
      "https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=41.8933203&lon=12.4829321&appid=bab430f8782bfe5c0e5ba94872cf0d82"
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("error");
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({ City: data.long });
      })
      .catch((error) => {
        console.error(error);
        throw new Error("error");
      });
  }

  render() {
    return (
      <div>
        <div></div>
      </div>
    );
  }
}

export default PrevisionCity;
