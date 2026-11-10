import React from "react";
import ThemeContext from "../../../context/ThemeContext";
import { Award, ExternalLink, Droplets } from "lucide-react";

const Certificates = (props) => {
  const { certificateItem } = props;
  const { name, issueDate, link } = certificateItem;

  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDark } = value;

        return (
          <li
            className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 sm:p-6 rounded-3xl border transition-all duration-300 gap-4 hover:-translate-y-1.5 ${
              isDark
                ? "bg-[#180e0a]/80 border-amber-900/30 hover:border-amber-500/50 hover:bg-[#22120b] hover:shadow-xl hover:shadow-amber-950/40"
                : "bg-white/95 border-amber-900/10 hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-900/10"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-amber-600/15 to-orange-600/15 text-amber-500 border border-amber-500/30 flex-shrink-0 shadow-sm">
                <Award size={24} className="stroke-[2.2]" />
              </div>
              <div>
                <h3
                  className={`text-base font-bold tracking-tight ${
                    isDark ? "text-[#fffaf5]" : "text-[#241209]"
                  }`}
                >
                  {name}
                </h3>
                <span
                  className={`text-xs inline-flex items-center gap-1.5 mt-1 font-medium ${
                    isDark ? "text-amber-400/80" : "text-amber-700/80"
                  }`}
                >
                  <Droplets size={12} className="text-amber-500" />
                  Issued: {issueDate}
                </span>
              </div>
            </div>

            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="water-sheen-btn inline-flex items-center gap-1.5 px-5 py-2.5 rounded-2xl text-xs font-bold border transition-all duration-200 hover:scale-105 active:scale-95 text-amber-500 border-amber-500/40 hover:bg-gradient-to-r hover:from-amber-600 hover:to-orange-600 hover:text-white hover:border-transparent hover:shadow-md hover:shadow-amber-900/30"
            >
              Verify Credential <ExternalLink size={13} />
            </a>
          </li>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Certificates;
