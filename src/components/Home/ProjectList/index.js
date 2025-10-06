import "./index.css";
import FeaturesList from "./FeaturesList";

const ProjectList = (props) => {
  const { projectList } = props;
  const { title, description, projectLink } = projectList;
  return (
    <li className="project-list-item">
      <h1 className="project-name">{title}</h1>
      <p>{description}</p>
      <ul>
        {projectList.features.map((eachItem) => (
          <FeaturesList key={eachItem.id} featuresItem={eachItem} />
        ))}
      </ul>
      <a className="a-tag-button" href={projectLink}>
        <button type="button" className="visit-project-button">Visit Project</button>
      </a>
    </li>
  );
};

export default ProjectList;
