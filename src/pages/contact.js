// import BtsNavbar from "../components/navbar";
import {Form, Button} from "react-bootstrap";
import {useState} from "react";

function Contact() {
    // initial, empty state ""
    const initialState = {
        name: "",
        email: "",
        message: ""
    }
    // hook to set state

    const [newMail, setNewMail] = useState(initialState);
//    // function to handle the change of the input fields
    const {name, email, message} = newMail;

    // anonymous function called e
    // e is object argument that allows to initalize
    const eventTrigger = e => {
        // how will event be updated?
        // spread operator ...
        // new key value pair [e.target.name]: e.target.value
        setNewMail({...newMail, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        // react hook, when we click on send button but not all fields are filled it will not submit the mail
        e.preventDefault()
    }

    return (
        // <BtsNavbar></BtsNavbar>
        <>
            <div className="FormWrapper w-50 justify-content-center align-items-center">
                <Form>
                    <Form.Group controlId="FormName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            onChange={eventTrigger}
                            value={name}
                            name="name"
                            type="text"
                            placeholder="enter your name"
                        />
                    </Form.Group>
                    <Form.Group controlId="FormEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            onChange={eventTrigger}
                            value={email}
                            name="email"
                            type="email"
                            placeholder="enter your email"/>
                    </Form.Group>
                    <Form.Group controlId="FormInputField">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            onChange={eventTrigger}
                            value={message}
                            name="message"
                            type="text"
                            placeholder="enter your message"
                        />
                    </Form.Group>
                    <Button type="submit" variant="outline-info">looking forward to hear from you</Button>
                </Form>
            </div>
        </>
    )
}

export default Contact;