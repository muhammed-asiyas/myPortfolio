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
            className={`group relative flex flex-col items-center justify-center p-5 rounded-3xl transition-all duration-300 transform hover:-translate-y-2 cursor-default overflow-hidden ${
              isDark
                ? "bg-[#180e0a]/80 hover:bg-[#23130d] border border-amber-900/30 hover:border-amber-500/50 hover:shadow-xl hover:shadow-amber-950/40"
                : "bg-white/90 hover:bg-white border border-amber-900/10 hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-900/10"
            }`}
          >
            {/* Water droplet specular highlight corner */}
            <div className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-amber-400/30 group-hover:bg-amber-400/70 transition-colors pointer-events-none" />

            <div className="w-14 h-14 flex items-center justify-center rounded-2xl p-2.5 bg-amber-500/5 group-hover:bg-amber-500/10 transition-all duration-300 group-hover:scale-110">
              <img
                className="w-full h-full object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:rotate-3"
                src={icon}
                alt={name}
                loading="lazy"
              />
            </div>

            <p
              className={`mt-3.5 text-sm font-bold tracking-tight transition-colors duration-200 ${
                isDark
                  ? "text-[#e8d5c4] group-hover:text-amber-400"
                  : "text-[#3f2012] group-hover:text-amber-700"
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
