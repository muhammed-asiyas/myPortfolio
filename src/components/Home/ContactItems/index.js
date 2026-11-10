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
            className={`group relative flex flex-col items-center text-center p-6 rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden ${
              isDark
                ? "bg-[#180e0a]/80 border-amber-900/30 hover:border-amber-500/50 hover:bg-[#23130d] hover:shadow-amber-950/50"
                : "bg-white/95 border-amber-900/10 hover:border-amber-500/40 hover:bg-white hover:shadow-amber-900/10"
            }`}
          >
            {/* Water droplet shine accent */}
            <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-amber-400/30 group-hover:bg-amber-400/80 transition-all pointer-events-none" />

            <div className="w-16 h-16 rounded-2xl flex items-center justify-center p-3.5 mb-4 bg-gradient-to-br from-amber-600/15 via-orange-600/15 to-transparent border border-amber-500/20 group-hover:scale-110 group-hover:border-amber-500/40 transition-all duration-300 shadow-inner">
              <img className="w-full h-full object-contain filter drop-shadow" src={logo} alt={title} />
            </div>

            <h4
              className={`text-base font-bold tracking-tight mb-1.5 ${
                isDark ? "text-[#fffaf5]" : "text-[#241209]"
              }`}
            >
              {title}
            </h4>

            <p
              className={`text-sm break-all font-medium transition-colors ${
                isDark
                  ? "text-[#cfb9a7] group-hover:text-amber-400"
                  : "text-[#5c3722] group-hover:text-amber-700"
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
