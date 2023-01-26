import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import style from "./styles/projects.css"
import {Github} from 'react-bootstrap-icons';
function Projects() {
    return (
        <Card className="m-4">
            <Card.Img variant="top" src="https://i.ytimg.com/vi/Bor5lkRyeGo/hqdefault.jpg" />
            <Card.Body>
                <Card.Title className="card-title">Card Title</Card.Title>
                <Card.Text className="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item classsName="stack-text" id="stack-text">Vestibulum at eros</ListGroup.Item>

            </ListGroup>
            <Card.Body>
                <Card.Link className="link" href="#"><Github size={30} color="#282A3A"></Github></Card.Link>
                <Card.Link className="link" href="#">internet</Card.Link>
            </Card.Body>
        </Card>
    );
}

export default Projects;