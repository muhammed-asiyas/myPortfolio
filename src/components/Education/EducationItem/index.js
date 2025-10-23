import ThemeContext from "../../../context/ThemeContext";
import './index.css'


const EducationItem = (props) => {
  const { educationItem } = props;
  const { name, progress, year, picture } = educationItem;
  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDark } = value;
        const EducationItemContainer = isDark ? 'dark-education-item-details-container' : 'color-education-item-details-container'
        const EducationName = isDark ? 'dark-education-name' : 'color-education-name'
        const ProgressName = isDark ? 'dark-progress' : 'color-progress'
        const YearStyle = isDark ? 'dark-year' : 'color-year'
        return (
          <li className={`education-item-details-container ${EducationItemContainer}`}>
            <div className="education-first-section-container">
              <h1 className={`eduaction-name ${EducationName}`}>{name}</h1>
              <p className={`progress ${ProgressName}`}>{progress}</p>
              <p className={`year ${YearStyle}`}>{year}</p>
            </div>
            <div>
              <img className="education-picture" src={picture} />
            </div>
          </li>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default EducationItem;
