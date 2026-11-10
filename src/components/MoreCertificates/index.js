import React from "react";
import Header from "../Header";
import CertificateItem from "./CertificateItem";
import ThemeContext from "../../context/ThemeContext";
import { Award, CheckCircle2 } from "lucide-react";
import { ScrollReveal, ParallaxBand } from "../common/Animations";

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

            <main className="flex-grow py-14 sm:py-20 relative overflow-hidden">
              {/* Kopiko Ambient Glow Wells */}
              <ParallaxBand speed={0.1} className="absolute top-[-6%] left-1/2 -translate-x-1/2 pointer-events-none opacity-50">
                <div className="w-[700px] h-[400px] bg-amber-600/12 rounded-full blur-[150px]" />
              </ParallaxBand>
              <ParallaxBand speed={0.06} className="absolute bottom-[10%] right-[-5%] pointer-events-none opacity-35">
                <div className="w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[110px]" />
              </ParallaxBand>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* ── Asymmetric Section Header ── */}
                <ScrollReveal direction="up" className="mb-16">
                  <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                    <div>
                      <div className="text-[11px] font-mono font-black uppercase tracking-[0.2em] text-amber-500 flex items-center gap-1.5 mb-3">
                        <Award size={14} /> [ OFFICIAL ACCREDITATIONS ]
                      </div>
                      <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight leading-[1.08]">
                        CERTIFI
                        <span className="text-gradient-kopiko">CATIONS</span>
                      </h1>
                    </div>
                    <p className={`max-w-xs text-sm leading-relaxed ${isDark ? "text-[#b09683]" : "text-[#6c432b]"}`}>
                      Verified certifications in modern web architectures, frontend UI libraries, backend API engineering, and database systems.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ── IRC Hero Certificate ── */}
                <ScrollReveal direction="up" delay={100} className="mb-16">
                  <div className={`p-6 sm:p-10 rounded-3xl border backdrop-blur-md transition-all duration-300 hover:shadow-2xl ${
                    isDark
                      ? "bg-[#180e0a]/85 border-amber-900/40 shadow-2xl shadow-black/60 hover:border-amber-500/40"
                      : "bg-white/95 border-amber-900/15 shadow-xl shadow-amber-900/10 hover:border-amber-500/30"
                  }`}>
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                      <div className="w-full lg:w-3/5 rounded-2xl overflow-hidden border border-amber-900/30 shadow-lg group">
                        <img
                          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                          src="https://res.cloudinary.com/dlhgbo0ji/image/upload/v1765175946/Screenshot_2025-12-08_113625_l1ujln.png"
                          alt="Industry Ready Certification"
                        />
                      </div>
                      <div className="w-full lg:w-2/5 flex flex-col items-start">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold text-amber-500 bg-amber-500/10 border border-amber-500/25 mb-4">
                          <CheckCircle2 size={14} /> Full Stack Certified
                        </div>
                        <h2 className={`text-2xl sm:text-3xl font-extrabold font-display tracking-tight mb-3 ${
                          isDark ? "text-[#fffaf5]" : "text-[#241209]"
                        }`}>
                          IRC CERTIFICATE
                        </h2>
                        <p className={`text-sm sm:text-base leading-relaxed mb-6 ${
                          isDark ? "text-[#cfb9a7]" : "text-[#5c3722]"
                        }`}>
                          Comprehensive Industry Ready Certification from NxtWave Disruptive Technologies validating hands-on mastery in building scalable web apps with React, Node.js, Express, and databases.
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* ── All Verified Modules ── */}
                <ScrollReveal direction="up" delay={60} className="mb-8">
                  <h2 className={`text-2xl font-bold font-display tracking-tight flex items-center gap-2 ${
                    isDark ? "text-[#fffaf5]" : "text-[#241209]"
                  }`}>
                    All Verified Modules &amp; Foundations
                  </h2>
                </ScrollReveal>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0">
                  {certificateList.map((eachCertificate, i) => (
                    <ScrollReveal key={eachCertificate.id} direction="up" delay={i * 60}>
                      <CertificateItem certificateItem={eachCertificate} />
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

export default MoreCertificates;
