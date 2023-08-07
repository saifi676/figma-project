import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Header from "../components/Header"
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="footer-landing">
        <p className="company">©2023 Yourcompany</p>
        <p className="p-footer">Landing</p>
        <button className="button-footer">Purchase Now</button>
        </div>
        <hr />
        <Header/>
        <nav className="icon-footer">

          <NavLink target="_blank" to="https://www.facebook.com/">
            <FacebookIcon />
          </NavLink>

          <NavLink target="_blank" to="https://www.instagram.com/">
            <InstagramIcon />
          </NavLink>

          <NavLink target="_blank" to="https://twitter.com/">
            <TwitterIcon />
          </NavLink>

          <NavLink target="_blank" to="https://www.google.com/">
            <LinkedInIcon />
          </NavLink>
          
        </nav>
        
      </section>
    </div>
  );
};
export default Footer;
