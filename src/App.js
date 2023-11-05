import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeMeteo from "./components/HomeMeteo";
import CityMeteo from "./components/CityMeteo";
import NavbarMeteo from "./components/NavbarMeteo";
import FooterMeteo from "./components/FooterMeteo";

function App() {
  return (
    <div className="bg">
      <NavbarMeteo />
      <HomeMeteo />
      <CityMeteo />
      <FooterMeteo />
    </div>
  );
}

export default App;
