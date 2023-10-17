// react bootstrap components
import { Accordion, Stack } from "react-bootstrap";

// uuid
import uuid from "react-uuid";

// project data
import data from "../projects.json";

//react svg icons
import WebIcon from "../components/icons/WebIcon";
import RobotIcon from "../components/icons/RobotIcon";
import GithubIcon from "../components/icons/GithubIcon";
import ApplicationIcon from "../components/icons/ApplicationIcon";

const Projects = () => {
    const projects = data?.map((project) => (
        <Accordion.Item eventKey={project.id} key={uuid()} className="acc-item">
            <Accordion.Header className="acc-header">
                <Stack direction="horizontal" gap={3}>
                    {project.category === "web" ? (
                        <WebIcon
                            width="1.5em"
                            height="1.5em"
                            className="project-icon"
                        />
                    ) : project.category === "robotics" ? (
                        <RobotIcon
                            width="1.5em"
                            height="1.5em"
                            className="project-icon"
                        />
                    ) : (
                        <ApplicationIcon
                            width="1.5em"
                            height="1.5em"
                            className="project-icon"
                        />
                    )}
                    <span className="project-title">{project.name}</span>
                </Stack>
            </Accordion.Header>
            <Accordion.Body className="acc-body">
                <div
                    className={`status ${
                        project.status === "Completed"
                            ? "completed"
                            : project.status === "In progress"
                            ? "in-progress"
                            : "canceled"
                    }`}
                >
                    {project.status}
                </div>
                {project.stack?.map((skill) => (
                    <div key={uuid()} className="skill-tag">
                        {skill}
                    </div>
                ))}
                <p className="project-description">{project.description}</p>
                <p className="project-date">{project.date}</p>
                <a
                    href={project.github_link}
                    target="_blank"
                    rel="noreferrer"
                    className="github-anchor"
                >
                    <GithubIcon
                        stroke="var(--gunmetal)"
                        strokeWidth={2}
                        className="github-icon-project"
                    />{" "}
                    Github
                </a>
            </Accordion.Body>
        </Accordion.Item>
    ));

    return (
        <Stack gap={3} className="main-container">
            <div>
                <h1 className="main-title">
                    <span className="typewriter3"></span>
                </h1>
            </div>
            <Accordion className="acc">{projects}</Accordion>
        </Stack>
    );
};

export default Projects;
