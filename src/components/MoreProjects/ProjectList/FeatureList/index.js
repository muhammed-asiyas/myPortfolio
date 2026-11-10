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
              size={17}
              className="text-amber-500 mt-1 flex-shrink-0"
            />
            <span className={isDark ? "text-[#cfb9a7]" : "text-[#5c3722]"}>
              {feature}
            </span>
          </li>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default FeatureList;
