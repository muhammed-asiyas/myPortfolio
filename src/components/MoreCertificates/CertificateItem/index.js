import React from "react";
import ThemeContext from "../../../context/ThemeContext";
import { Award, ExternalLink } from "lucide-react";

const CertificateItem = (props) => {
  const { certificateItem } = props;
  const { name, issueDate, link } = certificateItem;

  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDark } = value;

        return (
          <li
            className={`group p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg ${
              isDark
                ? "bg-slate-900/60 border-slate-800/80 hover:border-indigo-500/40 hover:bg-slate-800/70 hover:shadow-indigo-500/5"
                : "bg-white border-slate-200/80 hover:border-indigo-300 hover:shadow-slate-200/60"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                  <Award size={20} />
                </div>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
                    isDark
                      ? "bg-slate-800 text-slate-400"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {issueDate}
                </span>
              </div>

              <h3
                className={`text-base font-bold tracking-tight mb-4 group-hover:text-indigo-400 transition-colors ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {name}
              </h3>
            </div>

            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all duration-200 border text-indigo-500 border-indigo-500/30 hover:bg-indigo-600 hover:text-white hover:border-transparent active:scale-95"
            >
              Verify Certificate <ExternalLink size={14} />
            </a>
          </li>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default CertificateItem;
