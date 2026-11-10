import React from "react";
import ThemeContext from "../../../context/ThemeContext";
import { Award, ExternalLink, Droplets } from "lucide-react";

const CertificateItem = (props) => {
  const { certificateItem } = props;
  const { name, issueDate, link } = certificateItem;

  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDark } = value;

        return (
          <li
            className={`group p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-xl ${
              isDark
                ? "bg-[#180e0a]/80 border-amber-900/35 hover:border-amber-500/50 hover:bg-[#22120b] hover:shadow-amber-950/40"
                : "bg-white/95 border-amber-900/10 hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-900/10"
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-2xl flex items-center justify-center bg-gradient-to-br from-amber-600/15 to-orange-600/15 text-amber-500 border border-amber-500/30 shadow-sm">
                  <Award size={21} className="stroke-[2.2]" />
                </div>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 ${
                    isDark
                      ? "bg-amber-950/60 text-amber-300/90 border border-amber-900/40"
                      : "bg-amber-50 text-amber-800 border border-amber-200"
                  }`}
                >
                  <Droplets size={11} className="text-amber-500" />
                  {issueDate}
                </span>
              </div>

              <h3
                className={`text-base font-bold tracking-tight mb-5 group-hover:text-amber-500 transition-colors ${
                  isDark ? "text-[#fffaf5]" : "text-[#241209]"
                }`}
              >
                {name}
              </h3>
            </div>

            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="water-sheen-btn inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-2xl text-xs font-bold transition-all duration-200 border text-amber-500 border-amber-500/40 hover:bg-gradient-to-r hover:from-amber-600 hover:to-orange-600 hover:text-white hover:border-transparent active:scale-95 shadow-sm"
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
