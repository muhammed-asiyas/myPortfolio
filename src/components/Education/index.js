import "./index.css";
import Header from "../Header";
import EducationItem from "./EducationItem";
import ThemeContext from "../../context/ThemeContext";

const educationDetails = [
  {
    id: 1,
    name: "Nxtwave Disruptive Technologies",
    progress: "Industry Ready Certification In Full Stack Development",
    year: "Aug 2024 - Ongoing",
    picture: 'https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761206137/id1dsWltOX_1761205816368_j67w8g.jpg'
  },
  {
    id: 2,
    name: "Central University of Kerala",
    progress: "BCOM - Co-operation (4.87 CGPA)",
    year: "2019 - 2022",
    picture: 'https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761207404/university-of-calicut-smapse4_j7lkd9.jpg'
  },
  {
    id: 3,
    name: "PTMYHSS Edappalam, Palakkad",
    progress: "Higher Secondary Examination Certificate (79%)",
    year: "2017 - 2019",
    picture: 'https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761231911/OIP_tsozvo.webp'
  },
  {
    id: 4,
    name: "PTMYHSS Edappalam, Palakkad",
    progress: "Secondary School Leaving Certificate (87%)",
    year: "2016 - 2017",
    picture: 'https://res.cloudinary.com/dlhgbo0ji/image/upload/v1761231911/OIP_tsozvo.webp'
  },
];

const Education = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDark } = value;
        const EducationContainerBackground = isDark
          ? "dark-project-container"
          : "color-project-container";
        const HeadColor = isDark ? "head-itemm" : "color-head-itemm";
        const EducationDetailsContainer = isDark
          ? "dark-education-details-container"
          : "color-education-details-container";
        return (
          <>
            <Header />
            <div
              className={`education-container ${EducationContainerBackground}`}
            >
              <h1 className={`${HeadColor}`}>EDUCATION DETAILS</h1>
              <ul
                className={`education-details-container ${EducationDetailsContainer}`}
              >
                {educationDetails.map(eachEducation => (
                  <EducationItem key={eachEducation.id} educationItem={eachEducation} />
                ))}
              </ul>
            </div>
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Education;
