import { Container, Nav } from "react-bootstrap";

const FooterMeteo = () => {
  return (
    <Container>
      <Nav className="ms-5">
        <p className="ms-5 mt-2 text-white ">
          Per ulteriori informazioni visitare la pagina principale di Meteo.it /
          3BMETEO / METEORETE.com
        </p>
        <span className="ms-5 text-white ">
          <i class="bi bi-instagram fs-4 ms-4"></i>
          <i className="bi bi-facebook me-2 ms-3 fs-4"></i>
          <i className="bi bi-twitter-x ms-2 fs-4"></i>
          <i class="bi bi-google fs-4 ms-3"></i>
        </span>
      </Nav>
    </Container>
  );
};

export default FooterMeteo;
