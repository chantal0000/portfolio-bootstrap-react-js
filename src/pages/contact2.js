import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import sw2 from "sweetalert2";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { EmojiSmileUpsideDown, Github, Linkedin } from "react-bootstrap-icons";
import styles from "./styles/contact.css";

// keys are needed to set up private API connection emailjs
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;
const ContactMe = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID).then(
            (result) => {
                alert("send successfully");
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
        e.target.reset();
    };

    return (
        <>
            {/*header section*/}
            <Container>
                <Row>
                    <Col className="Contact-Title">
                        <h1 id="Contact-Title">
                            LET'S{" "}
                            <EmojiSmileUpsideDown
                                className="bi"
                                color="#ff5722"
                                size={20}
                            />{" "}
                            CONNECT{" "}
                            <EmojiSmileUpsideDown
                                className="bi"
                                color="#ff5722"
                                size={20}
                            />{" "}
                            COLLABORATE{" "}
                            <EmojiSmileUpsideDown
                                className="bi"
                                color="#ff5722"
                                size={20}
                            />{" "}
                            CO-CREATE{" "}
                            <EmojiSmileUpsideDown
                                className="bi"
                                color="#ff5722"
                                size={20}
                            />
                        </h1>
                    </Col>
                </Row>
            </Container>

            {/*body section*/}
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col>
                        {/*    left section, linkedin and github connects*/}

                        <p>
                            <a href="https://www.linkedin.com/in/chantal-m-buerger-722391130/">
                                <Linkedin size={40} color="black"></Linkedin>
                            </a>
                        </p>
                        <p>
                            <a href="https://github.com/chantal0000">
                                <Github size={40} color="black"></Github>
                            </a>
                        </p>
                    </Col>
                    {/*// contact form | emailjs*/}
                    <Col className="Form" md={8}>
                        <Form
                            className="Contact-Form"
                            ref={form}
                            onSubmit={sendEmail}
                        >
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicName"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="name"
                                    name="from_name"
                                    required
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPronouns"
                            >
                                <Form.Control
                                    type="text"
                                    placeholder="pronouns"
                                    name="pronouns"
                                ></Form.Control>
                                <Form.Text className="text-muted Form-Text">
                                    <p>
                                        what are your pronouns? feel free to
                                        share with me if you like. I use the
                                        pronouns she/her
                                    </p>
                                </Form.Text>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Control
                                    type="email"
                                    placeholder="email"
                                    name="reply_to"
                                    required
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicMessage"
                            >
                                <Form.Control
                                    placeholder="enter message"
                                    name="message"
                                    as="textarea"
                                    rows={4}
                                    required
                                />
                            </Form.Group>
                            <Button className="Submit-Button" type="submit">
                                send
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default ContactMe;
