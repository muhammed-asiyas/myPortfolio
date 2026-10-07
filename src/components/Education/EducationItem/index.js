import React from "react";
import ThemeContext from "../../../context/ThemeContext";
import { Calendar, GraduationCap } from "lucide-react";

const EducationItem = (props) => {
  const { educationItem } = props;
  const { name, progress, year, picture } = educationItem;

  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDark } = value;

        return (
          <li
            className={`group p-6 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-6 hover:-translate-y-1 hover:shadow-2xl ${
              isDark
                ? "bg-slate-900/60 border-slate-800 hover:border-indigo-500/40 hover:shadow-indigo-500/10"
                : "bg-white border-slate-200/90 hover:border-indigo-300 hover:shadow-slate-200/70"
            }`}
          >
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 border text-indigo-500 bg-indigo-500/10 border-indigo-500/20">
                <Calendar size={13} />
                <span>{year}</span>
              </div>

              <h3
                className={`text-xl sm:text-2xl font-bold tracking-tight mb-2 group-hover:text-indigo-400 transition-colors ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {name}
              </h3>

              <p
                className={`text-sm sm:text-base font-medium leading-relaxed flex items-center gap-2 ${
                  isDark ? "text-slate-300" : "text-slate-700"
                }`}
              >
                <GraduationCap size={18} className="text-purple-500 flex-shrink-0" />
                {progress}
              </p>
            </div>

            <div className="w-full md:w-48 h-32 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 flex-shrink-0 shadow-sm bg-slate-800/10">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={picture}
                alt={name}
                loading="lazy"
              />
            </div>
          </li>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default EducationItem;
