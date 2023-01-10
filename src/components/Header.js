import React from "react";
import Categories from "./Header/Categories";
import Navbar from "./Header/Navbar";

function Header() {
  return (
    <div className="container" id="start">
      <div className="red" />
      <Navbar />
      <Categories />
    </div>
  );
}

export default Header;
