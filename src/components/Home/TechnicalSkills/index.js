import "./index.css";
import ThemeContext from "../../../context/ThemeContext";

const TechnicalSkills = (props) => {
  const { skillsItem } = props;
  const { id, icon, name } = skillsItem;
  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDark } = value;
        const SkillBackground = isDark ? 'dark-skill-item-container' : 'color-skill-item-container'
        const SkillItemColor = isDark ? 'dark-skill-item-name' : 'color-skill-item-name'
        return (
          <li className={`skill-item-container ${SkillBackground}`}>
            <img className="skill-icon" src={icon} />
            <p className={`skill-item-name ${SkillItemColor}`}>{name}</p>
          </li>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default TechnicalSkills;
