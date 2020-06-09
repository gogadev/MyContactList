import React, { useState, useContext } from "react";
import { ContactContext } from "../../context/ContactContext";

import user from "../../assets/user.png";

import "./contact-view.style.css";

const ContactView = () => {
  const [state, dispatch] = useContext(ContactContext);
  const [selectedId, setSelectedId] = useState();

  const deleteContact = (id) => {
    dispatch({
      type: "DELETE_CONTACT",
      payload: id,
    });
  };

  const removeUser = () => {
    deleteContact(selectedId);
    setSelectedId(null);
  };

  const list = state.contacts.map((contact) => {
    return (
      <ul
        className="contact"
        key={contact.id}
        onClick={() => setSelectedId(contact.id)}
        active={contact.id === selectedId}
      >
        <li>Id: {contact.id}</li>
        <li>Name: {contact.name}</li>
        <li>Email: {contact.email}</li>
      </ul>
    );
  });
  return (
    <div className="contact-view">
      {list}
      {list.length > 0 ? (
        <button className="btn" disabled={!selectedId} onClick={removeUser}>
          Remove User
        </button>
      ) : (
        <h1 className="title contact-title">
          <img className="user" src={user} alt="" />
        </h1>
      )}
    </div>
  );
};

export default ContactView;
