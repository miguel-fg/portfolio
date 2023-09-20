// react bootstrap components
import { Accordion, Stack } from "react-bootstrap"

// uuid
import uuid from "react-uuid";

// project data
import data from "../projects.json";

//react svg icons
import WebIcon from "../components/icons/WebIcon";
import RobotIcon from "../components/icons/RobotIcon";

const Projects = () => {

    const projects = data?.map((project) => (
        <Accordion.Item eventKey={project.id} key={uuid()} className="acc-item">
            <Accordion.Header className="acc-header">
                <Stack direction="horizontal" gap={3}>
                    {project.category === "web" ? <WebIcon /> : project.category === "robotics" ? <RobotIcon /> : <></>}
                    {project.name}
                </Stack>
            </Accordion.Header>
            <Accordion.Body className="acc-body">
                <div className={`status ${project.status === "Completed" ? "completed" : project.status === "In progress" ? "in-progress" : "canceled"}`}>{project.status}</div>
                    {project.stack?.map((skill) =>(
                        <div key={uuid()} className="skill-tag">
                            {skill}
                        </div>
                    ))}
                <p className="project-description">{project.description}</p>
                <p className="project-date">{project.date}</p>
            </Accordion.Body>
        </Accordion.Item>
    ))

    return(
        <Stack gap={3} className="main-container">
            <div>
                <h1 className="main-title">
                    <span className="typewriter3"></span>
                </h1>
            </div>
            <Accordion className="acc">
                {projects}
            </Accordion>
        </Stack>
    );
}

export default Projects;