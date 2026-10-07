import React from "react";
import Header from "../Header";
import ProjectList from "./ProjectList";
import ThemeContext from "../../context/ThemeContext";
import { FolderGit2 } from "lucide-react";

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
      { id: "B1", skill: "HTML" },
      { id: "B2", skill: "CSS" },
      { id: "B3", skill: "REACT JS" },
      { id: "B4", skill: "JAVA SCRIPT" },
      { id: "B5", skill: "JWT TOKEN" },
      { id: "B6", skill: "ROUTING" },
      { id: "B7", skill: "REST API CALLS" },
      { id: "B8", skill: "AUTHENTICATION" },
      { id: "B9", skill: "AUTHORIZATION" },
    ],
    projectLink: "https://nxt-watch-sxm2-muhammed-asiyas-projects.vercel.app/",
    gitHub: "https://github.com/muhammed-asiyas/NxtWatch"
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
      { id: "B1", skill: "HTML" },
      { id: "B2", skill: "CSS" },
      { id: "B3", skill: "REACT JS" },
      { id: "B4", skill: "JAVA SCRIPT" },
      { id: "B5", skill: "JWT TOKEN" },
      { id: "B6", skill: "REST API CALLS" },
      { id: "B7", skill: "AUTHENTICATION" },
      { id: "B8", skill: "AUTHORIZATION" },
      { id: "B9", skill: "REACT SLICK" },
    ],
    projectLink: "https://asiyas-tastey-kitchens.vercel.app/",
    gitHub: "https://github.com/muhammed-asiyas/Tastey-Kitchens"
  },
  {
    id: 3,
    title: "Todo Application",
    description:
      "A simple and efficient Todo Application built using React that allows users to create, edit, delete, and manage daily tasks.",
    features: [
      {
        id: "D1",
        feature: "Add, edit, and delete tasks",
      },
      {
        id: "D2",
        feature: "User can filter tasks by status (All / Completed / Pending)",
      },
      {
        id: "D3",
        feature: "Clean and responsive UI (mobile-friendly design) and Optimized for performance and smooth UX"
      },
    ],
    skills: [
      { id: "B1", skill: "HTML" },
      { id: "B2", skill: "CSS" },
      { id: "B3", skill: "REACT JS" },
      { id: "B4", skill: "JAVA SCRIPT" },
      { id: "B5", skill: "NODE JS" },
      { id: "B6", skill: "EXPRESS" },
      { id: "B7", skill: "SQLITE" },
    ],
    projectLink: "https://todoapplicationfullstack.onrender.com/",
    gitHub: "https://github.com/muhammed-asiyas/TodoApplicationBackend"
  },
];

const MoreProjects = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDark } = value;

        return (
          <div className="w-full flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow py-12 sm:py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Title */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3 border bg-indigo-500/10 border-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                    <FolderGit2 size={15} />
                    <span>Selected Works</span>
                  </div>
                  <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
                    FEATURED PROJECTS
                  </h1>
                  <p
                    className={`mt-3 text-sm sm:text-base ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    Deep dive into each project's architectural features, state management, REST API workflows, and technical stack.
                  </p>
                </div>

                {/* Projects List */}
                <ul className="space-y-8 list-none p-0 m-0 max-w-5xl mx-auto">
                  {projectList.map((eachProject) => (
                    <ProjectList key={eachProject.id} projectList={eachProject} />
                  ))}
                </ul>
              </div>
            </main>

            <footer
              className={`py-8 border-t text-center text-xs transition-colors duration-300 ${
                isDark
                  ? "bg-[#070b16] border-slate-800 text-slate-500"
                  : "bg-slate-100 border-slate-200 text-slate-500"
              }`}
            >
              <p>© {new Date().getFullYear()} Muhammed Asiyas. All rights reserved.</p>
            </footer>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default MoreProjects;
