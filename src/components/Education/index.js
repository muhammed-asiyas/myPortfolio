import React from "react";
import Header from "../Header";
import EducationItem from "./EducationItem";
import ThemeContext from "../../context/ThemeContext";
import { ScrollReveal, ParallaxBand } from "../common/Animations";
import { GraduationCap, BookOpen } from "lucide-react";

const educationDetails = [
  {
    id: 1,
    name: "Novox Edtech LLP",
    progress: "Novox Core Full Stack Development",
    year: "Apr 2026 – Ongoing",
    picture: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1794290649/d5b5a6236912479.Y3JvcCwzMTcxLDI0ODEsMTY0LDA_ujizbq.png",
    status: "ACTIVE",
    type: "Professional",
  },
  {
    id: 2,
    name: "NxtWave Disruptive Technologies",
    progress: "Industry Ready Certification in Full Stack Development",
    year: "Aug 2024 – Mar 2025",
    picture: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761206137/id1dsWltOX_1761205816368_j67w8g.jpg",
    status: "GRADUATED",
    type: "Professional",
  },
  {
    id: 3,
    name: "Central University of Kerala",
    progress: "BCOM — Co-operation · 4.87 CGPA",
    year: "2019 – 2022",
    picture: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761207404/university-of-calicut-smapse4_j7lkd9.jpg",
    status: "GRADUATED",
    type: "Degree",
  },
  {
    id: 4,
    name: "PTMYHSS Edappalam, Palakkad",
    progress: "Higher Secondary Examination Certificate · 79%",
    year: "2017 – 2019",
    picture: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761231911/OIP_tsozvo.webp",
    status: "COMPLETE",
    type: "Higher Secondary",
  },
  {
    id: 5,
    name: "PTMYHSS Edappalam, Palakkad",
    progress: "Secondary School Leaving Certificate · 87%",
    year: "2016 – 2017",
    picture: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761231911/OIP_tsozvo.webp",
    status: "COMPLETE",
    type: "Secondary",
  },
];

const Education = () => (
  <ThemeContext.Consumer>
    {({ isDark: gd }) => (
      <div className="w-full flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow py-16 sm:py-24 relative overflow-hidden">
          {/* Ambient Kopiko glow wells */}
          <ParallaxBand speed={0.08} className="absolute top-[-5%] right-[-5%] pointer-events-none opacity-60">
            <div className="w-[550px] h-[550px] bg-amber-600/10 rounded-full blur-[130px]" />
          </ParallaxBand>
          <ParallaxBand speed={0.05} className="absolute bottom-[10%] left-[-5%] pointer-events-none opacity-40">
            <div className="w-[400px] h-[400px] bg-orange-700/10 rounded-full blur-[110px]" />
          </ParallaxBand>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* ── Asymmetric Section Header ── */}
            <ScrollReveal direction="up" className="mb-20">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                <div>
                  <div className="text-[11px] font-mono font-black uppercase tracking-[0.2em] text-amber-500 flex items-center gap-1.5 mb-3">
                    <GraduationCap size={14} /> [ ACADEMIC RECORD ]
                  </div>
                  <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight leading-[1.08]">
                    EDUCATION<br />
                    <span className="text-gradient-kopiko">TIMELINE</span>
                  </h1>
                </div>
                <p className={`max-w-xs text-sm leading-relaxed ${gd ? "text-[#b09683]" : "text-[#6c432b]"}`}>
                  Academic qualifications, professional certifications, and the learning journey that shaped my engineering foundation.
                </p>
              </div>
            </ScrollReveal>

            {/* ── Vertical Liquid-Stream Timeline ── */}
            <div className="relative">
              {/* Central liquid stream line */}
              <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-[2px] liquid-stream-line hidden sm:block" aria-hidden="true" />

              <ul className="space-y-10 list-none p-0 m-0">
                {educationDetails.map((edu, i) => (
                  <EducationItem key={edu.id} educationItem={edu} index={i} />
                ))}
              </ul>
            </div>

            {/* ── Summary Strip ── */}
            <ScrollReveal direction="up" delay={200} className="mt-20">
              <div className={`p-6 sm:p-8 rounded-[28px] border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 ${gd ? "bg-[#180e0a]/80 border-amber-900/40 shadow-xl" : "bg-white/95 border-amber-900/15 shadow-xl shadow-amber-900/5"}`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/15 flex items-center justify-center text-amber-500 border border-amber-500/25">
                    <BookOpen size={22} />
                  </div>
                  <div>
                    <p className={`text-base font-bold ${gd ? "text-white" : "text-[#241209]"}`}>Continuous Learner</p>
                    <p className={`text-xs ${gd ? "text-amber-400/80" : "text-amber-700"}`}>5 institutions · 9 years of formal education</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {["4.87 CGPA", "87% — Secondary", "79% — Higher Sec", "Full Stack Certified"].map((badge, bi) => (
                    <span key={bi} className="text-[10px] font-mono font-black uppercase tracking-wider px-3 py-1.5 rounded-full bg-amber-500/12 text-amber-500 border border-amber-500/25">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </main>

        <footer className={`py-8 border-t text-center text-xs ${gd ? "bg-[#0b0402] border-amber-900/25 text-[#917561]" : "bg-[#f4ebe0] border-amber-900/10 text-[#6d4e38]"}`}>
          <p>© {new Date().getFullYear()} Muhammed Asiyas — All rights reserved.</p>
        </footer>
      </div>
    )}
  </ThemeContext.Consumer>
);

export default Education;
