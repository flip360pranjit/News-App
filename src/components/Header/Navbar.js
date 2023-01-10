import React from "react";

function Navbar() {
  return (
    <header className="blog-header lh-1 py-3">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-4 pt-1"></div>
        <div className="col-4 text-center">
          <a className="blog-header-logo text-dark brand-txt" href="/">
            Dummy News
          </a>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center"></div>
      </div>
    </header>
  );
}

export default Navbar;
