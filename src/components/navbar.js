import {NavbarBrand, Navbar, Nav, Container} from "react-bootstrap";
import "./styles/navbar.css"

// bootstrap navbar component
function BtsNavbar() {
    return (<>
        {/*sticky-top navbar stays when you scroll*/}
        <Navbar expand="md" className="sticky-top">
            <Container>
                <NavbarBrand><a href="/">Portfolio</a></NavbarBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    {/*ms-auto for pos left*/}
                    <Nav className="ms-auto" bg="primary">
                        <Nav.Item className="fs-5">
                            <Nav.Link className="nav-links" href="/index.js">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="fs-5">
                            <Nav.Link
                                href="/apiPlayground" className="nav-links">API
                                Playground</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="fs-5">
                            <Nav.Link href="/contact" className="nav-links"
                            >Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    </>)
}

export default BtsNavbar;