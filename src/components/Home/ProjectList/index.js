import React from "react";
import ThemeContext from "../../../context/ThemeContext";
import { ExternalLink } from "lucide-react";

const ProjectList = (props) => {
  const { projectList } = props;
  const { title, projectImage, description, projectLink } = projectList;

  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDark } = value;

        return (
          <div
            className={`group rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col hover:-translate-y-1.5 ${
              isDark
                ? "bg-slate-900/60 border-slate-800 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10"
                : "bg-white border-slate-200/80 hover:border-indigo-300 hover:shadow-xl hover:shadow-slate-200/60"
            }`}
          >
            {/* Image Preview */}
            <div className="relative overflow-hidden aspect-video bg-slate-800/20 border-b border-slate-100 dark:border-slate-800">
              <img
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                src={projectImage}
                alt={title}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                >
                  Open Preview <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h3
                className={`text-xl font-bold tracking-tight mb-2 group-hover:text-indigo-400 transition-colors ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {title}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-6 flex-grow ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {description}
              </p>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-500/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Visit Project <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default ProjectList;
