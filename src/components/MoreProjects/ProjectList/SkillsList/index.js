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
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider border transition-colors ${
              isDark
                ? "bg-indigo-500/10 text-indigo-300 border-indigo-500/20"
                : "bg-indigo-50 text-indigo-700 border-indigo-200"
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
