import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {Github, Globe} from 'react-bootstrap-icons';
import img1 from "./images/moodboard.gif"

function Moodboard() {
    return (
        <Card className="m-4">
            <Card.Img variant="top" src={img1}/>
            <Card.Body>
                <Card.Title className="card-title">Imageboard | Moodboard</Card.Title>
                <Card.Text className="card-text">
                    A single page application - moodboard / board of images - where anyone can upload and share images together with a username, title and description
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item classsName="stack-text" id="stack-text">JAVASCRIPT | VUE | NODE.JS | EXPRESS |
                    POSTGRESQL</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                {/*<Card.Link className="link" href="https://incandescent-piroshki-02c3e6.netlify.app/"><Globe size={30}*/}
                {/*                                                                                            color="#282A3A"></Globe></Card.Link>*/}
                <Card.Link className="link"
                           href="https://github.com/chantal0000/imageboard"><Github size={30}
                                                                                    color="#282A3A"></Github></Card.Link>
            </Card.Body>
        </Card>
    );
}

export default Moodboard;