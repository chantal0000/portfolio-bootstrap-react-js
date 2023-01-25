import React from 'react';
import {CardImg} from "react-bootstrap";
import {Container, Row, Col} from "react-bootstrap"
import "./styles/projects.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Projects() {


    // UI section
    return (
        <>
        {/*<Container className="container">*/}
        {/*    <Row className="header">*/}
        {/*        <Col><h1>project collection</h1></Col>*/}
        {/*        /!*<Col><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt*!/*/}
        {/*        /!*    ut labore et dolore magna aliquyam erat, sed diam voluptua. </p></Col>*!/*/}
        {/*        <Col><p>check out my GitHub for all my work [button GH]</p></Col>*/}
        {/*    </Row>*/}
        {/*</Container>*/}

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

</>)

}

export default Projects;