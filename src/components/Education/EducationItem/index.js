import React from "react";
import ThemeContext from "../../../context/ThemeContext";
import { Calendar, GraduationCap } from "lucide-react";
import TiltCard from "../../common/TiltCard";
import { ScrollReveal } from "../../common/Animations";

const statusColors = {
  ACTIVE:    { dot: "bg-emerald-400", badge: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30" },
  GRADUATED: { dot: "bg-amber-400",   badge: "text-amber-400 bg-amber-400/10 border-amber-400/30"   },
  COMPLETE:  { dot: "bg-orange-400",  badge: "text-orange-400 bg-orange-400/10 border-orange-400/30" },
};

const EducationItem = ({ educationItem, index = 0 }) => {
  const { name, progress, year, picture, status = "COMPLETE", type = "" } = educationItem;
  const sc = statusColors[status] || statusColors.COMPLETE;

  return (
    <ThemeContext.Consumer>
      {({ isDark }) => (
        <ScrollReveal
          direction={index % 2 === 0 ? "left" : "right"}
          delay={index * 120}
          distance={50}
        >
          <li className="relative pl-0 sm:pl-20 list-none">
            {/* Timeline node dot (only visible sm+) */}
            <div className="hidden sm:flex absolute left-4 top-8 w-8 h-8 rounded-full items-center justify-center z-10
              bg-amber-500/20 border-2 border-amber-500/60 shadow-lg shadow-amber-900/30">
              <span className={`w-2.5 h-2.5 rounded-full ${sc.dot} animate-pulse`} />
            </div>

            <TiltCard maxTilt={6} scale={1.01} glare={false}>
              <div className={`group p-6 sm:p-8 rounded-3xl border transition-all duration-300
                flex flex-col md:flex-row items-start md:items-center justify-between gap-6
                hover:shadow-2xl ${
                  isDark
                    ? "bg-[#180e0a]/85 border-amber-900/30 hover:border-amber-500/50 hover:shadow-amber-950/50"
                    : "bg-white/95 border-amber-900/10 hover:border-amber-500/40 hover:shadow-amber-900/15"
                }`}
              >
                {/* Left: text */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border text-amber-500 bg-amber-500/10 border-amber-500/25">
                      <Calendar size={12} />
                      <span>{year}</span>
                    </div>
                    {type && (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold border text-orange-400 bg-orange-400/10 border-orange-400/25">
                        {type}
                      </div>
                    )}
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase border ${sc.badge}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${sc.dot}`} />
                      {status}
                    </div>
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-bold tracking-tight mb-2.5 group-hover:text-amber-500 transition-colors duration-300 ${
                    isDark ? "text-[#fffaf5]" : "text-[#241209]"
                  }`}>
                    {name}
                  </h3>

                  <p className={`text-sm sm:text-base font-medium leading-relaxed flex items-start gap-2.5 ${
                    isDark ? "text-[#cfb9a7]" : "text-[#5c3722]"
                  }`}>
                    <GraduationCap size={19} className="text-amber-500 flex-shrink-0 mt-0.5" />
                    {progress}
                  </p>
                </div>

                {/* Right: image */}
                <div className="w-full md:w-48 h-32 rounded-2xl overflow-hidden border border-amber-900/20 flex-shrink-0 shadow-md bg-black/10">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    src={picture}
                    alt={name}
                    loading="lazy"
                  />
                </div>
              </div>
            </TiltCard>
          </li>
        </ScrollReveal>
      )}
    </ThemeContext.Consumer>
  );
};

export default EducationItem;
