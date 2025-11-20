import "./index.css";
import Header from "../Header";
import ProjectList from "./ProjectList";
import ThemeContext from "../../context/ThemeContext";

const projectList = [
  {
    id: 1,
    title: "Nxt Watch (YouTube Clone)",
    description:
      "Implemented Nxt Watch application which is a clone for YouTube where users can log in and can see a list of videos like Trending, Gaming, Saved videos, and also can search videos and view specific video details, and users can toggle the theme (Light/Dark).",
    features: [
      {
        id: "B1",
        feature: "Implemented Different pages like Login, Home, Trending, Gaming, Saved videos using React components, props, state, lists, event handlers, form inputs."
      },
      {
        id: "B2",
        feature: "Authenticating by taking username, password and doing login post HTTP API Call.",
      },
      {
        id: "B3",
        feature: "Persisted user login state by keeping jwt token in local storage, Sending it in headers of further API calls to authorize the user."
      },
      {
        id: "B4",
        feature: "Implemented different routes for Login, Home, Trending, Gaming, Saved videos, Video item details pages by using React Router components Route, Switch, Link."
      },
      {
        id: "B5",
        feature: "Redirecting to the login page if the user tries to open Home, Trending, Gaming, Saved videos, Video item details routes which need authentication by implementing protected Route."
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
        skill: "JAVA SCRIPT",
      },
      {
        id: "B5",
        skill: "JWT TOKEN",
      },
      {
        id: "B6",
        skill: "ROUTING",
      },
      {
        id: "B7",
        skill: "REST API CALLS",
      },
      {id: 'B8', skill: 'AUTHENTICATION'},
      {id: 'B9', skill: 'AUTHORIZATION'},
    ],
    projectLink: "https://nxt-watch-sxm2-muhammed-asiyas-projects.vercel.app/",
    gitHub: 'https://github.com/muhammed-asiyas/NxtWatch'
  },
  {
    id: 2,
    title: "Tasty Kitchens (Swiggy/Zomato Clone)",
    description:
      "Constructed an engaging Online Food Ordering Service akin to Swiggy/Zomato, enabling users to discover top restaurants, obtain in-depth restaurant details, manage their cart, and process payments.",
    features: [
      {
        id: "C1",
        feature:
          "Set up unique routes for features such as login, home screen, individual restaurant data, and cart management using React Router components (Route, Switch, Link).",
      },
      {
        id: "C2",
        feature:
          "Incorporated a fluid horizontal scrolling capability (carousel images) on the home screen with the help of the React Slick library.",
      },
      {
        id: "C3",
        feature: "Developed visually striking and exact React components by following Figma mockups and using REST APIs to fetch popular restaurants and specific restaurant information."
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
        skill: "JAVA SCRIPT",
      },
      {
        id: "B5",
        skill: "JWT TOKEN",
      },
      {
        id: "B6",
        skill: "REST API CALLS",
      },
      {
        id: "B7",
        skill: "AUTHENTICATION",
      },
      {
        id: "B8",
        skill: "AUTHORIZATION",
      },
      {
        id: "B9",
        skill: "REACT SLICK",
      },
    ],
    projectLink: "https://asiyas-tastey-kitchens.vercel.app/",
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
