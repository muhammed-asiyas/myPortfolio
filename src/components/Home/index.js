import "./index.css";
import Header from "../Header";
import TechnicalSkills from "./TechnicalSkills";
import ProjectList from "./ProjectList";
import ContactItems from "./ContactItems";

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
    title: "Nxt Trendz ( ECommerce Clone - Amazon, Flipkart)",
    description:
      "Rolled out an innovative e-commerce platform patterned after Amazon and Flipkart.",
    features: [
      {
        id: "A1",
        feature:
          "Nxt Trendz Designed pages for Login, Products, and Product details with React Router and React components.",
      },
      {
        id: "A2",
        feature:
          "Nxt Trendz Ensured user security through JWT tokens, REST API calls, and local storage.",
      },
    ],
    projectLink: "https://nxt-watch-sxm2.vercel.app/",
  },
  {
    id: 2,
    title: "Nxt Watch (YouTube Clone)",
    description:
      "Rolled out an innovative e-commerce platform patterned after Amazon and Flipkart.",
    features: [
      {
        id: "B1",
        feature:
          "YouTube Designed pages for Login, Products, and Product details with React Router and React components.",
      },
      {
        id: "B2",
        feature:
          "YouTube Ensured user security through JWT tokens, REST API calls, and local storage.",
      },
    ],
    projectLink: "https://nxt-watch-sxm2.vercel.app/",
  },
  {
    id: 3,
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
    ],
    projectLink: "https://tastey-kitchens-te6j.vercel.app/",
  },
];

const contactItems = [
  {id: 0, logo: 'https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759643775/email_1_mthhlk.png',
    title: 'Email', displayText: 'asiyasmuhammed18@gmail.com', link: 'mailto:asiyasmuhammed18@gmail.com'},
  {id: 1, logo: 'https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759643790/iphone_qjbzii.png',
    title: 'Phone', displayText: '+91 9048999825', link: 'tel: +91 9048999825'},
  {id: 2, logo: 'https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759643812/map_bha8cz.png',
    title: 'Location', displayText: 'Kerala, Malappuram', link: 'https://www.google.com/maps?q=Moorkkanad,+Kerala target="_blank"'},
  {id: 3, logo: 'https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759643800/linkedin_yqllr8.png',
    title: 'Linkedin', displayText: 'Muhammed Asiyas', link: 'https://linkedin.com/in/muhammed-asiyas'},
]

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="all-my-container" id="home">
      <div className="my-container">
        <div>
          <h1 className="name">Hi, I'm Muhammed Asiyas</h1>
          <p className="my-summary">
            Passionate Full Stack Developer specializing in modern web
            technologies. I create scalable applications with clean code and
            exceptional user experiences.
          </p>
          <div className="coding-progress-container">
            <div className="coding-hour">
              <h1 className="project-count">24+</h1>
              <h1 className="progress-description">
                Rigourous Assignment and Projects
              </h1>
            </div>
            <div className="vertical"></div>
            <div className="coding-hour">
              <h1 className="coding-hour-count">600+</h1>
              <h1 className="progress-description">Hours Of Coding</h1>
            </div>
          </div>
        </div>
        <img
          className="my-image"
          src="https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759390148/asiyassss_mzqpn8.png"
        />
      </div>
    </div>
    <div className="skills-container" id='skills'>
        <h1 className="technical-skill-head">TECHNICAL SKILLS</h1>
        <ul className="technical-skill-container">
          {skillsArray.map((eachItem) => (
            <TechnicalSkills key={eachItem.id} skillsItem={eachItem} />
          ))}
        </ul>
      </div>
    <div id="projects" className="project-container">
      <h1 className="project-head">PROJECTS</h1>
      <div className="project-list-container">
        {projectList.map((eachItem) => (
          <ProjectList key={eachItem.id} projectList={eachItem} />
        ))}
      </div>
    </div>
    <div id="contacts" className="contact-container">
      <h1 className="get-in-touch-head">GET IN TOUCH</h1>
      <ul className="contact-items-container">
        {contactItems.map(eachItem => (
          <ContactItems key={eachItem.id} contactItem={eachItem} />
        ))}
      </ul>
    </div>
  </div>
);

export default Home;
