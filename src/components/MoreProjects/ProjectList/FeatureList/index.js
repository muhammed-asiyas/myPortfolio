import React from "react";
import ThemeContext from "../../../../context/ThemeContext";
import { CheckCircle2 } from "lucide-react";

const FeatureList = (props) => {
  const { featuresItem } = props;
  const { feature } = featuresItem;

  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDark } = value;

        return (
          <li className="flex items-start gap-3 text-sm leading-relaxed">
            <CheckCircle2
              size={18}
              className="text-emerald-500 mt-0.5 flex-shrink-0"
            />
            <span className={isDark ? "text-slate-300" : "text-slate-700"}>
              {feature}
            </span>
          </li>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default FeatureList;
