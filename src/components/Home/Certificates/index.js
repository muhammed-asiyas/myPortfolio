import React from "react";
import ThemeContext from "../../../context/ThemeContext";
import { Award, ExternalLink } from "lucide-react";

const Certificates = (props) => {
  const { certificateItem } = props;
  const { name, issueDate, link } = certificateItem;

  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDark } = value;

        return (
          <li
            className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-5 rounded-2xl border transition-all duration-300 gap-4 hover:-translate-y-1 ${
              isDark
                ? "bg-slate-900/60 border-slate-800 hover:border-indigo-500/40 hover:bg-slate-850"
                : "bg-white border-slate-200/80 hover:border-indigo-300 hover:shadow-md"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                <Award size={24} />
              </div>
              <div>
                <h3
                  className={`text-base font-bold tracking-tight ${
                    isDark ? "text-white" : "text-slate-900"
                  }`}
                >
                  {name}
                </h3>
                <span
                  className={`text-xs inline-block mt-0.5 font-medium ${
                    isDark ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Issued: {issueDate}
                </span>
              </div>
            </div>

            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 hover:scale-105 active:scale-95 text-indigo-500 border-indigo-500/30 hover:bg-indigo-500 hover:text-white"
            >
              Verify <ExternalLink size={13} />
            </a>
          </li>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Certificates;
