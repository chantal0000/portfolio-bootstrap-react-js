import {NavbarBrand, Navbar, Nav, Container} from "react-bootstrap";
import "./styles/navbar.css"

// bootstrap navbar component
function BtsNavbar() {
    return (<>
        {/*sticky-top navbar stays when you scroll*/}
        <Navbar expand="md" className="navbar sticky-top">
            <Container>
                <NavbarBrand><a className="logo" href="/">Chantal Buerger</a></NavbarBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    {/*ms-auto for pos left*/}
                    <Nav className="links-container ms-auto">
                        <Nav.Item className="fs-5">
                            <Nav.Link className="nav-links" href="/">HOME</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="fs-5">
                            <Nav.Link
                                href="/apiPlayground" className="nav-links">API
                                Playground</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="fs-5">
                            <Nav.Link href="/contact" className="nav-links"
                            >CONTACT</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    </>)
}

export default BtsNavbar;