import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css"
import { HiHome, HiLightBulb, HiOutlineClipboardList, HiChartBar } from 'react-icons/hi';

function navbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container id="navbar">
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
          <ul id="navlist">
          <li>
                <Nav.Link href="#" className="nav-link">
                  <span className="icon-link">
                    <HiHome />
                    <span className="link-text">Home</span>
                  </span>
                </Nav.Link>
              </li>
              <li>
                <Nav.Link href="#" className="nav-link">
                  <span className="icon-link">
                    <HiLightBulb />
                    <span className="link-text">Quiz</span>
                  </span>
                </Nav.Link>
              </li>
              <li>
                <Nav.Link href="#" className="nav-link">
                  <span className="icon-link">
                    <HiOutlineClipboardList />
                    <span className="link-text">Log</span>
                  </span>
                </Nav.Link>
              </li>
             <li>
                <Nav.Link href="#" className="nav-link">
                  <span className="icon-link">
                    <HiChartBar />
                    <span className="link-text">Stats</span>
                  </span>
                </Nav.Link>
              </li>
          </ul>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default navbar;