import React, { useReducer, createContext } from "react";

export const ContactContext = createContext();

const initialState = {
  contacts: [
    {
      id: "098",
      name: "Mila Travis",
      email: "milatravis@email.com",
    },
    {
      id: "099",
      name: "Ben Jameson",
      email: "benwhitesmoke@gmail.com",
    },
    {
      id: "100",
      name: "Catherine Kent",
      email: "cathkent@hotmail.com",
    },
  ],
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        contacts: [...state.contacts, action.payload],
      };
    case "DELETE_CONTACT":
      return {
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case "START":
      return {
        loading: true,
      };
    case "COMPLETE":
      return {
        loading: false,
      };

    default:
      return state;
  }
};

export const ContactContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ContactContext.Provider value={[state, dispatch]}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactContext;
