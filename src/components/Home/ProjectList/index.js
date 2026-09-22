import "./index.css";

import ThemeContext from "../../../context/ThemeContext";

const ProjectList = (props) => {
  const { projectList } = props;
  const { title, projectImage, description, projectLink } = projectList;
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
            <img className="project-image" src={projectImage} alt={title} />
            <p className={`${DescriptionColor}`}>{description}</p>
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
