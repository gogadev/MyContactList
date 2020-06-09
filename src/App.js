import React from "react";

import Header from "./components/header/Header";
import ContactForm from "./components/contact-form/ContactForm";
import ContactView from "./components/contact-view/ContactView";

import { ContactContextProvider } from "./context/ContactContext";

import "./App.css";

const App = () => {
  return (
    <ContactContextProvider>
      <Header />
      <ContactForm />
      <ContactView />
    </ContactContextProvider>
  );
};

export default App;
