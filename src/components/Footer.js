import React from "react";
import "./Footer.css";
import logo from "../facebook.svg";
import plane from "../paper-plane.svg";
import insta from "../instagram.svg";
import linkedin from "../linkedin (1).svg";
function Footer() {
  return (
    <div>
      <div className="Footer"></div>
      <div className="Footer-end">
        <center>
          <div style={{ marginTop: "50px" }}>
            <img className="logos" src={logo} width="10rem" alt="img" />
            <img className="logos" src={insta} width="10rem" alt="img" />
            <img className="logos" src={plane} width="10rem" alt="img" />
            <img className="logos" src={linkedin} width="10rem" alt="img" />
          </div>
        </center>
      </div>
    </div>
  );
}

export default Footer;
