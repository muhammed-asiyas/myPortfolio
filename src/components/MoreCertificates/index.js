import React from "react";
import Header from "../Header";
import CertificateItem from "./CertificateItem";
import ThemeContext from "../../context/ThemeContext";
import { Award, CheckCircle2 } from "lucide-react";

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
    name: "JavaScript Essentials",
    issueDate: "10 MAY 2025",
    link: "https://certificates.ccbp.in/intensive/javascript-essentials?id=XCRERSSCVD",
  },
  {
    id: 4,
    name: "Build Your Own Dynamic Web Application",
    issueDate: "07 MAY 2025",
    link: "https://certificates.ccbp.in/intensive/dynamic-web-application?id=YHXXBNTZRI",
  },
  {
    id: 5,
    name: "Python",
    issueDate: "12 MAY 2025",
    link: "https://certificates.ccbp.in/intensive/programming-foundations?id=UONAAAJDBQ",
  },
  {
    id: 6,
    name: "Responsive Web Design Using FlexBox",
    issueDate: "13 APR 2025",
    link: "https://certificates.ccbp.in/intensive/flexbox?id=FQNFGYJLXP",
  },
  {
    id: 7,
    name: "Introduction to Database",
    issueDate: "01 DEC 2024",
    link: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=IOXUVDMLEQ",
  },
  {
    id: 8,
    name: "Build Your Own Responsive Website",
    issueDate: "27 NOV 2024",
    link: "https://certificates.ccbp.in/intensive/responsive-website?id=KEESAUWQKN",
  },
  {
    id: 9,
    name: "Build Your Own Static Website",
    issueDate: "24 SEP 2024",
    link: "https://certificates.ccbp.in/intensive/static-website?id=KCHAWJUFNO",
  },
  {
    id: 10,
    name: "Git",
    issueDate: "04 MAY 2025",
    link: "https://certificates.ccbp.in/intensive/developer-foundations?id=HZCOAGMNUX",
  },
];

const MoreCertificates = () => {
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
                    <Award size={15} />
                    <span>Official Accreditations</span>
                  </div>
                  <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
                    CERTIFICATIONS
                  </h1>
                  <p
                    className={`mt-3 text-sm sm:text-base ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    Verified certifications in modern web architectures, frontend UI libraries, backend API engineering, and database systems.
                  </p>
                </div>

                {/* Primary IRC Certificate Card */}
                <div
                  className={`p-6 sm:p-8 rounded-3xl border mb-16 backdrop-blur-md transition-all duration-300 ${
                    isDark
                      ? "bg-slate-900/60 border-slate-800 shadow-2xl shadow-indigo-950/20"
                      : "bg-white border-slate-200 shadow-xl"
                  }`}
                >
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    <div className="w-full lg:w-3/5 rounded-2xl overflow-hidden border border-slate-700/50 shadow-lg group">
                      <img
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                        src="https://res.cloudinary.com/dlhgbo0ji/image/upload/v1765175946/Screenshot_2025-12-08_113625_l1ujln.png"
                        alt="Industry Ready Certification"
                      />
                    </div>
                    <div className="w-full lg:w-2/5 flex flex-col items-start">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 mb-3">
                        <CheckCircle2 size={14} /> Full Stack Certified
                      </div>
                      <h2
                        className={`text-2xl sm:text-3xl font-extrabold tracking-tight mb-3 ${
                          isDark ? "text-white" : "text-slate-900"
                        }`}
                      >
                        IRC CERTIFICATE
                      </h2>
                      <p
                        className={`text-sm leading-relaxed mb-6 ${
                          isDark ? "text-slate-300" : "text-slate-600"
                        }`}
                      >
                        Comprehensive Industry Ready Certification from NxtWave Disruptive Technologies validating hands-on mastery in building scalable web apps with React, Node.js, Express, and databases.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Other Certificates Section */}
                <div>
                  <h2
                    className={`text-2xl font-bold tracking-tight mb-6 flex items-center gap-2 ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    All Verified Modules & Foundations
                  </h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
                    {certificateList.map((eachCertificate) => (
                      <CertificateItem
                        key={eachCertificate.id}
                        certificateItem={eachCertificate}
                      />
                    ))}
                  </ul>
                </div>
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

export default MoreCertificates;
