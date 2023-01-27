import {Container, Row, Col} from "react-bootstrap"
import style from "./styles/HomePageStyle.css"
import Blog from "../components/blog";
import {ArrowDown, EmojiSmileUpsideDown} from 'react-bootstrap-icons';
import Projects from "./projects"
import API from "./content/api"
import {HashLink} from 'react-router-hash-link';
import {Link} from "react-router-dom";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function Homepage() {
    return (<>
        <Container fluid className="Welcome-Container">
            <Row className="WelcomeRow">
                <Col>
                    <div className="box">
                        <div className="Intro">
                            <h1 className="display-1">Hello, I'm Chantal <OverlayTrigger
                                overlay={<Tooltip>contact me!</Tooltip>}><Link to="/contact"><EmojiSmileUpsideDown
                                className="bi"
                                size={20} color="#FF7000"/></Link></OverlayTrigger></h1>
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
                        <HashLink smooth to='/#section1'> <ArrowDown size={30} color="#FF7000"/> </HashLink></div>
                </Col>
            </Row>
        </Container>
        <Container fluid className="BannerContainer">
            <Row className="BannerRow">
                {/*<Col className="MediaCol col-sm-6 col-md-4 col-lg-8">*/}
                <Col>
                    <Container id="section1">
                        <Row className="Header">
                            <Col className="Header-Item "><h1>project collection</h1></Col>
                            <Col className="page-hero d-flex align-items-center justify-content-center"><p>check out my GitHub for all my work [button GH]</p></Col>
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
                <Col><API/></Col>
                <Col><Projects></Projects></Col>
            </Row>
            <Row>
                <Col><Projects></Projects></Col>
                <Col><Projects></Projects></Col>
            </Row>
        </Container>
    </>)
}

export default Homepage;