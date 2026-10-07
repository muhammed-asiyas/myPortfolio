import React from "react";
import ThemeContext from "../../../context/ThemeContext";

const ContactItems = (props) => {
  const { contactItem } = props;
  const { logo, title, displayText, link } = contactItem;

  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDark } = value;

        return (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={`group flex flex-col items-center text-center p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
              isDark
                ? "bg-slate-900/60 border-slate-800 hover:border-indigo-500/40 hover:shadow-indigo-500/10 hover:bg-slate-800/80"
                : "bg-white/80 border-slate-200/80 hover:border-indigo-300 hover:shadow-slate-200/50 hover:bg-white"
            }`}
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center p-3 mb-4 bg-indigo-500/10 group-hover:scale-110 transition-transform duration-300">
              <img className="w-full h-full object-contain filter drop-shadow" src={logo} alt={title} />
            </div>
            <h4
              className={`text-base font-bold tracking-tight mb-1 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {title}
            </h4>
            <p
              className={`text-sm break-all font-medium transition-colors ${
                isDark
                  ? "text-slate-400 group-hover:text-indigo-400"
                  : "text-slate-600 group-hover:text-indigo-600"
              }`}
            >
              {displayText}
            </p>
          </a>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default ContactItems;
