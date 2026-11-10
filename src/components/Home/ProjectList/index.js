import React from "react";
import ThemeContext from "../../../context/ThemeContext";
import { ExternalLink, Sparkles } from "lucide-react";

const ProjectList = (props) => {
  const { projectList } = props;
  const { title, projectImage, description, projectLink } = projectList;

  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDark } = value;

        return (
          <div
            className={`group rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col hover:-translate-y-2 ${
              isDark
                ? "bg-[#180e0a]/80 border-amber-900/30 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-950/50"
                : "bg-white/95 border-amber-900/10 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-900/10"
            }`}
          >
            {/* Image Preview with Water Drop Overlay */}
            <div className="relative overflow-hidden aspect-video bg-[#20110a] border-b border-amber-900/20">
              <img
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                src={projectImage}
                alt={title}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noreferrer"
                  className="water-sheen-btn inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg shadow-amber-900/40"
                >
                  <Sparkles size={14} /> Open Live Preview <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-7 flex flex-col flex-grow">
              <h3
                className={`text-xl font-bold tracking-tight mb-2.5 group-hover:text-amber-500 transition-colors ${
                  isDark ? "text-[#fffaf5]" : "text-[#241209]"
                }`}
              >
                {title}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-6 flex-grow ${
                  isDark ? "text-[#cfb9a7]" : "text-[#5c3722]"
                }`}
              >
                {description}
              </p>

              <div className="pt-4 border-t border-amber-900/15 dark:border-amber-900/30 flex items-center justify-between">
                <a
                  href={projectLink}
                  target="_blank"
                  rel="noreferrer"
                  className="water-sheen-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-500 hover:to-orange-500 shadow-md shadow-amber-900/30 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Visit Project <ExternalLink size={15} />
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
