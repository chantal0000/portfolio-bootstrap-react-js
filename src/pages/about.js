import {Container, Row, Col, Carousel} from "react-bootstrap"
import style from "./styles/about.css"
import pic1 from "./images/outdoor.JPG"
import pic2 from "./images/ich.JPG"
import pic3 from "./images/work.JPG"
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
                                <Carousel className="carousel">
                                    <Carousel.Item className="carousel-item">
                                        <img className="carousel-img d-block w-100"
                                             src={pic1}
                                             alt="about me"/>
                                        <Carousel.Caption className="carousel-caption">
                                            <h1>first slide</h1>
                                            <p>tex tex t xetx tex t</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item className="carousel-item">
                                        <img className="carousel-img  d-block w-100"
                                             src={pic2}
                                             alt="about me"/>
                                        <Carousel.Caption>
                                            <h1>second slide</h1>
                                            <p>tex tex t xetx tex t</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item className="carousel-item">
                                        <img className="carousel-img  d-block w-100"
                                             src={pic3}
                                             alt="about me"/>
                                        <Carousel.Caption>
                                            <h1>third slide</h1>
                                            <p>tex tex t xetx tex t</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                            <Col><h3>skills</h3><p>skills | skills2 | skills3 | more | more | more</p></Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>


    </>)
}

export default About;