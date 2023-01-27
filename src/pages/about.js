import {Container, Row, Col, Carousel} from "react-bootstrap"
import style from "./styles/about.css"

// import {Carousel} from "react-bootstrap/Carousel";

function About() {
    return (<>
        <Container fluid className="About-Container">
            <Row className="Banner-Row">
                <Col>
                    <Container>
                        <Row className="Header">
                            <Col className="Header-Item "><h1>about me</h1></Col>
                            <Col><p>tech skills, soft skills</p></Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
        <Container fluid>
            <Row>
                <Col>
                    <Container>
                        <Row>
                            <Col>
                                <Carousel>
                                    <Carousel.Item>
                                        <img className="d-block w-150"
                                             src="http://skuld.bmsc.washington.edu/raster3d/examples/example2.jpeg"
                                             alt="about me"/>
                                        <Carousel.Caption>
                                            <h1>first slide</h1>
                                            <p>tex tex t xetx tex t</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-150"
                                             src="http://skuld.bmsc.washington.edu/raster3d/examples/example2.jpeg"
                                             alt="about me"/>
                                        <Carousel.Caption>
                                            <h1>second slide</h1>
                                            <p>tex tex t xetx tex t</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img className="d-block w-150"
                                             src="http://skuld.bmsc.washington.edu/raster3d/examples/example2.jpeg"
                                             alt="about me"/>
                                        <Carousel.Caption>
                                            <h1>third slide</h1>
                                            <p>tex tex t xetx tex t</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                            {/*<Col><p>tech skills, soft skills</p></Col>*/}
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>


    </>)
}

export default About;