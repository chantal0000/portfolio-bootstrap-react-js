import {Container, Row, Col} from "react-bootstrap"
import style from "./styles/HomePageStyle.css"
import Blog from "../components/blog";
import {ArrowDown} from 'react-bootstrap-icons';
import Projects from "./projects"

function Homepage() {
    return (<><Container fluid className="Welcome-Container">
            <Row className="WelcomeRow">
                <Col>
                    <div className="box">
                        <div className="Intro">
                            <h1 className="display-1">Hello, I'm Chantal <svg id="rotate"
                                                                              xmlns="http://www.w3.org/2000/svg"
                                                                              width="16" height="16" fill="currentColor"
                                                                              className="bi bi-emoji-smile-upside-down"
                                                                              viewBox="0 0 16 16">
                                <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0-1a8 8 0 1 1 0 16A8 8 0 0 1 8 0z"/>
                                <path
                                    d="M4.285 6.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 4.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 3.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 9.5C7 8.672 6.552 8 6 8s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5zm4 0c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5.448 1.5 1 1.5 1-.672 1-1.5z"/>
                            </svg></h1>

                        </div>
                        <div className="Intro-Text">
                            <p>I'm a web developer based in Berlin, Germany. Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt
                                ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                                justo
                                duo
                                dolores et ea rebum. </p>
                        </div>


                        {/*<div className="web-dev"><p>WEB DEVELOPER</p></div>*/}
                    </div>
                    {/*<div className="pronouns"><p>SHE/HER</p></div>*/}
                    <div className="check-out-projects">
                        <p>CHECK OUT MY PROJECTS</p>
                        <ArrowDown size={30}/></div>

                </Col>
            </Row>
        </Container>
            <Container fluid className="BannerContainer">
                <Row className="BannerRow">
                    {/*<Col className="MediaCol col-sm-6 col-md-4 col-lg-8">*/}
                    <Col>
                        <Container className="container">
                            <Row className="header">
                                <Col><h1>project collection</h1></Col>
                                {/*<Col><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt*/}
                                {/*    ut labore et dolore magna aliquyam erat, sed diam voluptua. </p></Col>*/}
                                <Col><p>check out my GitHub for all my work [button GH]</p></Col>
                            </Row>
                        </Container>
                    </Col>
                    {/*<Col className="BannerInfo col-sm-6 col-md-8 col-lg-4">*/}
                    {/*    <p>Banner RIGHT</p>*/}
                    {/*</Col>*/}
                </Row>
            </Container>
            <Container fluid className="Education_Projects">
                <Container>
                    <Row>
                        <Col className="col-3">1<h1>sdfnkjdhfjksdfjkdjskfhjkdf</h1>
                            {/*<Blog></Blog>*/}
                        </Col>
                        <Col className="col-3"><Projects></Projects>
                        </Col>
                        {/*<Col className="col-3"><Blog></Blog>*/}
                        {/*</Col>*/}
                        {/*<Col className="col-3">4*/}
                        {/*</Col>*/}
                    </Row>
                </Container>
            </Container>
        </>)
}

export default Homepage;