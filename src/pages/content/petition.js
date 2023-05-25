import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Github, Globe } from "react-bootstrap-icons";
import img1 from "./images/petition-cut.gif";

function Petition() {
    return (
        <Card className="m-4">
            <Card.Img variant="top" src={img1} />
            <Card.Body>
                <Card.Title className="card-title">
                    Free Menstrual Products || Petition
                </Card.Title>
                <Card.Text className="card-text">
                    Online petition where people can register, log in, update
                    profile, draw signature, redo signature, view a list of all
                    supporters who have signed and finally see all supports from
                    the same location.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item classsName="stack-text" id="stack-text">
                    JAVASCRIPT | NODE.JS | BCRYPT | EXPRESS | HEROKU
                </ListGroup.Item>
            </ListGroup>
            <Card.Body>
                {/*<Card.Link className="link" href="https://incandescent-piroshki-02c3e6.netlify.app/"><Globe size={30}*/}
                {/*                                                                                            color="#282A3A"></Globe></Card.Link>*/}
                <Card.Link
                    className="link"
                    href="https://github.com/chantal0000/petition"
                >
                    <Github size={30} color="#282A3A"></Github>
                </Card.Link>
            </Card.Body>
        </Card>
    );
}

export default Petition;
