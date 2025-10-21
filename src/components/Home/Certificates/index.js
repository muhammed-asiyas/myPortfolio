import "./index.css";
import ThemeContext from "../../../context/ThemeContext";

const Certificates = (props) => {
  const { certificateItem } = props;
  const { name, issueDate, link } = certificateItem;
  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDark } = value;
        const CertificateItemStyle = isDark ? 'dark-certificate-item-box' : 'color-certificate-item-box'
        const NameStyle = isDark ? 'dark-certificate-name' : 'color-certificate-name'
        const DateStyle = isDark ? 'dark-certificate-date' : 'color-certificate-date'
        const CertificateButton = isDark ? 'dark-view-certificate' : 'color-view-certificate'
        return (
          <li className={`${CertificateItemStyle}`}>
            <h1 className={`certificate-item-name ${NameStyle}`}>{name}</h1>
            <h1 className={`issue-date ${DateStyle}`}>{`Issue Date - ${issueDate}`}</h1>
            <a href={link}>
              <button type="button" className={`${CertificateButton}`}>
                View Certificate
              </button>
            </a>
          </li>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Certificates;
