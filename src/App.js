import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeMeteo from "./components/HomeMeteo";
import CityMeteo from "./components/CityMeteo";

function App() {
  return (
    <div>
      <HomeMeteo />
      <CityMeteo />
    </div>
  );
}

export default App;
