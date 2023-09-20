// components
import SectionBreak from "../components/about/SectionBreak";
import SectionItem from "../components/about/SectionItem";

//react svg icons
import BriefcaseIcon from "../components/icons/BriefcaseIcon";
import PencilIcon from "../components/icons/PencilIcon";

// bootstrap components
import Stack from "react-bootstrap/Stack";

// uuid
import uuid from "react-uuid";

const WORK_DATA = [
    {
        location: "INTESC Electronics",
        year: "May 2021 - November 2021",
        country: "Puebla, Mexico",
        role: "Software developer",
    },
    {
        location: "Tecnologico de Monterrey",
        year: "January 2020 - July 2020",
        country: "Puebla, Mexico",
        role: "3D printing lab coordinator",
    },
    {
        location: "Aerobot Planet Academy",
        year: "August 2017 - July 2020",
        country: "Puebla, Mexico",
        role: "Python and robotics instructor",
    },
];

const EDU_DATA = [
    {
        location: "Langara College",
        year: "January 2022 -  Present",
        country: "Vancouver, Canada",
        role: "Computer Studies Diploma",
    },
    {
        location: "Tecnologico de Monterrey",
        year: "August 2016 - July 2021",
        country: "Puebla, Mexico",
        role: "B.S.E, Digital Systems and Robotics",
    },
];

const About = () => {
    const workItems = WORK_DATA?.map((entry) => (
        <SectionItem
            key={uuid()}
            location={entry.location}
            year={entry.year}
            country={entry.country}
            role={entry.role}
        />
    ));

    const eduItems = EDU_DATA?.map((entry) => (
        <SectionItem
            key={uuid()}
            location={entry.location}
            year={entry.year}
            country={entry.country}
            role={entry.role}
        />
    ));

    return (
        <Stack gap={4} className="main-container">
            <div>
                <h1 className="main-title">
                    <span className="typewriter2"></span>
                </h1>
            </div>
            <div>
                <p className="info">
                    Here's a glimpse into my background in tech. For a more
                    comprehensive view of my career path, I encourage you to{" "}
                    <a
                        className="file-download"
                        href="/full-resume.pdf"
                        download="full-resume.pdf"
                    >
                        download my full resume
                    </a>
                    .
                </p>
            </div>
            <SectionBreak
                text="WORK EXPERIENCE"
                icon={<BriefcaseIcon width="35" height="35" />}
            />
            {workItems}
            <SectionBreak
                text="EDUCATION"
                icon={<PencilIcon width="35" height="35" />}
            />
            {eduItems}
        </Stack>
    );
};

export default About;
