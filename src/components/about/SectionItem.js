// react boostrap
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

const SectionItem = (props) => {
    const { location, year, country, role } = props;

    return (
        <Container fluid className="section-container rounded">
            <Stack>
                <p className="resume-item-title"><strong>{location}</strong> / {role}</p>
            </Stack>
            <Container className="extra-info">
                {year}
                <br />
                {country}
            </Container>
        </Container>
    );
};

export default SectionItem;
