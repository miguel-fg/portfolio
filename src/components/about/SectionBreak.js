// react bootstrap 
import Stack from "react-bootstrap/Stack";

const SectionBreak = (props) => {
    return (
        <Stack direction="horizontal">
            {props.icon}
            <h1 className="section-title">{props.text}</h1>
        </Stack>
    );
}

export default SectionBreak;