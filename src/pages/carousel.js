import React from 'react';
import {CardImg} from "react-bootstrap";
import {Container, Row, Col} from "react-bootstrap"

function Projects() {


    // UI section
    return (
        <>
        <Container>
            <Row>
                <Col><h1>project name</h1></Col>
                <Col><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                    ut labore et dolore magna aliquyam erat, sed diam voluptua. </p></Col>
                <Col>stack, github, js, node, xx, xx, xx</Col>
            </Row>
        </Container>

        <div className="Project-Body">
            <img
                src="https://c8.alamy.com/compde/pf3nx9/desktop-quellcode-und-technologie-hintergrund-entwickler-oder-programmierer-mit-kodierung-und-programmierung-wallpaper-nach-computer-sprache-und-quellcode-kom-pf3nx9.jpg"
                className='project-image img-fluid shadow-4' alt="404"/>
        </div>

</>)

}

export default Projects;