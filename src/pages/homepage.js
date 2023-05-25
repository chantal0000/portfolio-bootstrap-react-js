import { Container, Row, Col } from "react-bootstrap";
// eslint-disable-next-line no-unused-vars
import style from "./styles/HomePageStyle.css";
// import Blog from "../components/blog";
import {
    ArrowDown,
    EmojiSmileUpsideDown,
    Github,
    Linkedin,
} from "react-bootstrap-icons";
// import Projects from "./projects"
import API from "./content/api";
import { Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Moodboard from "./content/moodboard";
import Petition from "./content/petition";
import MyTrivia from "./content/my-trivia";
import * as PropTypes from "prop-types";
import Skills from "./skills";
import Typewriter from "typewriter-effect";
import { HashLink } from "react-router-hash-link";

function Homepage() {
    return (
        <>
            <style>
                @import
                url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');
            </style>
            <Container fluid className="Welcome-Container">
                <Row className="WelcomeRow">
                    <Col>
                        <div className="box">
                            <div className="Intro row position-relative">
                                <h1 className="display-1 col">
                                    HELLO, I'M CHANTAL{" "}
                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay={<Tooltip>contact me!</Tooltip>}
                                    >
                                        <Link to="/contact">
                                            <EmojiSmileUpsideDown
                                                className="bi smile"
                                                size={20}
                                                color="#ff5722"
                                            />
                                        </Link>
                                    </OverlayTrigger>
                                </h1>
                                <div class="typewriter">
                                    <Typewriter
                                        options={{
                                            autoStart: true,
                                            loop: true,
                                            delay: 50,
                                            strings: [
                                                "Web Developer && Software Engineering Student at 42 Berlin",
                                            ],
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="Intro-Text">
                                <p>
                                    Welcome to my page! I've created this
                                    website to showcase my recent projects and
                                    share some skills I've acquired. I'm always
                                    eager to take on new projects and
                                    challenges. <br />
                                    <br />
                                    If you have any inquiries or would like to
                                    connect, please don't hesitate to reach out
                                    to me directly through this website, or you
                                    can also find me on LinkedIn and GitHub.{" "}
                                    <br></br>
                                    <br></br>I'm excited to connect with you and
                                    explore new opportunities together.
                                </p>
                                <HashLink smooth to="/#section1">
                                    {" "}
                                    <ArrowDown size={30} color="#ff5722" />{" "}
                                </HashLink>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container id="section1" fluid className="BannerContainer">
                <Row className="BannerRow">
                    {/*<Col className="MediaCol col-sm-6 col-md-4 col-lg-8">*/}
                    <Col>
                        <Container>
                            <Row className="Header">
                                <Col className="Header-Item">
                                    <h1>PROJECTS</h1>
                                </Col>
                                <Col className="Project-Text" md={6} xs={12}>
                                    <p>
                                        Here is a sample of my recent work. Some
                                        of them are personal projects, while
                                        others were created during my time
                                        attending the Spiced Academy Full Stack
                                        Web Dev Bootcamp.
                                    </p>
                                </Col>
                                <Col className="page-hero d-flex align-items-center justify-content-center">
                                    <a href="https://github.com/chantal0000">
                                        <Github
                                            size={30}
                                            color="black"
                                        ></Github>
                                    </a>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Container fluid className="Education-Project p-5">
                <Row>
                    <Col>
                        <Petition />
                    </Col>
                    <Col>
                        <Moodboard />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <API />
                    </Col>
                    <Col>
                        <MyTrivia />
                    </Col>
                </Row>
            </Container>
            <Container fluid className="BannerContainer">
                <Row className="BannerRow">
                    {/*<Col className="MediaCol col-sm-6 col-md-4 col-lg-8">*/}
                    <Col>
                        <Container>
                            <Row className="Header">
                                <Col className="Header-Item">
                                    <h1>TECHNOLOGIES</h1>
                                </Col>
                                <Col className="Project-Text" md={6} xs={12}>
                                    <p>
                                        Here is a selection of the technologies,
                                        programming languages and frameworks I
                                        have worked with. To follow my journey
                                        as a programmer please follow my GitHub
                                        and check out my profile.
                                    </p>
                                </Col>
                                <Col className="page-hero d-flex align-items-center justify-content-center">
                                    <a href="https://github.com/chantal0000">
                                        <Github
                                            size={30}
                                            color="black"
                                        ></Github>
                                    </a>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col md={12} xs={12}>
                        <Skills />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Homepage;
