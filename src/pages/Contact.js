// components
import ContactForm from "../components/contact/ContactForm";

// react bootstrap
import Stack from "react-bootstrap/Stack";

// react responsive
import { useMediaQuery } from "react-responsive";

const Contact = () => {

    const isNarrow = useMediaQuery({
        query: "(max-width: 991px)",
    });

    return(
        <Stack className="main-container">
            <div>
            <h1 className="main-title">
                    <span className="typewriter4"></span>
                </h1>
            </div>
            <div>
                <p className="info">
                    Please fill out the form or find my contact information below to get in touch with me.
                    <br />
                    Looking forward to hearing from you.
                </p>
            </div>
            <ContactForm />
            <p className="info">Alternatively, you can contact me directly at my email or phone number.</p>
            <Stack direction={isNarrow ? "" : "horizontal"} className="bottom-info">
                <p className="contact-info">miguel_fierrog@outlook.com</p>
                <p className={isNarrow ? "contact-info" : "contact-info ms-auto"}>+1 (778) 317 3727</p>
            </Stack>
        </Stack>
    );
}

export default Contact;