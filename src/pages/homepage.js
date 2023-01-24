import {Container, Row, Col} from "react-bootstrap"
import style from "../HomePageStyle.css"
import Blog from "../components/blog";

function Homepage() {
    return (
        <><Container fluid className="Welcome-Container">
            <Row className="WelcomeRow">
                <Col>
                    <div className="Intro">
                        <h1>Hi, I'm Chantal.</h1>
                    </div>
                    <div className="Intro-Text">
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt
                            ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                            duo
                            dolores et ea rebum. </p>
                    </div>
                </Col>
            </Row>
        </Container>
            <Container fluid className="BannerContainer">
                <Row className="BannerRow">
                    <Col className="MediaCol col-sm-6 col-md-4 col-lg-8">
                        <p>hello hello homepage LEFT</p>
                    </Col>
                    <Col className="BannerInfo col-sm-6 col-md-8 col-lg-4">
                        <p>Banner RIGHT</p>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="Education_Projects">
                <Container>
                    <Row>
                        <Col className="col-3"><Blog></Blog>
                        </Col>
                        <Col className="col-3">2
                        </Col>
                        <Col className="col-3"><Blog></Blog>
                        </Col>
                        <Col className="col-3">4
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default Homepage;