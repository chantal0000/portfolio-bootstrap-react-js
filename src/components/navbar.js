import {NavbarBrand, Navbar, Nav, Container} from "react-bootstrap";
import "./styles/navbar.css"

// bootstrap navbar component
function BtsNavbar() {
    return (<>
        <Navbar bg='secondary' expand="md" >
            <Container>
                <NavbarBrand>Portfolio</NavbarBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" bg="primary">
                        <Nav.Item className="fs-5">
                            <Nav.Link href="/index.js">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="fs-5">
                            <Nav.Link href="/">Page 1</Nav.Link>
                        </Nav.Item >
                        <Nav.Item className="fs-5">
                            <Nav.Link href="/">Page 2</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
        <p className="display-4 text-muted">under construction</p>
    </>)
}

export default BtsNavbar;