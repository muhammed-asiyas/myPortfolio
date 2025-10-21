import { Link } from "react-router-dom";
import "./index.css";
import FeaturesList from "./FeaturesList";
import ThemeContext from "../../../context/ThemeContext";

const ProjectList = (props) => {
  const { projectList } = props;
  const { title, description, projectLink } = projectList;
  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDark } = value;
        const ProjectListBackground = isDark ? 'dark-project-list-item' : 'color-project-list-item'
        const ProjectNameColor = isDark ? 'dark-project-name' : 'color-project-name'
        const DescriptionColor = isDark ? 'dark-description' : 'color-description'
        const VisitButtonTheme = isDark ? 'dark-visit-project-button' : 'color-visit-project-button'
        return (
          <li className={`project-list-item ${ProjectListBackground}`}>
            <h1 className={`project-name ${ProjectNameColor}`}>{title}</h1>
            <p className={`${DescriptionColor}`}>{description}</p>
            <ul>
              {projectList.features.map((eachItem) => (
                <FeaturesList key={eachItem.id} featuresItem={eachItem} />
              ))}
            </ul>
            <a href={projectLink}>
              <button type="button" className={`a-tag-button ${VisitButtonTheme}`}>
                Visit Project
              </button>
            </a>
          </li>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default ProjectList;
