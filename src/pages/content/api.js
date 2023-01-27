import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
// import style from "./styles/projects.css"
import {Github, Globe} from 'react-bootstrap-icons';
import img1 from "./images/api-img.png"

function API() {
    return (
        <Card className="m-4">
            <Card.Img variant="top" src={img1}/>
            <Card.Body>
                <Card.Title className="card-title">NASA | Astronomy picture of the day | API</Card.Title>
                <Card.Text className="card-text">
                    A single page application website showing the Astronomy Picture of the day (APOD) API. Using
                    JavaScript and React.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item classsName="stack-text" id="stack-text">JAVASCRIPT | REACT | API | BOOTSTRAP </ListGroup.Item>

            </ListGroup>
            <Card.Body>
                <Card.Link className="link" href="https://incandescent-piroshki-02c3e6.netlify.app/"><Globe size={30}
                                                                                                            color="#282A3A"></Globe></Card.Link>
                <Card.Link className="link"
                           href="https://github.com/chantal0000/API_NASA_APOD_Picture_of_the_day"><Github size={30}
                                                                                                          color="#282A3A"></Github></Card.Link>
            </Card.Body>
        </Card>
    );
}

export default API;