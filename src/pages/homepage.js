import {Container, Row, Col} from "react-bootstrap"
import style from "../HomePageStyle.css"

function Homepage() {
    return (
        <>
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
                        <Col className="col-3">1
                        </Col>
                        <Col className="col-3">2
                        </Col>
                        <Col className="col-3">3
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