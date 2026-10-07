import React from "react";
import ThemeContext from "../../../context/ThemeContext";

const TechnicalSkills = (props) => {
  const { skillsItem } = props;
  const { icon, name } = skillsItem;

  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDark } = value;
        return (
          <li
            className={`group relative flex flex-col items-center justify-center p-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl cursor-default ${
              isDark
                ? "bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/80 hover:border-indigo-500/40 hover:shadow-indigo-500/10"
                : "bg-white/80 hover:bg-white border border-slate-200/80 hover:border-indigo-300 hover:shadow-slate-200/50"
            }`}
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-xl p-2.5 transition-transform duration-300 group-hover:scale-110">
              <img
                className="w-full h-full object-contain filter drop-shadow-sm"
                src={icon}
                alt={name}
                loading="lazy"
              />
            </div>
            <p
              className={`mt-3 text-sm font-semibold tracking-wide transition-colors duration-200 ${
                isDark
                  ? "text-slate-200 group-hover:text-indigo-400"
                  : "text-slate-700 group-hover:text-indigo-600"
              }`}
            >
              {name}
            </p>
          </li>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default TechnicalSkills;
