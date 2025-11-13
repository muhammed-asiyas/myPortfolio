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
        const FontColor = isDark ? 'dark-font' : 'color-font'
        return (
          <a href={link} className={`${ContactItemBackground}`}>
            <img className="contact-logo-item" src={logo} alt={title} />
            <h1 className={`contact-title ${FontColor}`}>{title}</h1>
            <p className={`contact-display ${FontColor}`}>{displayText}</p>
          </a>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default ContactItems;
