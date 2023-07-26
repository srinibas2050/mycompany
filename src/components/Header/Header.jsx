import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  Offcanvas,
} from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/images/logo.png";
const Header = () => {
  return (
    <div className="mainMenu d-flex flex-column justify-content-center">
      <Navbar key={"lg"} bg="" expand={"lg"}>
        <Container fluid className="px-lg-5">
          <Navbar.Brand as={Link} to={{ pathname: "/" }} className="logo">
            <img src={logo} loading="lazy" />
          </Navbar.Brand>
          <div className="d-lg-none d-flex justify-content-start align-items-center mobileUserNotiSec">
            <div>
              <span className="cart"></span>
            </div>
            <Navbar.Toggle
              className="ms-2"
              aria-controls={`offcanvasNavbar-expand-md`}
            />
          </div>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                My Company
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="align-items-center">
              <Nav className="justify-content-start flex-grow-1 pe-3 navText">
                <Nav.Link as={NavLink} to="/">
                  THE EDIT
                </Nav.Link>
                <Nav.Link as={NavLink} to="/">
                  NEW ARRIVALS
                </Nav.Link>
                <Nav.Link as={NavLink} to="/">
                  DESIGNER
                </Nav.Link>
                <Nav.Link as={NavLink} to="/">
                  CLOTHING
                </Nav.Link>
                <Nav.Link as={NavLink} to="/">
                  SHOES
                </Nav.Link>
                <Nav.Link as={NavLink} to="/">
                  BAGS
                </Nav.Link>
                <Nav.Link as={NavLink} to="/">
                  ACCESSORIES
                </Nav.Link>
                <Nav.Link as={NavLink} to="/">
                  JEWELRY
                </Nav.Link>
                <Nav.Link as={NavLink} to="/">
                  BEAUTY
                </Nav.Link>
                <Nav.Link as={NavLink} to="/">
                  HOME
                </Nav.Link>
              </Nav>
              <div className="d-lg-none">
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2 mb-0"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </div>
              <div className="search-container d-none d-lg-block">
                <form action="/search" method="get">
                  <input
                    className="search expandright"
                    id="searchright"
                    type="search"
                    name="q"
                    placeholder="Search"
                  />
                  <label className="button searchbutton" htmlFor="searchright">
                    <span className="mglass"></span>
                  </label>
                </form>
              </div>
              <span className="cart d-none d-lg-block"></span>
              <span className="user-img d-none d-lg-block"></span>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
