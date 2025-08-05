import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";

const MyNavBar = () => {
  const location = useLocation();
  console.log("Location", location);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
        <Container fluid>
          <Link to="/" className="w-25 ">
            <img
              src="../public/Logo_Snasa.png"
              alt="Logo dell'immagine"
              className="w-25"
            />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link
                to="/"
                className={
                  location.pathname === `/`
                    ? `nav-item  text-light me-2 text-decoration-none tag-page fs-4`
                    : `nav-item text-light me-2 text-decoration-none tag-page fs-4`
                }
              >
                Home
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavBar;
