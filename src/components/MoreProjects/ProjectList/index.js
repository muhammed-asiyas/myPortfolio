import SkillsList from "./SkillsList";
import FeatureList from "./FeatureList";
import ThemeContext from "../../../context/ThemeContext";
import "./index.css";

const ProjectList = (props) => {
  const { projectList } = props;
  const { title, description, projectLink, features, skills, gitHub } = projectList;
  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDark } = value;
        const ProjectListBackground = isDark
          ? "dark-project-list-item"
          : "color-project-list-item";
        const ProjectNameColor = isDark
          ? "dark-project-name"
          : "color-project-name";
        const DescriptionColor = isDark
          ? "dark-description"
          : "color-description";
        const VisitButtonTheme = isDark
          ? "dark-visit-button"
          : "color-visit-button";
        const FeatureStyle = isDark
          ? "dark-features-head"
          : "color-features-head";
        return (
          <li className={`project-list-item ${ProjectListBackground}`}>
            <h1 className={`project-name ${ProjectNameColor}`}>{title}</h1>
            <p className={`${DescriptionColor}`}>{description}</p>
            <h1 className={`features-head ${FeatureStyle}`}>Features</h1>
            <ul>
              {features.map((eachItem) => (
                <FeatureList key={eachItem.id} featuresItem={eachItem} />
              ))}
            </ul>
            <h1 className={`features-head ${FeatureStyle}`}>
              Technologies Used:{" "}
            </h1>
            <ul className="skills-item-container">
              {skills.map((eachSkill) => (
                <SkillsList key={eachSkill.id} skillItem={eachSkill} />
              ))}
            </ul>
            <ul className="button-container">
              <a href={projectLink}>
                <button type="button" className={`a-teg-button ${VisitButtonTheme}`}>
                  Visit Project
                </button>
              </a>
              <a href={gitHub}>
                <button type="button" className={`a-teg-button ${VisitButtonTheme}`}>
                  View On GitHub
                </button>
              </a>
            </ul>
          </li>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default ProjectList;
