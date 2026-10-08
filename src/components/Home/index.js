import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import TechnicalSkills from "./TechnicalSkills";
import ProjectList from "./ProjectList";
import ContactItems from "./ContactItems";
import Certificates from "./Certificates";
import ThemeContext from "../../context/ThemeContext";
import { Download, ArrowRight, Sparkles, Code2, Award, Mail } from "lucide-react";

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
    name: "SQLite",
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
    icon: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1765001783/Next.js_cayujl.png",
    name: "Nxt JS",
  },
  {
    id: 10,
    icon: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759421211/programing_ingxu5.png",
    name: "Node JS",
  },
  {
    id: 11,
    icon: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1765001789/MongoDB_zvuuyr.png",
    name: "MongoDB",
  },
];

const projectList = [
  {
    id: 1,
    title: "Nxt Watch (YouTube Clone)",
    projectImage: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1767687714/Screenshot_2026-01-06_135001_chjgnl.png",
    description:
      "Implemented Nxt Watch application which is a clone for YouTube where users can log in and can see a list of videos like Trending, Gaming, Saved videos, and also can search videos and view specific video details, and users can toggle the theme (Light/Dark).",
    projectLink: "https://nxt-watch-sxm2-muhammed-asiyas-projects.vercel.app/",
  },
  {
    id: 2,
    title: "MathMind Ai",
    projectImage: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1791439621/Screenshot_2026-10-08_113529_jxf63s.png",
    description:
      "An AI-powered math learning application designed to help students practice and improve their problem-solving skills.",
    projectLink: "https://mathmind-ai-client.vercel.app/",
  },
  {
    id: 3,
    title: "Tasty Kitchens (Swiggy/Zomato Clone)",
    projectImage: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1767686807/Screenshot_2026-01-06_131206_yq5qb4.png",
    description:
      "Constructed an engaging Online Food Ordering Service akin to Swiggy/Zomato, enabling users to discover top restaurants, obtain in-depth restaurant details, manage their cart, and process payments.",
    projectLink: "https://asiyas-tastey-kitchens.vercel.app/",
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
    link: "tel:+919048999825",
  },
  {
    id: 2,
    logo: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1760451321/location_txsyfj.png",
    title: "Location",
    displayText: "Kerala, Malappuram",
    link: "https://www.google.com/maps?q=Moorkkanad,+Kerala",
  },
  {
    id: 3,
    logo: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1760451284/linkedin_1_gplvga.png",
    title: "LinkedIn",
    displayText: "Muhammed Asiyas",
    link: "https://linkedin.com/in/muhammed-asiyas",
  },
];

const Home = () => (
  <ThemeContext.Consumer>
    {(value) => {
      const { isDark } = value;

      return (
        <div className="w-full flex flex-col min-h-screen">
          <Header />

          <main className="flex-grow">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28">
              {/* Background gradient decorative orbs */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[600px] sm:h-[600px] bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-1/3 right-10 w-72 h-72 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  {/* Left Column: Intro text and statistics */}
                  <div className="lg:col-span-7 flex flex-col items-start text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 border shadow-sm backdrop-blur-md bg-indigo-500/10 border-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                      <Sparkles size={16} className="text-indigo-500 animate-pulse" />
                      <span>Available for Full Stack Opportunities</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
                      Hi, I'm{" "}
                      <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                        Muhammed Asiyas
                      </span>
                    </h1>

                    <p
                      className={`mt-6 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl ${
                        isDark ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      Passionate <strong className={isDark ? "text-white" : "text-slate-900"}>Full Stack Developer</strong> specializing in modern web technologies. I craft scalable applications with clean architecture and exceptional user experiences.
                    </p>

                    {/* Stats Cards */}
                    <div className="mt-8 grid grid-cols-2 gap-4 w-full max-w-lg">
                      <div
                        className={`p-5 rounded-2xl border backdrop-blur-md transition-all duration-300 ${
                          isDark
                            ? "bg-slate-900/60 border-slate-800"
                            : "bg-white/80 border-slate-200/80 shadow-sm"
                        }`}
                      >
                        <h2 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                          24+
                        </h2>
                        <p
                          className={`text-xs sm:text-sm font-medium mt-1 ${
                            isDark ? "text-slate-400" : "text-slate-600"
                          }`}
                        >
                          Rigorous Assignments & Projects
                        </p>
                      </div>

                      <div
                        className={`p-5 rounded-2xl border backdrop-blur-md transition-all duration-300 ${
                          isDark
                            ? "bg-slate-900/60 border-slate-800"
                            : "bg-white/80 border-slate-200/80 shadow-sm"
                        }`}
                      >
                        <h2 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                          600+
                        </h2>
                        <p
                          className={`text-xs sm:text-sm font-medium mt-1 ${
                            isDark ? "text-slate-400" : "text-slate-600"
                          }`}
                        >
                          Hours of Coding Practice
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <a
                        href="https://drive.google.com/file/d/1sdd6HuIZ1YDTZwlZwVTreWiiX9SW23-D/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
                      >
                        <Download size={18} />
                        DOWNLOAD CV
                      </a>

                      <Link
                        to="/projects"
                        className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-base font-semibold border transition-all duration-300 hover:scale-105 active:scale-95 ${
                          isDark
                            ? "bg-slate-900/60 border-slate-700 text-slate-200 hover:bg-slate-800"
                            : "bg-white border-slate-300 text-slate-700 hover:bg-slate-50 shadow-sm"
                        }`}
                      >
                        View Projects <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Hero Profile Image with glow */}
                  <div className="lg:col-span-5 flex justify-center items-center">
                    <div className="relative group">
                      <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-500" />
                      <div
                        className={`relative rounded-3xl overflow-hidden border p-3 backdrop-blur-md ${
                          isDark
                            ? "bg-slate-900/80 border-slate-800"
                            : "bg-white/90 border-slate-200/90 shadow-2xl"
                        }`}
                      >
                        <img
                          className="w-72 h-80 sm:w-84 sm:h-96 object-cover object-top rounded-2xl transition duration-500 group-hover:scale-105"
                          src="https://res.cloudinary.com/dlhgbo0ji/image/upload/v1759390148/asiyassss_mzqpn8.png"
                          alt="Muhammed Asiyas"
                          onError={(e) => {
                            e.target.src = "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761236287/IMG_5855.asiyas_p2zbjj.png";
                          }}
                        />
                        <div className="mt-3 text-center">
                          <p className={`text-sm font-semibold tracking-wide ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                            Muhammed Asiyas
                          </p>
                          <p className="text-xs font-medium text-indigo-500 dark:text-indigo-400">
                            Full Stack Developer
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* TECHNICAL SKILLS SECTION */}
            <section
              id="skills"
              className={`py-20 border-t transition-colors duration-300 ${
                isDark
                  ? "bg-slate-950/40 border-slate-800/80"
                  : "bg-slate-100/50 border-slate-200/80"
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-14">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3 border bg-indigo-500/10 border-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                    <Code2 size={15} />
                    <span>My Capabilities</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                    TECHNICAL SKILLS
                  </h2>
                  <p
                    className={`mt-3 text-sm sm:text-base font-normal ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    Core programming languages, front-end libraries, back-end runtimes, and databases I leverage daily.
                  </p>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 list-none p-0 m-0">
                  {skillsArray.map((eachItem) => (
                    <TechnicalSkills key={eachItem.id} skillsItem={eachItem} />
                  ))}
                </ul>
              </div>
            </section>

            {/* FEATURED PROJECTS SECTION */}
            <section
              id="projects"
              className={`py-20 border-t transition-colors duration-300 ${
                isDark ? "border-slate-800/80" : "border-slate-200/80"
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3 border bg-indigo-500/10 border-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                      <Sparkles size={15} />
                      <span>Portfolio Highlights</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                      FEATURED PROJECTS
                    </h2>
                    <p
                      className={`mt-2 text-sm sm:text-base max-w-xl ${
                        isDark ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      Production-ready web applications with full authentication, state management, responsive designs, and clean APIs.
                    </p>
                  </div>

                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 self-start md:self-auto text-sm font-bold text-indigo-500 hover:text-indigo-400 group"
                  >
                    Explore All Projects
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {projectList.map((eachItem) => (
                    <ProjectList key={eachItem.id} projectList={eachItem} />
                  ))}
                </div>

                <div className="mt-10 text-center">
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 border border-slate-700/80 transition-all duration-200 hover:scale-105"
                  >
                    Click Here To Explore More Projects <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </section>

            {/* CERTIFICATES PREVIEW SECTION */}
            <section
              className={`py-20 border-t transition-colors duration-300 ${
                isDark
                  ? "bg-slate-950/40 border-slate-800/80"
                  : "bg-slate-100/50 border-slate-200/80"
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3 border bg-indigo-500/10 border-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                      <Award size={15} />
                      <span>Verified Credentials</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                      CERTIFICATIONS
                    </h2>
                    <p
                      className={`mt-2 text-sm sm:text-base max-w-xl ${
                        isDark ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      Industry recognized accreditations validating full stack frontend & backend expertise.
                    </p>
                  </div>

                  <Link
                    to="/certificates"
                    className="inline-flex items-center gap-2 self-start md:self-auto text-sm font-bold text-indigo-500 hover:text-indigo-400 group"
                  >
                    View All 10+ Certificates
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </Link>
                </div>

                <ul className="flex flex-col gap-4 list-none p-0 m-0">
                  {certificateList.map((eachCertificates) => (
                    <Certificates
                      key={eachCertificates.id}
                      certificateItem={eachCertificates}
                    />
                  ))}
                </ul>

                <div className="mt-8 text-center">
                  <Link
                    to="/certificates"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 border border-slate-700/80 transition-all duration-200 hover:scale-105"
                  >
                    Click Here To Explore More Certificates <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </section>

            {/* GET IN TOUCH SECTION */}
            <section
              id="contacts"
              className={`py-20 border-t transition-colors duration-300 ${
                isDark ? "border-slate-800/80" : "border-slate-200/80"
              }`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-14">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3 border bg-indigo-500/10 border-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                    <Mail size={15} />
                    <span>Let's Connect</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                    GET IN TOUCH
                  </h2>
                  <p
                    className={`mt-3 text-sm sm:text-base font-normal ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    Feel free to reach out directly via email, phone, or LinkedIn. I am always open to discussing new projects and tech roles.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {contactItems.map((eachItem) => (
                    <ContactItems key={eachItem.id} contactItem={eachItem} />
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <Link
                    to="/contacts"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-base font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:scale-105"
                  >
                    Open Contact Message Form <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </section>
          </main>

          {/* FOOTER */}
          <footer
            className={`py-8 border-t text-center text-xs transition-colors duration-300 ${
              isDark
                ? "bg-[#070b16] border-slate-800 text-slate-500"
                : "bg-slate-100 border-slate-200 text-slate-500"
            }`}
          >
            <p>© {new Date().getFullYear()} Muhammed Asiyas. Built with modern React & Tailwind CSS.</p>
          </footer>
        </div>
      );
    }}
  </ThemeContext.Consumer>
);

export default Home;
