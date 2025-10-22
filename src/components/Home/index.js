import { Link } from "react-router-dom";
import "./index.css";
import Header from "../Header";
import TechnicalSkills from "./TechnicalSkills";
import ProjectList from "./ProjectList";
import ContactItems from "./ContactItems";
import Certificates from "./Certificates";
import ThemeContext from "../../context/ThemeContext";

const skillsArray = [
  {
    id: 1,
    icon: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759419781/html_vspn92.png",
    name: "HTML",
  },
  {
    id: 2,
    icon: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759420694/css-3_mc6rw3.png",
    name: "CSS",
  },
  {
    id: 3,
    icon: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759420764/bootstrap_og8cfc.png",
    name: "BootStrap",
  },
  {
    id: 4,
    icon: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759420863/python_svkilp.png",
    name: "Python",
  },
  {
    id: 5,
    icon: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759420929/database_ymjm0r.png",
    name: "MySQL",
  },
  {
    id: 6,
    icon: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759420991/git_k9eky0.png",
    name: "Git",
  },
  {
    id: 7,
    icon: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759421078/java-script_zvo1mk.png",
    name: "JavaScript",
  },
  {
    id: 8,
    icon: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759421181/structure_t65oay.png",
    name: "React JS",
  },
  {
    id: 9,
    icon: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759421211/programing_ingxu5.png",
    name: "Node JS",
  },
];

const projectList = [
  {
    id: 1,
    title: "Nxt Watch (YouTube Clone)",
    description:
      "Rolled out an innovative e-commerce platform patterned after Amazon and Flipkart.",
    features: [
      {
        id: "B1",
        feature: "This project is like YouTube.",
      },
      {
        id: "B2",
        feature: "This is my first project using more functions in React js",
      },
      {
        id: "B3",
        feature: "This project used vercel deployment for the deploy",
      },
    ],
    projectLink: "https://nxt-watch-sxm2.vercel.app/",
  },
  {
    id: 2,
    title: "Tasty Kitchens (Swiggy/Zomato Clone)",
    description:
      "Rolled out an innovative e-commerce platform patterned after Amazon and Flipkart.",
    features: [
      {
        id: "C1",
        feature:
          "Tastey Designed pages for Login, Products, and Product details with React Router and React components.",
      },
      {
        id: "C2",
        feature:
          "Tastey Ensured user security through JWT tokens, REST API calls, and local storage.",
      },
      {
        id: "C3",
        feature: "This project used vercel deployment for the deploy",
      },
    ],
    projectLink: "https://tastey-kitchens-te6j.vercel.app/",
  },
];

const certificateList = [
  {
    id: 1,
    name: "React JS",
    issueDate: "25 SEP 2025",
    link: "https://certificates.ccbp.in/intensive/react-js?id=SLUDQCATTR",
  },
  {
    id: 2,
    name: "Node JS",
    issueDate: "20 JUN 2025",
    link: "https://certificates.ccbp.in/intensive/node-js?id=JEEWWQXTRD",
  },
  {
    id: 3,
    name: "Java Script",
    issueDate: "10 MAY 2025",
    link: "https://certificates.ccbp.in/intensive/javascript-essentials?id=XCRERSSCVD",
  },
];

const contactItems = [
  {
    id: 0,
    logo: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1760451296/email_2_mcj1ea.png",
    title: "Email",
    displayText: "asiyasmuhammed18@gmail.com",
    link: "mailto:asiyasmuhammed18@gmail.com",
  },
  {
    id: 1,
    logo: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1760451308/phone_z07cwz.png",
    title: "Phone",
    displayText: "+91 9048999825",
    link: "tel: +91 9048999825",
  },
  {
    id: 2,
    logo: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1760451321/location_txsyfj.png",
    title: "Location",
    displayText: "Kerala, Malappuram",
    link: 'https://www.google.com/maps?q=Moorkkanad,+Kerala target="_blank"',
  },
  {
    id: 3,
    logo: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1760451284/linkedin_1_gplvga.png",
    title: "Linkedin",
    displayText: "Muhammed Asiyas",
    link: "https://linkedin.com/in/muhammed-asiyas",
  },
];

const Home = () => (
  <ThemeContext.Consumer>
    {(value) => {
      const { isDark } = value;
      const HomeContainerBackground = isDark
        ? "dark-mode-home-container"
        : "color-mode-home-container";
      const MyContainerBackground = isDark
        ? "dark-my-container"
        : "color-my-container";
      const SkillsContainerBackground = isDark
        ? "dark-skills-container"
        : "color-skills-container";
      const ProjectContainerBackground = isDark
        ? "dark-project-container"
        : "color-project-container";
      const ContactContainerBackground = isDark
        ? "dark-contact-container"
        : "color-contact-container";
      const NameColor = isDark ? "dark-name" : "color-name";
      const MySummaryColor = isDark ? "dark-my-summary" : "color-my-summary";
      const VerticalColor = isDark ? "dark-vertical" : "color-vertical";
      const FontColor = isDark ? "dark-count" : "color-count";
      const ImageContainer = isDark
        ? "dark-image-sm-container"
        : "color-image-sm-container";
      const HeadItemStyle = isDark ? "head-item" : "color-head-item";
      const ImageContainerLarge = isDark ? "" : "color-image-container";
      const ProjectButtonBackground = isDark
        ? "dark-more-project-button"
        : "color-more-project-button";
      const certificateBackground = isDark ? 'dark-certificate-item-container' : 'color-certificate-item-container'
      return (
        <div className={`home-container ${HomeContainerBackground}`}>
          <Header />
          <div className="all-my-container" id="home">
            <div className={`my-container ${MyContainerBackground}`}>
              <div className={`image-sm-container ${ImageContainer}`}>
                <img
                  className="image-sm"
                  src="https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759390148/asiyassss_mzqpn8.png"
                />
              </div>
              <div>
                <h1 className={NameColor}>Hi, I'm Muhammed Asiyas</h1>
                <p className={`my-summary ${MySummaryColor}`}>
                  Passionate Full Stack Developer specializing in modern web
                  technologies. I create scalable applications with clean code
                  and exceptional user experiences.
                </p>
                <div className="coding-progress-container">
                  <div className="coding-hour">
                    <h1 className={`project-count ${FontColor}`}>24+</h1>
                    <h1 className={`progress-description ${FontColor}`}>
                      Rigourous Assignment and Projects
                    </h1>
                  </div>
                  <div className={`vertical ${VerticalColor}`}></div>
                  <div className="coding-hour">
                    <h1 className={`coding-hour-count ${FontColor}`}>600+</h1>
                    <h1 className={`progress-description ${FontColor}`}>
                      Hours Of Coding
                    </h1>
                  </div>
                </div>
              </div>
              <div className={`my-image-container ${ImageContainerLarge}`}>
                <img
                  className="my-image"
                  src="https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759390148/asiyassss_mzqpn8.png"
                />
              </div>
            </div>
          </div>
          <div
            className={`skills-container ${SkillsContainerBackground}`}
            id="skills"
          >
            <h1 className={`${HeadItemStyle}`}>TECHNICAL SKILLS</h1>
            <ul className="technical-skill-container">
              {skillsArray.map((eachItem) => (
                <TechnicalSkills key={eachItem.id} skillsItem={eachItem} />
              ))}
            </ul>
          </div>
          <div
            id="projects"
            className={`project-container ${ProjectContainerBackground}`}
          >
            <h1 className={`${HeadItemStyle}`}>PROJECTS</h1>
            <div className="project-list-container">
              {projectList.map((eachItem) => (
                <ProjectList key={eachItem.id} projectList={eachItem} />
              ))}
            </div>
            <Link to="/projects">
              <button
                type="button"
                className={`more-project-button ${ProjectButtonBackground}`}
              >
                Click Here To Explore More Projects
              </button>
            </Link>

            <div className="certificates-container">
              <h1 className={`${HeadItemStyle}`}>CERTIFICATES</h1>
              <ul className={`${certificateBackground}`}>
                {certificateList.map((eachCertificates) => (
                  <Certificates
                    key={eachCertificates.id}
                    certificateItem={eachCertificates}
                  />
                ))}
              </ul>
              <Link to="/certificates">
                <button
                  type="button"
                  className={`more-project-button ${ProjectButtonBackground}`}
                >
                  Click Here To Explore More Certificates
                </button>
              </Link>
            </div>
          </div>
          <div
            id="contacts"
            className={`contact-container ${ContactContainerBackground}`}
          >
            <h1 className={`${HeadItemStyle}`}>GET IN TOUCH</h1>
            <ul className="contact-items-container">
              {contactItems.map((eachItem) => (
                <ContactItems key={eachItem.id} contactItem={eachItem} />
              ))}
            </ul>
          </div>
        </div>
      );
    }}
  </ThemeContext.Consumer>
);

export default Home;
