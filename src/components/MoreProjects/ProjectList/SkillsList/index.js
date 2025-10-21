import "./index.css";
import ThemeContext from "../../../../context/ThemeContext";

const SkillsList = (props) => {
  const { skillItem } = props;
  const { skill } = skillItem;
  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDark } = value;
        const SkillItemStyle = isDark ? 'dark-skill-item' : 'color-skill-item'
        return <li className={`skill-item ${SkillItemStyle}`}>{skill}</li>;
      }}
    </ThemeContext.Consumer>
  );
};

export default SkillsList;
