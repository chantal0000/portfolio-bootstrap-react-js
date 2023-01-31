import {Container, Row, Col, Carousel} from "react-bootstrap"
import style from "./styles/about.css"
import pic1 from "./images/outdoor.JPG"
import pic2 from "./images/ich.JPG"
import pic3 from "./images/work.JPG"
import {Github} from "react-bootstrap-icons";
// import {Carousel} from "react-bootstrap/Carousel";

function About() {
    return (<>
        <Container fluid className="BannerContainer">
            <Row className="BannerRow">
                {/*<Col className="MediaCol col-sm-6 col-md-4 col-lg-8">*/}
                <Col>
                    <Container>
                        <Row className="Header">
                            <Col className="Header-Item"><h1>about me</h1></Col>
                            <Col className=""><p>skills</p></Col>
                        </Row>
                    </Container>
                </Col>
                {/*<Col className="BannerInfo col-sm-6 col-md-8 col-lg-4">*/}
                {/*    <p>Banner RIGHT</p>*/}
                {/*</Col>*/}
            </Row>
        </Container>
        {/*<Container fluid className="About-Container">*/}
        {/*    <Row className="Banner-Row">*/}
        {/*        <Col>*/}
        {/*            <Container>*/}
        {/*                <Row className="Header">*/}
        {/*                    <Col className="Header-Item"><h1>about me</h1></Col>*/}
        {/*                    <Col><p>tech skills, soft skills</p></Col>*/}
        {/*                </Row>*/}
        {/*            </Container>*/}
        {/*        </Col>*/}
        {/*    </Row>*/}
        {/*</Container>*/}
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
                                            {/*<h1>second slide</h1>*/}
                                            <p>Whether I'm working on a new project or finding creative solutions to complex problems, I approach each opportunity with energy and enthusiasm, eager to tackle any obstacle that comes my way.</p>

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
                            <Col><h3>skills</h3><p>skills | skills2 | skills3 | more | more | more</p> <p></p></Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>


    </>)
}

export default About;