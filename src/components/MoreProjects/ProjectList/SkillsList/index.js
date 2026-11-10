import React from "react";
import ThemeContext from "../../../../context/ThemeContext";

const SkillsList = (props) => {
  const { skillItem } = props;
  const { skill } = skillItem;

  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDark } = value;

        return (
          <li
            className={`px-3 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider border transition-colors ${
              isDark
                ? "bg-amber-500/10 text-amber-300 border-amber-500/25 hover:border-amber-400/50"
                : "bg-amber-50 text-amber-900 border-amber-200 hover:border-amber-400"
            }`}
          >
            {skill}
          </li>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default SkillsList;
