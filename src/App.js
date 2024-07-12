import "./App.css";
import logo from "./utils/images/logota3chkpi.png";
import { Link, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube } from "react-icons/fa";

function App() {
  return (
    <div>
      <Navbar expand="lg" className="head position-absolute w-100">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand d-flex align-items-center">
              <img className="logotaa3" src={logo} alt="Logo" />
              <span className="mx-2 text-light text-black lh-1 fw-semibold">
                National School
                <br />
                Of Autonomous
                <br />
                Systems Technology
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end w-100">
              <Nav.Link href="/" className="text-uppercase">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="text-uppercase">
                Speciality
              </Nav.Link>
              <Nav.Link href="/about" className="text-uppercase">
                About School
              </Nav.Link>
              <Nav.Link href="/blog" className="text-uppercase">
                Student's Opinion
              </Nav.Link>
              <Nav.Link href="#" className="text-uppercase">
                Get in Touch
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer>
        <div className="container my-5">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-md-4">
              <Link to="/contact">
                <button
                  type="button"
                  className="btn btn-outline-light btn-lg mb-5 mb-md-4"
                >
                  Get In Touch
                </button>
              </Link>
              <ul className="footer-social-icons list-unstyled d-flex justify-content-between">
                <Link to="https://www.facebook.com/groups/619771290006383/?ref=share&mibextid=NSMWBT">
                  <li>
                    <FaFacebook size={32} color="#3ABEF9" />
                  </li>
                </Link>
                <Link to="https://www.instagram.com/abdellah.sebtii">
                  <li>
                    <FaInstagram size={32} color="#3ABEF9" />
                  </li>
                </Link>
                <Link to="https://t.me/Sebtiabd">
                  <li>
                    <FaTelegram size={32} color="#3ABEF9" />
                  </li>
                </Link>
                <Link to="#">
                  <li>
                    <FaYoutube size={32} color="#3ABEF9" />
                  </li>
                </Link>
              </ul>
            </div>
            <div className="col-md-7 col-lg-6">
              <div className="d-row d-md-flex justify-content-between align-items-center">
                <div className="col-12 col-md-6 col-lg-5 mb-5 mt-4 my-md-0">
                  <ul className="footer-navigation list-unstyled mb-0">
                    <Link to="/" className="text-decoration-none">
                      <li
                        className="text-uppercase fw-semibold"
                        style={{ color: "#a1cff8" }}
                      >
                        Home
                      </li>
                    </Link>
                    <Link to="#" className="text-decoration-none">
                      <li
                        className="text-uppercase fw-semibold"
                        style={{ color: "#a1cff8" }}
                      >
                        Speciality
                      </li>
                    </Link>
                    <Link to="/about" className="text-decoration-none">
                      <li
                        className="text-uppercase fw-semibold"
                        style={{ color: "#a1cff8" }}
                      >
                        About School
                      </li>
                    </Link>
                    <Link to="/blog" className="text-decoration-none">
                      <li
                        className="text-uppercase fw-semibold"
                        style={{ color: "#a1cff8" }}
                      >
                        Student's Opinion
                      </li>
                    </Link>
                    <Link to="#" className="text-decoration-none">
                      <li
                        className="text-uppercase fw-semibold"
                        style={{ color: "#a1cff8" }}
                      >
                        Get In Touch
                      </li>
                    </Link>
                  </ul>
                </div>
                <div className="col-12 col-md-6 col-lg-7">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="https://maps.app.goo.gl/qHxcHbRQhbMKF2Fz7">
                        <p>Abdelhafid Ihdaden technological pole</p>
                      </a>
                    </li>
                    <li>
                      <p>Phone Number - +213663907032</p>
                    </li>
                    <li>
                      <p>
                        Email -{" "}
                        <a href="mailto:ecolenssa@gmail.com">
                          ecolenssa@gmail.com
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-body-tertiary">
          <div className="container">
            <p className="p-3 m-0 text-center fw-bold text-black">
              Made By Abdellah Sebti | {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
