import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeMeteo from "./components/HomeMeteo";
import CityMeteo from "./components/CityMeteo";
import NavbarMeteo from "./components/NavbarMeteo";

function App() {
  return (
    <div className="bg">
      <NavbarMeteo />
      <HomeMeteo />
      <CityMeteo />
    </div>
  );
}

export default App;
