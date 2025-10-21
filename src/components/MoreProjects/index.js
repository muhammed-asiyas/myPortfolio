import "./index.css";
import Header from "../Header";
import ProjectList from "./ProjectList";
import ThemeContext from "../../context/ThemeContext";

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
    skills: [
      {
        id: "B1",
        skill: "HTML",
      },
      {
        id: "B2",
        skill: "CSS",
      },
      {
        id: "B3",
        skill: "REACT JS",
      },
      {
        id: "B4",
        skill: "AUTHORIZATION",
      },
      {
        id: "B5",
        skill: "JWT TOKEN",
      },
      {
        id: "B6",
        skill: "AUTHENTICATION",
      },
      {
        id: "B7",
        skill: "REST API CALLS",
      },
    ],
    projectLink: "https://nxt-watch-sxm2.vercel.app/",
    gitHub: 'https://github.com/muhammed-asiyas/NxtWatch'
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
    skills: [
      {
        id: "B1",
        skill: "HTML",
      },
      {
        id: "B2",
        skill: "CSS",
      },
      {
        id: "B3",
        skill: "REACT JS",
      },
      {
        id: "B4",
        skill: "AUTHORIZATION",
      },
      {
        id: "B5",
        skill: "JWT TOKEN",
      },
      {
        id: "B6",
        skill: "AUTHENTICATION",
      },
      {
        id: "B7",
        skill: "REST API CALLS",
      },
    ],
    projectLink: "https://tastey-kitchens-te6j.vercel.app/",
    gitHub: "https://github.com/muhammed-asiyas/Tastey-Kitchens"
  },
];

const MoreProjects = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDark } = value;
        const HeadColor = isDark ? "head-itemm" : 'color-head-itemm'
        const ProjectContainerBackground = isDark ? 'dark-project-container' : 'color-project-container'
        return (
          <>
            <Header />
            <div className={`more-project-container ${ProjectContainerBackground}`}>
              <h1 className={HeadColor}>PROJECTS</h1>
              <ul className="more-project-list-container">
                {projectList.map(eachProject => (
                  <ProjectList key={eachProject.id} projectList={eachProject} />
                ))}
              </ul>
            </div>
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default MoreProjects;
