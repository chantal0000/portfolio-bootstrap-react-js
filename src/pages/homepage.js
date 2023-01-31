import {Container, Row, Col} from "react-bootstrap"
import style from "./styles/HomePageStyle.css"
import Blog from "../components/blog";
import {ArrowDown, EmojiSmileUpsideDown, Github} from 'react-bootstrap-icons';
import Projects from "./projects"
import API from "./content/api"
import {HashLink} from 'react-router-hash-link';
import {Link} from "react-router-dom";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Moodboard from "./content/moodboard";
import Petition from "./content/petition";
import MyTrivia from "./content/my-trivia";
import arrow from "./images/arrow.png"
import * as PropTypes from "prop-types";

function ColItem(props) {
    return null;
}

ColItem.propTypes = {href: PropTypes.string};

function Homepage() {
    return (<>
        <Container fluid className="Welcome-Container">
            <Row className="WelcomeRow">
                <Col>
                    <div className="box">
                        <div className="Intro">
                            <h1 className="display-1">Hello, I'm Chantal <OverlayTrigger placement="bottom"
                                                                                         overlay={<Tooltip>contact
                                                                                             me!</Tooltip>}><Link
                                to="/contact"><EmojiSmileUpsideDown
                                className="bi"
                                size={20} color="#ff5722"/></Link></OverlayTrigger></h1>
                        </div>
                        <div className="Intro-Text">
                            <p>I'm a Berlin-based Full Stack developer. I enjoy learning, and I'm eager to advance
                                through new, interesting challenges. I'm currently looking for the ideal position so I
                                can advance as a developer. I'm delighted to showcase some of my work here. </p>
                        </div>
                        {/*<div><img src={arrow} sizes={20}/></div>*/}
                    </div>
                    {/*<div className="pronouns"><p>SHE/HER</p></div>*/}
                    <div className="check-out-projects" id="section1">
                        <p>CHECK OUT MY PROJECTS</p>
                        <HashLink smooth to='/#section1'> <ArrowDown size={30} color="#ff5722"/> </HashLink></div>
                </Col>
            </Row>
        </Container>
        <Container fluid className="BannerContainer">
            <Row className="BannerRow">
                {/*<Col className="MediaCol col-sm-6 col-md-4 col-lg-8">*/}
                <Col>
                    <Container>
                        <Row className="Header">
                            <Col className="Header-Item"><h1>project collection</h1></Col>
                            <Col className="Project-Text" xs={6}><p>Here is a sample of my most recent work. Some of
                                them are personal projects, while others were created during my time attending the
                                Spiced Academy Full Stack Web Dev Bootcamp and others during the intensive sessions I
                                took with my mentor. On my GitHub, you can find more projects.</p></Col>
                            <Col className="page-hero d-flex align-items-center justify-content-center"><a
                                href="https://github.com/chantal0000">
                                <Github size={30} color="black"></Github></a></Col>
                        </Row>
                    </Container>
                </Col>
                {/*<Col className="BannerInfo col-sm-6 col-md-8 col-lg-4">*/}
                {/*    <p>Banner RIGHT</p>*/}
                {/*</Col>*/}
            </Row>
        </Container>
        <Container fluid className="Education-Project p-5">
            <Row>
                <Col><Petition/></Col>
                <Col><Moodboard/></Col>
            </Row>
            <Row>
                <Col><API/></Col>
                <Col><MyTrivia/></Col>
            </Row>
        </Container>

    </>)
}

export default Homepage;