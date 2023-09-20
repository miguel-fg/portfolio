import { useState } from "react";

// react bootstrap
import { Form, Button, Toast, Stack } from "react-bootstrap";

// email JS
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    //form state
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState("")

    //toast state
    const [show, setShow] = useState(false);
    const [variant, setVariant] = useState("danger");
    const [header, setHeader] = useState("Oops!");
    const [body, setBody] = useState(
        "Something went wrong! Please check all the fields or use my contact information below to get in touch with me."
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();

        const form = e.currentTarget;

        if (form.checkValidity() && validateEmail(email)) {
            setVariant("success");
            setHeader("Thank you!");
            setBody(
                "I'll get back to you as soon as possible. You should expect a reply in the next 24-48 hrs."
            );

            sendEmail(e);
        }else if(!validateEmail(email)){
            setEmail("");
        }

        setShow(true);
        setValidated(true);
    };

    // valid email address
    const validateEmail = (email) => {
        return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    };

    const sendEmail = (e) => {
        emailjs
            .sendForm(
                "service_wzh5wz8",
                "template_ypepc2n",
                e.target,
                "ACP5MGs4PGIGebKT0"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    e.target.reset();
                    setValidated(false);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <Stack>
            <Form
                onSubmit={handleSubmit}
                noValidate
                validated={validated}
                className="contact-form"
            >
                <Form.Group className="mb-3" controlId="emailForm.name">
                    <Form.Label>
                        <span className="info">Full Name</span>
                    </Form.Label>
                    <Form.Control
                        type="text"
                        required
                        name="name"
                        className="form-input"
                    />
                    <Form.Control.Feedback />
                </Form.Group>
                <Form.Group className="mb-3" controlId="emailForm.email">
                    <Form.Label>
                        <span className="info">Email</span>
                    </Form.Label>
                    <Form.Control
                        type="text"
                        required
                        name="email"
                        className="form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control.Feedback />
                </Form.Group>
                <Form.Group className="mb-3" controlId="emailForm.subject">
                    <Form.Label>
                        <span className="info">Subject</span>
                    </Form.Label>
                    <Form.Control
                        type="text"
                        required
                        name="subject"
                        className="form-input"
                    />
                    <Form.Control.Feedback />
                </Form.Group>
                <Form.Group className="mb-3" controlId="emailForm.message">
                    <Form.Label>
                        <span className="info">Message</span>
                    </Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={5}
                        required
                        name="message"
                        className="form-input"
                    />
                    <Form.Control.Feedback />
                </Form.Group>
                <Button
                    type="submit"
                    variant="outline-light"
                    size="lg"
                    className="submit-button"
                >
                    Submit
                </Button>
            </Form>
            <Toast
                onClose={() => setShow(false)}
                show={show}
                delay={5000}
                autohide
                bg={variant}
                className="email-toast"
            >
                <Toast.Header>
                    <strong className="me-auto">{header}</strong>
                </Toast.Header>
                <Toast.Body>{body}</Toast.Body>
            </Toast>
        </Stack>
    );
};

export default ContactForm;
