import React from "react";

import image from "../../assets/img.png";

import "./header.style.css";

const Header = () => {
  return (
    <header>
      <h1 className="title">
        <span>My</span>ContactList
      </h1>
      <img className="image" src={image} alt="" />
    </header>
  );
};

export default Header;
