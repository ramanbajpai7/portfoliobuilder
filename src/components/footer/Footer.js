import React from "react";
import "./Footer.scss";
import SocialMedia from "../socialMedia/SocialMedia";
import { Fade } from "react-reveal";

export default function Footer() {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text">
          Made with <span role="img">❤️</span> by Raman
        </p>
        <SocialMedia />
      </Fade>
    </div>
  );
}
