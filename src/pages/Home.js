// react router
import { Link } from "react-router-dom";

// bootstrap components
import Stack from "react-bootstrap/Stack";

// react svg icons
import GithubIcon from "../components/icons/GithubIcon";
import LinkedInIcon from "../components/icons/LinkedInIcon";

const Home = () => {
    return (
        <Stack gap={3} className="main-container">
            <div>
                <h1 className="main-title">
                    HI! <span className="typewriter"></span>
                </h1>
            </div>
            <div>
                <p className="info">
                    I'm a Computer Science student based in Vancouver, eager to
                    make a mark in the industry.
                    <br />
                    <br />
                    Throughout my studies, I have gained valuable insights into
                    various programming languages and frameworks. With practical
                    experience under my belt, I bring a solid foundation in
                    problem-solving and software development.
                    <br />
                    <br />
                    As a dedicated problem solver, I thrive on tackling
                    challenges and finding innovative solutions. I'm always
                    eager to expand my knowledge and stay up to date with the
                    latest advancements in the field.
                    <br />
                    <br />
                    From web development to Java minigames, my portfolio
                    features a range of projects that demonstrate my ability to
                    create robust software applications.
                </p>
            </div>
            <Stack direction="horizontal" gap={3} className="social-links">
                <Link
                    to="https://www.linkedin.com/in/miguelfierro97/"
                    target="_blank" className="social-icon"
                >
                    <LinkedInIcon className="linkedin-icon" width="60px" height="60px" />
                </Link>
                <Link to="https://github.com/miguel-fg" target="_blank" className="social-icon">
                    <GithubIcon className="github-icon" width="60px" height="60px"/>
                </Link>
            </Stack>
        </Stack>
    );
};

export default Home;
