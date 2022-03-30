import React from "react";
import { linkedIn, gitHub } from "../api/EndPoints";

function Footer() {
  return (
    <footer className="page-footer font-small blue">
      <div className="footer-copyright text-center py-3">
        Created by:
        <a href="https://github.com/jrosales6213/vehicle-recalls">
          {" "}
          Jesus Rosales
        </a>
        <a
          className="btn btn-floating "
          href={gitHub}
          target="_blank"
          role="button"
        >
          <i className="fab fa-github fa-lg"></i>
        </a>
        <a href={linkedIn} target="_blank" className="btn btn-floating  ">
          <i className="fab fa-linkedin fa-lg"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
