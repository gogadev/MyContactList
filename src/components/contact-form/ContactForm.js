import React, { useState, useContext } from "react";
import { ContactContext } from "../../context/ContactContext";

import _ from "lodash";

import "./contact-form.style.css";

const ContactForm = () => {
  const [state, dispatch] = useContext(ContactContext);
  const name = useFormInput("");
  const email = useFormInput("");

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: { id: _.uniqueId(10), name: name.value, email: email.value },
    });
    name.onReset();
    email.onReset();
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <input type="text" {...name} placeholder="Enter Name" required />
      <input
        type="email"
        {...email}
        placeholder="e.g. example@.email.com"
        required
      />
      <button className="form-btn" type="submit">
        Add Contact
      </button>
    </form>
  );
};

const useFormInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleReset = () => {
    setValue("");
  };
  return {
    value,
    onChange: handleChange,
    onReset: handleReset,
  };
};

export default ContactForm;
