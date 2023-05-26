import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Github } from "react-bootstrap-icons";
import img1 from "./images/my-trivia.gif";

function MyTrivia() {
    return (
        <Card className="m-4">
            <Card.Img variant="top" src={img1} />
            <Card.Body>
                <Card.Title className="card-title">
                    My Trivia || Quiz
                </Card.Title>
                <Card.Text className="card-text">
                    Trivia game where the questions come from the open trivia
                    API. You can choose category, difficulty, type of questions
                    and number of questions. For every correct answer you
                    receive a point and see your final score at the end.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className="stack-text" id="stack-text">
                    JAVASCRIPT | REACT | API | MUI | HEROKU
                </ListGroup.Item>
            </ListGroup>
            <Card.Body>
                {/*<Card.Link className="link" href="https://incandescent-piroshki-02c3e6.netlify.app/"><Globe size={30}*/}
                {/*                                                                                            color="#282A3A"></Globe></Card.Link>*/}
                <Card.Link
                    className="link"
                    href="https://github.com/chantal0000/MyTrivia"
                >
                    <Github size={30} color="#282A3A"></Github>
                </Card.Link>
            </Card.Body>
        </Card>
    );
}

export default MyTrivia;
