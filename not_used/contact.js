import React from "react";
import emailjs from "emailjs-com";
import sw2 from "sweetalert2";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useState } from "react";
import {
    ArrowDown,
    EmojiSmileUpsideDown,
    Linkedin,
    Github,
    Send,
} from "react-bootstrap-icons";

// keys are needed to set up private API connection emailjs
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;

function Contact() {
    // local logic section

    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            alert("not send");
            e.preventDefault();
            e.stopPropagation();
        } else if (form.checkValidity() === true) {
            setValidated(true);

            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
                // when sendForm successfully authenticate the request
                (result) => {
                    alert("sw2");
                    // console.log(result.text);
                    // noinspection JSIgnoredPromiseFromCall
                    // sw2.fire({
                    //     icon: "success", title: "Message sent successfully"
                    // })
                },
                (error) => {
                    console.log(error.text);
                    // noinspection JSIgnoredPromiseFromCall
                    // sw2.fire({
                    //     icon: "error", title: "ooops something went wrong, contact the owner of this website"
                    // })
                }
            ); // ending the .then
            e.target.reset();
        }
    };

    // UI section
    return (
        <>
            <Container fluid className="BannerContainer">
                <Row className="BannerRow">
                    <Col>
                        <Container>
                            <Row className="Header-Contact">
                                <Col>
                                    <h1>
                                        Let's{" "}
                                        <EmojiSmileUpsideDown
                                            className="bi"
                                            size={20}
                                        />{" "}
                                        connect{" "}
                                        <EmojiSmileUpsideDown
                                            className="bi"
                                            size={20}
                                        />{" "}
                                        collaborate{" "}
                                        <EmojiSmileUpsideDown
                                            className="bi"
                                            size={20}
                                        />{" "}
                                        co-create{" "}
                                        <EmojiSmileUpsideDown
                                            className="bi"
                                            size={20}
                                        />
                                    </h1>
                                </Col>
                                {/*<Col><p>[GitHub] [LinkedIn]</p></Col>*/}
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>

            <div className="FormWrapper p-5">
                {/*noValidate disables the browsers default UI*/}
                <Row>
                    <Col xs={10}>
                        <h1>message me</h1>
                        <Form
                            className="col-auto px-5"
                            noValidate
                            validated={validated}
                            onSubmit={handleSubmit}
                        >
                            <Form.Group className="px-5" controlId="FormName">
                                {" "}
                                {/*InputField: Name*/}
                                {/*<Form.Label>Name</Form.Label>*/}
                                <Form.Control
                                    className="m-2"
                                    name="from_name"
                                    placeholder="your name"
                                    type="text"
                                    required
                                />
                            </Form.Group>
                            {/*InputField: Name End*/}
                            <Form.Group
                                className="px-5"
                                controlId="FormPronouns"
                            >
                                {/*InputField: Pronouns*/}
                                {/*<Form.Label>Pronouns</Form.Label>*/}
                                <Form.Control
                                    // id="form-input-control-pronouns"
                                    className="m-2"
                                    name="pronouns"
                                    placeholder="pronouns, if you like"
                                    type="text"
                                />
                            </Form.Group>
                            {/*InputField: Pronouns End*/}
                            <Form.Group className="px-5" controlId="FormEmail">
                                {/*InputField: Email*/}
                                {/*<Form.Label>Email</Form.Label>*/}
                                <Form.Control
                                    // id="form-input-control-email"
                                    className="m-2"
                                    name="reply_to"
                                    placeholder="your e-mail"
                                    type="email"
                                    required
                                />
                            </Form.Group>{" "}
                            {/*InputField: Email End*/}
                            <Form.Group
                                className="px-5"
                                controlId="FormInputField"
                            >
                                {" "}
                                {/*InputField: Message*/}
                                {/*<Form.Label>Message</Form.Label>*/}
                                <Form.Control
                                    // id="form-input-control-message"
                                    className="m-2"
                                    placeholder="enter message"
                                    name="message"
                                    as="textarea"
                                    rows={4}
                                    required
                                />
                            </Form.Group>{" "}
                            {/*InputField: Message End*/}
                            <Button
                                type="submit"
                                className="send-btn btn btn-outline-light"
                            >
                                send message
                            </Button>
                        </Form>
                    </Col>
                    <Col>
                        <h1>get in touch</h1>
                        <p>
                            <a href="https://www.linkedin.com/in/chantal-m-buerger-722391130/">
                                <Linkedin size={40} color="black"></Linkedin>
                            </a>{" "}
                            reach out on LinkedIn
                        </p>
                        <p>
                            <a href="https://github.com/chantal0000">
                                <Github size={40} color="black"></Github>
                            </a>{" "}
                            check out my GitHub
                        </p>
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Contact;

// problem sends even though field arent filled out
