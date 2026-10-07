import React from "react";
import SkillsList from "./SkillsList";
import FeatureList from "./FeatureList";
import ThemeContext from "../../../context/ThemeContext";
import { ExternalLink, Layers, Sparkles } from "lucide-react";

const ProjectList = (props) => {
  const { projectList } = props;
  const { title, description, projectLink, features, skills, gitHub } = projectList;

  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDark } = value;

        return (
          <li
            className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-2xl ${
              isDark
                ? "bg-slate-900/70 border-slate-800/90 hover:border-indigo-500/40 hover:shadow-indigo-500/10"
                : "bg-white border-slate-200/90 hover:border-indigo-300 hover:shadow-xl hover:shadow-slate-200/60"
            }`}
          >
            {/* Title & Description */}
            <div className="mb-6">
              <h2
                className={`text-2xl sm:text-3xl font-extrabold tracking-tight mb-3 transition-colors ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {title}
              </h2>
              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {description}
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={16} className="text-indigo-500" />
                <h3
                  className={`text-sm font-bold uppercase tracking-wider ${
                    isDark ? "text-slate-200" : "text-slate-800"
                  }`}
                >
                  Key Architectural Features
                </h3>
              </div>
              <ul className="space-y-2.5 list-none p-0 m-0">
                {features.map((eachItem) => (
                  <FeatureList key={eachItem.id} featuresItem={eachItem} />
                ))}
              </ul>
            </div>

            {/* Technologies Used */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Layers size={16} className="text-purple-500" />
                <h3
                  className={`text-sm font-bold uppercase tracking-wider ${
                    isDark ? "text-slate-200" : "text-slate-800"
                  }`}
                >
                  Technologies Used
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                {skills.map((eachSkill) => (
                  <SkillsList key={eachSkill.id} skillItem={eachSkill} />
                ))}
              </ul>
            </div>

            {/* Buttons / Actions */}
            <div className="mt-auto pt-6 border-t border-slate-200/60 dark:border-slate-800 flex flex-wrap items-center gap-4">
              {projectLink && (
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-500/20 transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <ExternalLink size={16} />
                  Live Preview
                </a>
              )}

              {gitHub && (
                <a
                  href={gitHub}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border transition-all duration-200 hover:scale-105 active:scale-95 ${
                    isDark
                      ? "bg-slate-800/80 hover:bg-slate-700/80 border-slate-700 text-white"
                      : "bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800"
                  }`}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  Source Code
                </a>
              )}
            </div>
          </li>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default ProjectList;
