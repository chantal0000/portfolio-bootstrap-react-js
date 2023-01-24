import React from 'react';
import emailjs from 'emailjs-com';
import sw2 from 'sweetalert2';
import {Form, Button} from 'react-bootstrap'
import {useState} from "react";

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

            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
                .then( // when sendForm successfully authenticate the request
                    (result) => {
                        alert("sw2")
                        // console.log(result.text);
                        // noinspection JSIgnoredPromiseFromCall
                        // sw2.fire({
                        //     icon: "success", title: "Message sent successfully"
                        // })
                    }, (error) => {
                        console.log(error.text);
                        // noinspection JSIgnoredPromiseFromCall
                        // sw2.fire({
                        //     icon: "error", title: "ooops something went wrong, contact the owner of this website"
                        // })
                    }); // ending the .then
            e.target.reset();
        }
    }

    // UI section
    return (<div className="FormWrapper">
            {/*noValidate disables the browsers default UI*/}
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group controlId="FormName"> {/*InputField: Name*/}
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        // id="form-input-control-name"
                        // value={name}
                        name="from_name"
                        placeholder="enter your name"
                        type="text"
                        required
                    />
                </Form.Group>{/*InputField: Name End*/}

                <Form.Group controlId="FormPronouns">{/*InputField: Pronouns*/}
                    <Form.Label>Pronouns</Form.Label>
                    <Form.Control
                        // id="form-input-control-pronouns"
                        name="pronouns"
                        placeholder="enter your pronouns if you like"
                        type="text"
                    />
                </Form.Group>{/*InputField: Pronouns End*/}

                <Form.Group controlId="FormEmail">{/*InputField: Email*/}
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        // id="form-input-control-email"
                        name="reply_to"
                        placeholder="enter your email"
                        type="email"
                        required
                    />
                </Form.Group> {/*InputField: Email End*/}

                <Form.Group controlId="FormInputField"> {/*InputField: Message*/}
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        // id="form-input-control-message"
                        placeholder="enter message"
                        name="message"
                        type="text-area"
                        required
                    />
                </Form.Group> {/*InputField: Message End*/}

                <Button type="submit" className="btn btn-outline-light">yaaay, send the message and say hi</Button>
            </Form>
        </div>)
}

export default Contact;

// problem sends even though field arent filled out