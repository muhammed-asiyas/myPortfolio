import "./index.css";
import Header from "../Header";
import CertificateItem from "./CertificateItem";
import ThemeContext from "../../context/ThemeContext";

const certificateList = [
  {
    id: 1,
    name: "React JS",
    issueDate: "25 SEP 2025",
    link: "https://certificates.ccbp.in/intensive/react-js?id=SLUDQCATTR",
  },
  {
    id: 2,
    name: "Node JS",
    issueDate: "20 JUN 2025",
    link: "https://certificates.ccbp.in/intensive/node-js?id=JEEWWQXTRD",
  },
  {
    id: 3,
    name: "JavaScript Essentials",
    issueDate: "10 MAY 2025",
    link: "https://certificates.ccbp.in/intensive/javascript-essentials?id=XCRERSSCVD",
  },
  {
    id: 4,
    name: "Build Your Own Dynamic Web Application",
    issueDate: "07 MAY 2025",
    link: "https://certificates.ccbp.in/intensive/dynamic-web-application?id=YHXXBNTZRI",
  },
  {
    id: 5,
    name: "Python",
    issueDate: "12 MAY 2025",
    link: "https://certificates.ccbp.in/intensive/programming-foundations?id=UONAAAJDBQ",
  },
  {
    id: 6,
    name: "Responsive Web Design Using FlexBox",
    issueDate: "13 APR 2025",
    link: "https://certificates.ccbp.in/intensive/flexbox?id=FQNFGYJLXP",
  },
  {
    id: 7,
    name: "Introduction to Database",
    issueDate: "01 DEC 2024",
    link: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=IOXUVDMLEQ",
  },
  {
    id: 8,
    name: "Build Your Own Responsive Website",
    issueDate: "27 NOV 2024",
    link: "https://certificates.ccbp.in/intensive/responsive-website?id=KEESAUWQKN",
  },
  {
    id: 9,
    name: "Build Your Own Static Website",
    issueDate: "24 SEP 2024",
    link: "https://certificates.ccbp.in/intensive/static-website?id=KCHAWJUFNO",
  },
  {
    id: 10,
    name: "Git",
    issueDate: "04 MAY 2025",
    link: "https://certificates.ccbp.in/intensive/developer-foundations?id=HZCOAGMNUX",
  },
];

const MoreCertificates = () => {
  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDark } = value;
        const CertificateContainerBackground = isDark
          ? "dark-project-container"
          : "color-project-container";
        const OtherCertificateBoxBackground = isDark ? 'dark-other-certificates-container' : 'color-other-certificates-container'
        const HeadColor = isDark ? "head-itemm" : "color-head-itemm";
        const OtherCertificateName = isDark ? 'dark-other-certificate-name' : 'color-other-certificate-name'
        return (
          <>
            <Header />
            <div
              className={`more-certificate-container ${CertificateContainerBackground}`}
            >
              <h1 className={`${HeadColor}`}>CERTIFICATES</h1>
              <div className={`other-certificates-container ${OtherCertificateBoxBackground}`}>
                <h1 className={`other-certificate-name ${OtherCertificateName}`}>Other Certificates:-</h1>
                <ul className="other-certificates-sub-container">
                  {certificateList.map((eachCertificate) => (
                    <CertificateItem
                      key={eachCertificate.id}
                      certificateItem={eachCertificate}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default MoreCertificates;
