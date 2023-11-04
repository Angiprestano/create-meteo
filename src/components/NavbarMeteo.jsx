import {
  Navbar,
  Container,
  Nav,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

const NavbarMeteo = () => {
  return (
    <Navbar className="bg-primary">
      <Container>
        <Nav className="me-auto me-5">
          <img
            src="https://www.linkoristano.it/photogallery_new/images/2014/08/il-meteo-it-44460.jpg"
            alt=""
            width={"110px"}
            height={"62px"}
            className="rounded-3"
          />

          <Nav.Link href="#features" className="text-white mt-2 ms-5 fw-bold ">
            Città
          </Nav.Link>
          <Nav.Link href="#pricing" className="text-white mt-2 ms-3 fw-bold">
            Previsioni
          </Nav.Link>
          <Nav.Link href="#pricing" className="text-white mt-2 ms-3 fw-bold">
            Altre informazioni
          </Nav.Link>
        </Nav>

        <Nav className="fs-4 text-white">
          <i class="bi bi-cloud-lightning-fill me-3 mt-1"></i>
          <i class="bi bi-brightness-high me-3 "></i>
          <i class="bi bi-snow3 me-3 "></i>
          <i class="bi bi-cloud-snow me-3 "></i>
          <i class="bi bi-moon me-3 "></i>
          <i class="bi bi-cloudy-fill me-2"></i>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarMeteo;
