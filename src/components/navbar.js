import {NavbarBrand, Navbar, Nav, Container} from "react-bootstrap";

// bootstrap navbar component
function BtsNavbar() {
    return (<>
        <Navbar bg="primary" expand="lg">
            <Container>
                <NavbarBrand>React Portfolio</NavbarBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Item>
                            <Nav.Link href="/index.js">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/">Page 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
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