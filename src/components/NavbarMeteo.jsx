import { Navbar, Container, Nav } from "react-bootstrap";

const NavbarMeteo = () => {
  return (
    <Navbar className="bg-primary">
      <Container>
        <Nav className="me-auto me-5">
          <img
            src="https://png.pngtree.com/png-clipart/20221106/ourlarge/pngtree-weather-icon-clouds-and-sun-png-image_6419305.png"
            alt=""
            width={"70px"}
            height={"62px"}
            className="rounded-4"
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
          <i className="bi bi-cloud-lightning-fill me-3 mt-1"></i>
          <i className="bi bi-brightness-high me-3 "></i>
          <i className="bi bi-snow3 me-3 "></i>
          <i className="bi bi-cloud-snow me-3 "></i>
          <i className="bi bi-moon me-3 "></i>
          <i className="bi bi-cloudy-fill me-2"></i>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarMeteo;
