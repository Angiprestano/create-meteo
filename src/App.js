import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeMeteo from "./components/HomeMeteo";
import CityMeteo from "./components/CityMeteo";
import PrevisionCity from "./components/PrevisionCity";

function App() {
  return (
    <div>
      <HomeMeteo />
      <CityMeteo />
      <PrevisionCity />
    </div>
  );
}

export default App;
