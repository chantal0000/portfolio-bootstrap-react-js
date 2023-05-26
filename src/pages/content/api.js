import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
// import style from "./styles/projects.css"
import { Github, Globe } from "react-bootstrap-icons";
import img1 from "./images/api-cut.gif";

function API() {
    return (
        <Card className="m-4">
            <Card.Img variant="top" src={img1} />
            <Card.Body>
                <Card.Title className="card-title">
                    Astronomy picture of the day || API
                </Card.Title>
                <Card.Text className="card-text">
                    A single-page application that utilizes the APOD (Astronomy
                    Picture of the Day) API to display the captivating Astronomy
                    Picture of the day. Using React, enhancing the user
                    experience by incorporating a Bootstrap Modal component.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className="stack-text" id="stack-text">
                    JAVASCRIPT | REACT | API | BOOTSTRAP | NETLIFY{" "}
                </ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Card.Link
                    className="link"
                    href="https://incandescent-piroshki-02c3e6.netlify.app/"
                >
                    <Globe size={30} color="#282A3A"></Globe>
                </Card.Link>
                <Card.Link
                    className="link"
                    href="https://github.com/chantal0000/API_NASA_APOD_Picture_of_the_day"
                >
                    <Github size={30} color="#282A3A"></Github>
                </Card.Link>
            </Card.Body>
        </Card>
    );
}

export default API;
