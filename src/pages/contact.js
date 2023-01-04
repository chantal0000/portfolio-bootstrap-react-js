import React from 'react';
import emailjs from 'emailjs-com';
import sw2 from 'sweetalert2';
import {Form, Button} from 'react-bootstrap'
import {useState} from "react";

// keys are needed to set up private API connection
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;

function Contact() {
    // local logic section

    // works when initalState etc. is commented out, why are we using it

    // const initialState = {
    //     name: "", email: "", message: ""
    // }
    // const [newMail, setNewMail] = useState(initialState);
    // const {name, email, message} = newMail;

    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setValidated(true);
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then( // when sendForm successfully authenticate the request
                (result) => {
                    console.log(result.text);
                    // noinspection JSIgnoredPromiseFromCall
                    sw2.fire({
                        icon: "success",
                        title: "Message sent successfully"
                    })
                },
                (error) => {
                    console.log(error.text);
                    // noinspection JSIgnoredPromiseFromCall
                    sw2.fire({
                        icon: "error",
                        title: "ops smth went wrong, contact the owner of this website"
                    })
                }); // ending the .then
        e.target.reset();
    }

    // UI section
    return (
        <div className="FormWrapper">
            <Form
                onSubmit={handleSubmit}>
                {/*InputField: Name*/}
                <Form.Group controlId="FormName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        id="form-input-control-name"
                        // value={name}
                        name="from_name"
                        placeholder="enter your name"
                        required
                        type="text"
                    />
                </Form.Group>
                {/*InputField: Name End*/}
                {/*InputField: Pronouns*/}
                <Form.Group controlId="FormPronouns">
                    <Form.Label>Pronouns</Form.Label>
                    <Form.Control
                        id="form-input-control-pronouns"
                        name="pronouns"
                        placeholder="enter your pronouns if you like"
                        type="text"
                    />
                </Form.Group>
                {/*InputField: Pronouns End*/}
                {/*InputField: Email*/}
                <Form.Group controlId="FormEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        id="form-input-control-email"
                        name="reply_to"
                        placeholder="enter your email"
                        required
                        type="email"
                    />
                </Form.Group>
                {/*InputField: Email End*/}
                {/*InputField: Message*/}
                <Form.Group controlId="FormMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        id="form-input-control-message"
                        placeholder="enter message"
                        name="message"
                        required
                        type="text-area"
                    />
                </Form.Group>
                {/*InputField: Message End*/}

                <Button type="submit" className="btn btn-outline-light">submit and reset</Button>
            </Form>
        </div>
    )
}

export default Contact;