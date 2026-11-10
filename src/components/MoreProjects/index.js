import React from "react";
import Header from "../Header";
import ProjectList from "./ProjectList";
import ThemeContext from "../../context/ThemeContext";
import { FolderGit2 } from "lucide-react";
import { ScrollReveal, ParallaxBand } from "../common/Animations";

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
    title: "MathMind Ai",
    description:
      "An AI-powered math learning application designed to help students practice and improve their problem-solving skills with customized difficulty levels.",
    features: [
      {
        id: "D1",
        feature: "User can practice math problems by selecting different topics and difficulty levels, and the application provides instant feedback on their answers."
      },
      {
        id: "D2",
        feature: "The application uses AI algorithms to generate personalized problem sets based on the user's performance and learning pace.",
      },
      {
        id: "D3",
        feature: "The application tracks the user's progress and provides detailed analytics to help them identify areas for improvement."
      },
    ],
    skills: [
      { id: "B1", skill: "REACT JS" },
      { id: "B2", skill: "AI" },
      { id: "B3", skill: "NODEMAILER" },
      { id: "B4", skill: "JAVA SCRIPT" },
      { id: "B5", skill: "MONGO DB" },
      { id: "B6", skill: "EXPRESS" },
    ],
    projectLink: "https://mathmind-ai-client.vercel.app/",
    gitHub: "https://github.com/muhammed-asiyas/MathMind-Ai"
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

            <main className="flex-grow py-14 sm:py-20 relative overflow-hidden">
              {/* Kopiko Ambient Glow Wells */}
              <ParallaxBand speed={0.09} className="absolute top-[-8%] right-[-5%] pointer-events-none opacity-60">
                <div className="w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[140px]" />
              </ParallaxBand>
              <ParallaxBand speed={0.06} className="absolute bottom-[5%] left-[-8%] pointer-events-none opacity-40">
                <div className="w-[450px] h-[450px] bg-orange-700/10 rounded-full blur-[120px]" />
              </ParallaxBand>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* ── Asymmetric Section Header ── */}
                <ScrollReveal direction="up" className="mb-16">
                  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                    <div>
                      <div className="text-[11px] font-mono font-black uppercase tracking-[0.2em] text-amber-500 flex items-center gap-1.5 mb-3">
                        <FolderGit2 size={14} /> [ SELECTED WORKS ]
                      </div>
                      <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight leading-[1.08]">
                        FEATURED<br />
                        <span className="text-gradient-kopiko">PROJECTS</span>
                      </h1>
                    </div>
                    <p className={`max-w-xs text-sm leading-relaxed ${isDark ? "text-[#b09683]" : "text-[#6c432b]"}`}>
                      Deep dive into architectural features, state management, REST API workflows, and full technical stack of each project.
                    </p>
                  </div>
                </ScrollReveal>

                {/* Projects List — staggered scroll reveals */}
                <ul className="space-y-10 list-none p-0 m-0 max-w-5xl mx-auto">
                  {projectList.map((eachProject, i) => (
                    <ScrollReveal key={eachProject.id} direction={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
                      <ProjectList projectList={eachProject} />
                    </ScrollReveal>
                  ))}
                </ul>
              </div>
            </main>

            <footer
              className={`py-8 border-t text-center text-xs transition-colors duration-300 ${
                isDark
                  ? "bg-[#0b0402] border-amber-900/25 text-[#917561]"
                  : "bg-[#f4ebe0] border-amber-900/10 text-[#6d4e38]"
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
