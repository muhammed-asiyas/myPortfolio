import "./index.css";
import ThemeContext from "../../../context/ThemeContext";

const ContactItems = (props) => {
  const { contactItem } = props;
  const { logo, title, displayText, link } = contactItem;
  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDark } = value;
        const ContactItemBackground = isDark ? 'dark-contact-item' : 'color-contact-item'
        return (
          <a href={link} className={`${ContactItemBackground}`}>
            <img className="contact-logo-item" src={logo} />
            <h1 className="contact-title">{title}</h1>
            <p className="contact-display">{displayText}</p>
          </a>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default ContactItems;
