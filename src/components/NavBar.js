// bootstrap components
import { LinkContainer } from "react-router-bootstrap";
import { Container, Nav, Navbar } from "react-bootstrap";

// react svg icons
import HomeIcon from "../components/icons/HomeIcon";

// navigation bar
const NavBar = () => {
    return (
        <Navbar expand="lg" className="nav-bar">
            <Container fluid>
                <LinkContainer to="/" className="nav-title-link">
                    <Navbar.Brand>
                        <HomeIcon className="home-icon" width="28px" height="28px" />
                        <span className="navbar-text miguel-fierro">Miguel Fierro</span>
                        </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="justify-content-end flex-grow-1 pe-2">
                        <LinkContainer to="/about" className="nav-link">
                            <Nav.Link><span className="navbar-text">About me</span></Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/projects" className="nav-link">
                            <Nav.Link><span className="navbar-text">Projects</span></Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact" className="nav-link">
                            <Nav.Link><span className="navbar-text">Contact me</span></Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;