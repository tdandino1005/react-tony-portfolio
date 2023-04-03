import React, { useState } from "react";

import { validateEmail } from "../../utils/helpers";

const styles = {
  h2: {
    textAlign: "center",
  },
  form: {
    textAlign: "center",
  },
  email: {
    textAlign: "center",
    color: "#0000FF",
  },
  input: {
    margin: "0.75rem",
  },
  inputa: {
    height: "5rem",
  },
};

function Form() {
  const [email, setEmail] = useState("");
  const [Name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "Name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert("Email is not valid");
      return;
    }

    if (!Name) {
      alert("Field is Required");
      return;
    }

    if (!message) {
      alert("Field is Required");
      return;
    }

    if (email || Name || message) {
      setSuccessMessage("Form Successfully Submitted!");
      return;
    }

    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div>
      <h2 style={styles.h2}>Contact</h2>
      <div style={styles.email}>
        <a href="mailto:tdandino1005@gmail.com">tdandino1005@gmail.com</a>
      </div>
      <form action="mailto:tdandino1005@gmail.com" method= "post" encType="text/plain" style={styles.form} className="form">
        <div style={styles.input}>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
            required
          />
        </div>
        <div style={styles.input}>
          <input
            value={Name}
            name="Name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
            required
          />
        </div>
        <div style={styles.input}>
          <input
            style={styles.inputa}
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="message"
            required
          />
        </div>
        <div>
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </form>
      {successMessage && (
        <div style={styles.form}>
          <p className="success-text">{successMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
