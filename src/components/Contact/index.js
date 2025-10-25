import { useState } from "react";
import Header from "../Header";
import ThemeContext from "../../context/ThemeContext";
import "./index.css";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "7e8af641-7be5-4dd4-8f4b-8a8dc8c3877a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <ThemeContext.Consumer>
      {(value) => {
        const { isDark } = value;
        const ContactContainerBackground = isDark
          ? "dark-project-container"
          : "color-project-container";
        const HeadColor = isDark ? "head-itemm" : "color-head-itemm";
        const FormContainer = isDark
          ? "dark-form-container"
          : "color-form-container";
        const InputFieldBackground = isDark
          ? "dark-input-field"
          : "color-input-field";
        const SubmitFormBackground = isDark ? 'dark-submit-form' : 'color-submit-form'
        return (
          <>
            <Header />
            <div className={`contact-container ${ContactContainerBackground}`}>
              <h1 className={`${HeadColor}`}>CONTACT</h1>
              <form
                className={`form-container ${FormContainer}`}
                onSubmit={onSubmit}
              >
                <input
                  className={`input-field ${InputFieldBackground}`}
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  required
                />
                <input
                  className={`input-field ${InputFieldBackground}`}
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  required
                />
                <textarea
                  className={`input-field ${InputFieldBackground}`}
                  name="message"
                  placeholder="Type Message"
                  required
                  rows={8}
                ></textarea>
                <button type="submit" className={`submit-form ${SubmitFormBackground}`}>
                  Send Message
                </button>
                <span>{result}</span>
              </form>
            </div>
          </>
        );
      }}
    </ThemeContext.Consumer>
  );
}
