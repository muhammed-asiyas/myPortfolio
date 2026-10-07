import React from "react";
import Header from "../Header";
import EducationItem from "./EducationItem";
import ThemeContext from "../../context/ThemeContext";
import { GraduationCap } from "lucide-react";

const educationDetails = [
  {
    id: 1,
    name: "NxtWave Disruptive Technologies",
    progress: "Industry Ready Certification In Full Stack Development",
    year: "Aug 2024 - Ongoing",
    picture: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761206137/id1dsWltOX_1761205816368_j67w8g.jpg"
  },
  {
    id: 2,
    name: "Central University of Kerala",
    progress: "BCOM - Co-operation (4.87 CGPA)",
    year: "2019 - 2022",
    picture: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761207404/university-of-calicut-smapse4_j7lkd9.jpg"
  },
  {
    id: 3,
    name: "PTMYHSS Edappalam, Palakkad",
    progress: "Higher Secondary Examination Certificate (79%)",
    year: "2017 - 2019",
    picture: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761231911/OIP_tsozvo.webp"
  },
  {
    id: 4,
    name: "PTMYHSS Edappalam, Palakkad",
    progress: "Secondary School Leaving Certificate (87%)",
    year: "2016 - 2017",
    picture: "https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761231911/OIP_tsozvo.webp"
  },
];

const Education = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDark } = value;

        return (
          <div className="w-full flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow py-12 sm:py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3 border bg-indigo-500/10 border-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                    <GraduationCap size={15} />
                    <span>Academic & Professional Journey</span>
                  </div>
                  <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
                    EDUCATION DETAILS
                  </h1>
                  <p
                    className={`mt-3 text-sm sm:text-base ${
                      isDark ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    Academic background, degree specializations, and professional engineering programs.
                  </p>
                </div>

                {/* Education List */}
                <ul className="space-y-6 list-none p-0 m-0 max-w-4xl mx-auto">
                  {educationDetails.map((eachEducation) => (
                    <EducationItem
                      key={eachEducation.id}
                      educationItem={eachEducation}
                    />
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

export default Education;
